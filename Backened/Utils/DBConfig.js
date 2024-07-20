const properties = require('./Properties.js')
const mongoose = require('mongoose')

CoinMapDB = {}

//MONGODBConnection
const connectDB = async () => {
    try{
        await mongoose.connect(properties.mongoDBKeys.URL)
        console.log("Connected to MONGODB....")
    }catch(error){
        console.log("MongoDb connection error...")
        process.exit(1)
    }   
}

module.exports = connectDB