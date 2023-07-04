const router = require('express').Router()
const fs = require('fs')
const path = require('path')




router.route('/newuser').post( (req, res) => {
    if (req.body) {
        const { name, email, password } = req.body
        const filename = path.join(__dirname, '..','..','client',
            'public', 'persons.json')

        const foldername = path.join(__dirname, '..','..','client',
            'public', 'persons')

        try {
            if (!fs.existsSync(filename)) {
                fs.writeFileSync(filename, '[]', 'utf-8')
                fs.mkdir(foldername, err => {
                    if (err) {
                        return res.send({ err })
                    }
                })
                //return res.send({ data: req.body, filename: 'new' })
            }


            
            var persons = require('./../../client/public/persons.json')
            var isuser = false
            if (persons) {
                
                if (persons.length === 0) {
                    isuser = false
                } else {
                    persons.map(item => {
                        if (item.email === email) {
                            isuser = true
                        }
                    })
                }
                if (isuser) {
                    return res.send({ data: req.body, persons: persons, isuser: isuser })
                } else {
                    persons.push({
                        id: persons.length,
                        name: name,
                        email: email,
                        password: password
                    })
                    try {
                        fs.writeFileSync(filename, JSON.stringify(persons, null, 2), 'utf-8')
                        const foldername1 = path.join(foldername, email)
                        fs.mkdir(foldername1, err => {
                            if (err) {
                                return res.send(err)
                            } else {
                                fs.mkdir(path.join(foldername1, 'images'), err1 => {
                                    if (err1) {
                                        return res.send(err1)
                                    }
                                })
                                try {
                                    fs.writeFileSync(path.join(foldername1, name +
                                        (require('./../../client/public/persons.json').length-1)+ '.json')
                                        , '[]', 'utf-8')
                                } catch (error) {
                                    return res.send(error)
                                }


                            }
                        })
                        fs.readFile(filename,'utf-8',(err,result)=>{
                            if(err){
                                return res.send(err)
                            }else{
                                return res.send({ data: req.body, persons: JSON.parse(result) ,isuser:isuser})
                            }
                        })
                        
                    } catch (error) {
                        return res.send(error)
                    }
                }
            }
        } catch (error) {
            return res.send(error)
        }
    }

})

module.exports = router