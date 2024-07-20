import { useState, useEffect } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table'

function App() {

  const [coin, setCoin] = useState("BTC")
  const [coinData, setCoinData] = useState([])
  const [count, setCount] = useState(0)

  const listOfcoins = ["BTC", "ETH", "USDT", "BNB", "SOL"]

  //console.log(listOfcoins)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          "code": coin
        }
        console.log(payload)
        const response = await axios.post('http://localhost:3000/api/v1/singleCoinPrice', payload)
        console.log(response.data)
        setCoinData(response.data)
      } catch (err) {
        console.log("Error in fetching coin data...")
      }
    }
    fetchData()
  }, [coin])

  const handleCoinChange = (event)=>{
    setCoin(event.target.value);
  }

  return (
    <div>
      <h1 align="center">Live Coin Data Dashboard</h1>
      <div align="center">
        <select value={coin} onChange={handleCoinChange}>
          {listOfcoins.map((eachCoin) => (
            <option key={eachCoin} value={eachCoin}>{eachCoin}</option>
          ))}
        </select>
      </div>
      <Table>
        <thead>
          <tr>
            <th width="170">COIN NAME</th>
            <th width="170">Price</th>
            <th width="170">Market Cap</th>
            <th width="170">Volume</th>
            <th width="170">UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((item) => (
            //<tr>{count+1}</tr>,
            <tr>
              <td>{item.COIN_NAME}</td>
              <td>{item.Price}</td>
              <td>{item.MarketCap}</td>
              <td>{item.Volume}</td>
              <td>{item.createdAt}</td>
            </tr>

          ))}
        </tbody>
      </Table>
    </div>

  );
}

export default App;
