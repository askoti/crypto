import axios from "axios"
import { useEffect, useState } from "react"

const useFetchCoin = (id) => {
  const [coin, setCoins] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchCoins = async () => {
    setLoading(true)
    try {
        const {data} = await axios.get(`https://api.coinstats.app/public/v1/coins/${id}`)
        setCoins(data.coin)
        setLoading(false)
    } catch (err) {
        setLoading(false)
        setError(err)
    }
  }

  useEffect(() => {
    fetchCoins()
  }, [id])

  return { coin, loading, error }
}

export default useFetchCoin