import React from "react";
import "./addassets.css";
import { Select } from "antd";

function AddAssets() {
  const items = ['mouse', 'keyboard', 'Laptop', 'Headphone','USB']
  return (
    <div className="assets__add">
      <div className="assets__add-heading">
        <h4> Add Assets Information </h4>
      </div>
      <div className="assets__add-content">
        <h4 className="assets__add-content_heading">Assets Information</h4>
      </div>
      <div className="assets__add-content_input">
          <div className="assets__add-content_first">
            <span>
              <p> Type</p>
            </span>
          <Select style={{width: 200}} placeholder='Select Item'>
          {items.map((item, index)=>{
            return(
              <Select.Option value={item} key={index}/>
            )
          })}
          </Select>
        
          </div>
        <div className="assets__add-content_second">
          <span>
            <p>Model</p>
          </span>
          <Select style={{width: 200}} placeholder='Select Item'>
          {items.map((item, idx)=>{
            return(
              <Select.Option value={item} key={idx}/>
            )
          })}
          </Select>
        </div>

      </div>
    </div>
  );
}

export default AddAssets;
