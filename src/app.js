const express = require('express')
require('dotenv').config()
const database = require('./db/conection')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json({extended:true}))

app.use('/', require("./routes/index"))
app.use('/lesson', require("./routes/lesson"))
app.use('/group', require("./routes/group"))
app.use('/classroom', require("./routes/classroom"))
app.use('/student', require("./routes/student"))
app.use('/teacher', require("./routes/teacher"))

database()
    .then(info=>{
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
        app.listen(process.env.PORT, () => 
            console.log(`Example app listening on port ${process.env.PORT}!`)
        ) 
    })
    .catch(()=>{
        console.error('unable to conect to db\n\n')
    })


