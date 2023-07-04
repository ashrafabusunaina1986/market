const router = require('express').Router()
const persons = require('../../client/public/persons.json')
const path = require('path')

router.route('/getitems').get((req, res) => {
    var itemss1 = []
    var email = req.query.email
    if(!email){
            persons.map((item, ind, arr) => {
                var filename = path.join(__dirname, '..', '..', 'client', 'public', 'persons', item.email, item.name + item.id + '.json')
                var items = require(filename)
                itemss1.push({data:items,email:item.email,length:items.length})
                console.log(items)
            })
    }else{
        var person=persons.find(p=>p.email===email)
        var filename=path.join(__dirname, '..', '..', 'client', 'public', 'persons', email, person.name + person.id + '.json')
        var its=require(filename)
        itemss1.push({data:its,email:email,length:its.length})
    }


    res.send(itemss1)


})
module.exports = router
