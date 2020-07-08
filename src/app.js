const express = require('express')
const database = require('./db/conection')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use('/', require("./routes/index"))
app.use('/lesson', require("./routes/lesson"))

database()
    .then(info=>{
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
        app.listen(3000, () => 
            console.log(`Example app listening on port ${3000}!`)
        ) 
    })
    .catch(()=>{
        console.error('unable to conect to db\n\n')
    })


