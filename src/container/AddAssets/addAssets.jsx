import React, { useState, useEffect } from "react";
import "./addassets.css";
import Card from '../../components/cards/Card'
import { getDatabase, ref, child, get } from "firebase/database";
import {Link} from 'react-router-dom'
import {UserOutlined} from '@ant-design/icons'
import Add from '../../components/Add/Add'

function AddAssets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `assets/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);

  return (
    <div className="assets__add">
      <div className="assets__add-heading">
        <h4> Dashboard</h4>
      </div>
      <div className="assets__card">
      <Card title="Employees" numOfEmployees="10" icon={<UserOutlined/>}/>
      <Card title="Assets Free" numOfEmployees="3" icon={<UserOutlined/>}/>
      <Card title="Assets Deployed" numOfEmployees="14" icon={<UserOutlined/>}/>
      </div>
      <Add/>
      <div className="assets__dashbaord-content">
            {
              Object.keys(data).map((item,idx)=>{
                return(
                  <div className="employee" key={idx}>
                      <span>
                        {data[item].employee}
                      </span>
                      <Link to={`/main/assets/${Object.keys(data)[idx]}`}>
                          <button className="assets__view">
                               View Details
                          </button>
                      </Link>
                  </div>
                )
              })
            }
      </div>
    </div>
  );
}

export default AddAssets;
