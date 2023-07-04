const router = require('express').Router()

const users = require('./../../client/public/persons.json')

router.route('/uploadfile/:email').get((req, res) => {
    const email = req.params.email
    var isemail = false
    const p = users.find(u => u.email === email)
    p ? isemail = true : isemail = false
    res.send({
        data: {
            email: email, id: p.id, name: p.name, isemail: isemail
            ,
            data: require('./../../client/public/persons/' + p.email + '/' + p.name + '' + p.id+'.json')
        }
    })
})


module.exports = router