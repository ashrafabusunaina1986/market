const router = require('express').Router()
const path = require('path')
const clients = require('./../../client/public/clients/client.json')
const fs = require('fs')


router.route('/item/:email/buyitem').post((req, res) => {
    var email = req.params.email
    var { name, address, mobile } = req.body.client
    var filepath = req.body.filepath, item_name = req.body.name, price = req.body.price

    fs.readFile(path.join(__dirname,'..','..','client','public','clients','client.json'),
     'utf-8',
        (err, result) => {
            if (err) {
                return res.send({error1:err})
            }
            clients.push({
                client_id: clients.length,
                client_email: email,
                client_address: address,
                client_mobile: mobile,
                client_name: name,
                item_name: item_name,
                filepath: filepath,
                price: price
            })
            fs.writeFile(path.join(__dirname,'..','..','client','public','clients','client.json'),
                JSON.stringify(clients, null, 2),
                'utf-8', (err) => {
                    if (err) {
                       return res.send({error2:err})
                    }
                    return res.send({c:clients.find(i=>i.client_id===clients.length-1)})
                })
        })
})
module.exports = router