const express = require('express')
const apiRouting = require('./Controller/CoinDataController.js')
const Polling = require('./Controller/PollingCoinDataController.js')
const DBConnection = require('./Utils/DBConfig.js')
var cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


//DB Connection
DBConnection()

//Api Routing for Controllers
app.use('/api/v1',apiRouting)

Polling.pollingCoinData()


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})