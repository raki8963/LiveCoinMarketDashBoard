import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoin, selectCoin } from "../slices/dataSlice";

const ChangeCoinModel = () => {
    const dispatch = useDispatch();
    const selectedCOin = useSelector(selectCoin);

    const listOfcoins = ["BTC", "ETH", "USDT", "BNB", "SOL"];

    const handleChange = (event) => {
        dispatch(setCoin(event.target.value))
    }

    return (
        <div>
            <div align="center">
                <select value={selectedCOin} onChange={handleChange}>
                    {listOfcoins.map((eachCoin) => (
                        <option key={eachCoin} value={eachCoin}>{eachCoin}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default ChangeCoinModel