const router = require('express').Router()
const fs = require('fs')
const path = require('path')


router.route('/getusers').get((req, res) => {
    let filepersons = path.join(__dirname, '..','..','client', 'public'
        , 'persons.json')
    if (fs.existsSync(filepersons)) {
        fs.readFile(filepersons,'utf-8',(err,result)=>{
            if(err){
                return res.send(err)
            }else{
                var p=[]
                file=require(filepersons)
                file.map(item=>{
                    p.push({
                        id:item.id,
                        name:item.name,
                        email:item.email
                    })
                })
                return res.send({ users: p})
            }
        })
        //return res.send({ users: ['exist users'] })
    } else {
        return res.send({ users: ['not users'] })
    }
})
module.exports = router