const express = require('express')
const expressUpload=require('express-fileupload')

const postname = require('./routes/postname')
const getPersons = require('./routes/getPerson')
const uploadfile = require('./routes/uploadFile')
var getEmail=require('./routes/getEmail')
const login=require('./routes/login')
const getItems=require('./routes/getItems')
const getData=require('./routes/getData')
const getInfEmail=require('./routes/showInfEmaik')
const buyItem=require('./routes/but_item')
const finish=require('./routes/finish')

const postEmail=require('./routes/email/postemail')

const app = express()

app.use(require('cors')())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(postname)
app.use(getPersons)
app.use(expressUpload(),uploadfile)
app.use(getEmail)
app.use(login)
app.use(postEmail)
app.use(getItems)
app.use(getData)
app.use(getInfEmail)
app.use(buyItem)
app.use(finish)

const port = process.env.PORT || 8010
app.listen(port, () => console.log(`http://localhost:${port}`))