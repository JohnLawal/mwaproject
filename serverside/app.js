//GENERAL DEPENDENCIES
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()


const packagesRouter = require('./routes/packages/routes')
const investorsRouter = require('./routes/investors/routes')
const adminRouter = require('./routes/admin/routes')
const generalErrorHandlers = require('./error_handlers/main')


//INIT
const port = 2020;


//CONFIG
app.disable('x-powered-by')

//MIDDLEWARES
app.use(cors())
    // setup the logger
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'requestslog.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.json())

app.use('/api/v1/investor', investorsRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/packages', packagesRouter)

//ERROR HANDLING
app.use(generalErrorHandlers)



//BOOTUP
app.listen(port, () => {
    console.log("application is running on port ", +port);
})