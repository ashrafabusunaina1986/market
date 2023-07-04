const router=require('express').Router()
const users=require('../../client/public/persons.json')

router.route('/login').post((req,res)=>{
    const {email,password}=req.body
    const user=users.find(u=>u.email===email && u.password===password)
    let isuser=false
    user?isuser=true:isuser=false
    return res.send({user:user,isuser:isuser})
})

module.exports=router