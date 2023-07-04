const router=require('express').Router()

router.route('/uploadfile/:email').get((req,res)=>{
     var {email,file}=req.params
    // var filename=path.join(__dirname,'..','..','client','public','persons',email,file)
    var data=require('./../../client/public/persons/')
    console.log(data)
    res.send({
        d:data,newlength:data.length
    })
})

module.exports=router