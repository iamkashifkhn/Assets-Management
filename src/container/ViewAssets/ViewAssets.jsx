import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ViewAssets() {
  const [data, setData] = useState([])
  const getApiData = async ()=>{
    try {
      const result = await axios.get("https://assets-management-6cdf7-default-rtdb.firebaseio.com/assets.json")
      setData(result.data)
    }
    catch{
      console.log("error")
    }
  }
  console.log(typeof(data))
  useEffect(()=>{
    getApiData()
  },[])
  return (
    <div>
  
    </div>
  )
}

export default ViewAssets