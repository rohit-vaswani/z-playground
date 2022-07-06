import {useEffect, useState} from "react"


export const useDataSource = (dataSourceUri) => {

  const [response, setResponse] = useState(null)

  const fetchData = () => {
    fetch(dataSourceUri).then(res => res.json()).then(jsonRes => {
      setResponse(jsonRes)
    })
  }


  useEffect(() => {
    fetchData()
  }, [])


  return [response, fetchData]


}