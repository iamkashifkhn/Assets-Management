import React, { useState, useEffect } from "react";
import "./viewAssets.css";
import axios from 'axios';
import { Spin} from "antd";
import { useParams } from "react-router-dom";

function ViewAssets() {
  const [data, setData ]= useState([])
  const [loading, setLoading] = useState(true);
  const {id} = useParams()
  const apiURL = 'https://assets-management-6cdf7-default-rtdb.firebaseio.com/assets.json'

  const requestAPI = async()=>{
    try{
      const res = await axios.get(apiURL)
      console.log(res.data[id])
      setLoading(!loading)
      setData(res.data[id])
    }
    catch(error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    requestAPI()
  },[])
  return (
    <div className="assets__view-container">
      {
        loading?
        <div className="assets__loader">
          <Spin size="large" />
        </div> :
              <div className="assets__view-content">
              <h4>{data.employee}</h4>
              <hr/>
                <ul className="assets__view-content-list">
                   <li><span>Type:</span>{data.itemtype}</li>
                   <li><span>Model:</span>{data.model}</li>
                   {
                    data.itemtype==='Laptop'?
                    <>
                   <li><span>Ram:</span>{data.RAM}</li>
                   <li><span>Hard </span>{data.Hard}</li>
                   <li><span>IMEI </span>{data.IMEI}</li>
                    </>: null
                   }
        
                </ul>
                </div>
      }

    </div>
  );
}

export default ViewAssets;
