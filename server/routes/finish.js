const router=require('express').Router()
const clients=require('./../../client/public/clients/client.json')

router.route('/item/:email/buyitem/finish/:id').get((req,res)=>{
    var{email,id}=req.params

    var client=clients.find(c=>c.client_email===email && c.client_id===Number(id))
    res.send(client)
})

module.exports=router