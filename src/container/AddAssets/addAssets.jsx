import React from "react";
import "./addassets.css";
import Card from '../../components/cards/Card'

function AddAssets() {

  return (
    <div className="assets__add">
      <div className="assets__add-heading">
        <h4> Dashboard</h4>
      </div>
      <div className="assets__card">
      <Card title="Employees" numOfEmployees="10" />
      <Card title="Assets Free" numOfEmployees="3" />
      <Card title="Assets Deployed" numOfEmployees="14" />
      </div>
    </div>
  );
}

export default AddAssets;
