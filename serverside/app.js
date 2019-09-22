//GENERAL DEPENDENCIES
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const customRouter = require('./routes/router')
const generalErrorHandlers = require('./error_handlers/main')


//INIT
const port = 2020;
const app = express()

//CONFIG
app.disable('x-powered-by')

//MIDDLEWARES
app.use(cors())
    // setup the logger
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'requestslog.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.json())
app.use('/api/v1', myRouter)

//ERROR HANDLING
app.use(generalErrorHandlers)

//BOOTUP
app.listen(port, () => console.log('Listening on port: ' + port))