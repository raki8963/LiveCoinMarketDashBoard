const axios = require('axios')
const Configuration = require('../Utils/Properties.js')
const Model = require('../Models/CoinModel.js')
const StoreData = require('../Service/DataBaseService.js')

const LiveCoinApiDetails = Configuration.apiDetails
const CoinList = Model.CoinList


//Get list of coins
const getCoinList = async (req, res) => {
    console.log("Inside Coinlist implementation...")
    try {
        const { currency, sort, order, offset, limit, meta } = req.body;
        const response = await axios.post(LiveCoinApiDetails.BASE_URL + '/coins/list',
            {
                currency,
                sort,
                order,
                offset,
                limit,
                meta
            },
            {
                headers: {
                    'x-api-key': LiveCoinApiDetails.API_KEY,
                    'Content-Type': 'application/json'
                }
            })
         
        res.json(response.data);
    } catch (error) {
        console.error('Error in Feteching Data..', error);
        res.status(500).json({ error: 'Failed in fetching coins list ' + error })
    }
}

const fetchLatestCoinsPriceDataMongoDb = async (req, res) => {
    try {        
        
        const codes = ["BTC", "ETH","USDT","BNB","SQL"]
        const response = {}
        for(coin of codes){
            const latestData = await StoreData.getCoinsData(coin)
            response[coin] = latestData
        }
        //console.log(response)
        res.json(response)
    } catch (error) {
        console.error('Error in Feteching Latest Coin Data..', error);
        throw error
    }
}

const fetchLatestCoinDataFromApi = async (req) => {
    const { codes, currency, sort, order, offset, limit } = req
    let LatestPrice;

    const response = await axios.post(LiveCoinApiDetails.BASE_URL + "/coins/map",
        {
            codes,
            currency,
            sort,
            order,
            offset,
            limit
        },
        {
            headers: {
                'x-api-key': LiveCoinApiDetails.API_KEY,
                'Content-Type': 'application/json'
            }
        })
        StoreData.storeCoinData(response.data)
}

const fetchLatestSingleCoinPrice = async (req,res)=>{
    try{
        const latestData = await StoreData.getCoinsData(req.body.code)
        res.json(latestData)
    }catch(error){
        console.log("Error in fetching coin data...",error)
        throw error
    }
    

}

module.exports = {
    getCoinList,
    fetchLatestCoinsPriceDataMongoDb,
    fetchLatestCoinDataFromApi,
    fetchLatestSingleCoinPrice
}