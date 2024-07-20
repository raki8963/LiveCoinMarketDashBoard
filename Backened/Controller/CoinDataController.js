const express = require('express')
const  router = express.Router()
const axios = require('axios')
const Configuration = require('../Utils/Properties.js');
const LiveCoinApiDetails = Configuration.apiDetails;

const CoinDataService = require('../Service/CoinDataService.js');

router.post('/coinList',CoinDataService.getCoinList)
router.get('/getAllCoinsLatestPrice',CoinDataService.fetchLatestCoinsPriceDataMongoDb)
router.post('/singleCoinPrice',CoinDataService.fetchLatestSingleCoinPrice)

module.exports = router;