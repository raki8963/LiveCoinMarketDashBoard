const mongoose = require('mongoose')

//Storing all 5 coins in one schema as it has Similar Structure...
const CoinSchema = mongoose.Schema(
    {
        COIN_NAME:{
            type: String,
            required: [true],
            index:true
        },
        Price:{
            type: Number,
            required: [true],
            default: 0.0
        },
        Currency:{
            type: String,
            required: [true]
        },
        MarketCap:{
            type:String,
            required: [true]
        },
        Volume:{
            type:String,
            required: [true]
        },
        LastUpdatedTime:{
            type: Date,
            required: [true]
        }
    },{
        timestamps:true
    }
);


const Coin = mongoose.model('Coin', CoinSchema);

module.exports = {
    Coin
}