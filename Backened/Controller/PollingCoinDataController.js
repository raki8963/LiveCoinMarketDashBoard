const CoinDataService = require('../Service/CoinDataService.js')

//Store the data in MongoDB for every 30 seconds
const RequestBody = {
    "codes": [
        "ETH",
        "USDT",
        "BTC",
        "SOL",
        "BNB"
    ],
    "currency": "USD",
    "sort": "rank",
    "order": "ascending",
    "offset": 0,
    "limit": 5,
    "meta": false
}

const pollingCoinData = ()=>{
    setInterval(async () => {
        try{
            await CoinDataService.fetchLatestCoinDataFromApi(RequestBody)
        }catch(error){
            console.log(error)
        }
    },10000)
}

module.exports = {
    pollingCoinData
}