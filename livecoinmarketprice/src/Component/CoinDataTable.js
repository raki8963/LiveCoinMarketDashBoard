import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { selectData, setData, selectCoin } from '../slices/dataSlice'
import { useCallback } from 'react'
import { fetchLatestCOinData } from '../services/fetchRealtimeCoindata'
import Table from 'react-bootstrap/Table'

const CoinDataTable = () => {
  const dispatch = useDispatch()
  const coinData = useSelector(selectData)
  const selectedCoin = useSelector(selectCoin)

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchLatestCOinData(selectedCoin)
      console.log(data)
      dispatch(setData(data))
    } catch (error) {
      console.log("Failed to fetch Data : ", error)
    }
  }, [selectedCoin, dispatch]);

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 10000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, [fetchData])



  return (
    <div>
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
            <tr key={item._id}>
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
  )
}

export default CoinDataTable;