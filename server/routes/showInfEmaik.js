const router = require('express').Router()


router.route('/item/:email/:id').get((req, res) => {
    var { email, id } = req.params
    const persons = require('./../../client/public/persons.json')
    var person = persons.find(p => p.email === email )
    var filename= require(`../../client/public/persons/${person.email}/${person.name}${person.id}.json`)
    var inf=filename.find(i=>i.id===Number(id))
    if (!inf) {
        console.log(person)
        var itemss1=[]
        persons.map((item) => {
            var items = require(`../../client/public/persons/${item.email}/${item.name}${item.id}.json`)
            itemss1.push(items)
        })
        var it=[]
        itemss1.map(item1 => {
            item1.map(item2 => {
              it.push({
                id:it.length,
                name: item2.name,
                price: item2.price,
                filename: item2.filename,
                email: item1.email
              })
            })
        })
        var info_person=it.find(i=>i=i.id===Number(id))
        res.send({items:info_person})
    } else {
        res.send({
            items: require(`../../client/public/persons/${person.email}/${person.name}${person.id}.json`)
                .find(i => i.id === Number(id))
        })
    }

})
module.exports = router