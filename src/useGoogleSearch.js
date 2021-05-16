import { useState, useEffect } from 'react'

const CONTEXT_KEY = 'efdf711ef38a197d6'
const useGoogleSearch = (term) => {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result))
    }
    fetchData()
  }, [term])
  return { data }
}

export default useGoogleSearch
