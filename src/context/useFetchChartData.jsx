import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchChartData = (id, period) => {
  const [chartData, setChartData] =  useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchChartData = async() => {
    setLoading(true)
    try {
        const {data} = await axios.get(`https://api.coinstats.app/public/v1/charts?period=${period}&coinId=${id}`)
        setChartData(data.chart)
        setLoading(false)
    }
    catch (err) {
        setError(err)
    }
  }

  useEffect(() => {
    fetchChartData()
  }, [period, id])
  
  return {chartData, loading, error}
}

export default useFetchChartData