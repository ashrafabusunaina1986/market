const router = require('express').Router()
const p=require('./../../../client/public/persons.json')

router.route('/email').post((req, res) => {
    const {email}=req.body
    const person=p.find(u=>u.email===email)
    var isuser=false
    person?isuser=true:isuser=false
    const e=person?person.email:''
    res.send({isuser,e})
})
module.exports=router