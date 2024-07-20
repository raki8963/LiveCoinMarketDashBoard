import axios from "axios";

export const fetchLatestCOinData = async (coin) => {
    const payload = {
        "code": coin
      }
    console.log(payload)
    const response = await axios.post('http://localhost:3000/api/v1/singleCoinPrice', payload)
    return response.data
}