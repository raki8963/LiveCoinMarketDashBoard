const mongoose = require('mongoose')

CoinSchema = require('../Models/CoinModel.js')
console.log(CoinSchema.Coin)

const PollCoinData = CoinSchema.Coin




//Store the coin data in mongoDB
const storeCoinData = async(coinData) => {
    try{
        for(const latestcoin of coinData){
            const newCoin = new PollCoinData({
                COIN_NAME: latestcoin.code,
                Price: latestcoin.rate,
                Currency: 'USD',
                MarketCap: latestcoin.cap,
                Volume: latestcoin.volume,
                LastUpdatedTime: new Date(),
            })
            console.log(newCoin)
            await PollCoinData.insertMany(newCoin)
        }
        console.log('Latest Coin Data stored in dataBase')
    }catch(error){
        throw error
    }
}

const getCoinsData = async (name)=>{
    try{
        const response = await PollCoinData.find({COIN_NAME:name}).sort({createdAt:-1}).limit(20)
        console.log(response)
        return response
    }catch(error){
        throw error;
    }
}

module.exports = {
    storeCoinData,
    getCoinsData
}