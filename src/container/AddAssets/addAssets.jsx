import React, { useState } from "react";
import "./addassets.css";

function AddAssets() {
  const [item, setItem] = useState({
    itemtype: "",
    model: "",
    employee: "",
  });

  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setItem({ ...item, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { itemtype, model, employee } = item;
    if (itemtype && model && employee) {
      const res = await fetch(
        "https://assets-management-6cdf7-default-rtdb.firebaseio.com/assets.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemtype, model, employee }),
        }
      );
      if (res) {
        setItem({ itemtype: "", model: "", employee: "" });
      }
    } else {
      alert("Please fill the data first");
    }
  };
  return (
    <div className="assets__add">
      <div className="assets__add-heading">
        <h4> Add Assets Information </h4>
      </div>
      <div className="assets__add-content">
        <h4 className="assets__add-content_heading">Assets Information</h4>
      </div>
      <div className="assets__add-content_input">
        <form method="POST">
          <span>
            <p> Type </p>
            <input
              type="text"
              placeholder="Item type"
              name="itemtype"
              value={item.itemtype}
              onChange={getData}
              required
            />
          </span>

          <span>
            <p>Model</p>
            <input
              type="text"
              placeholder="Item model"
              name="model"
              value={item.model}
              onChange={getData}
              required
            />
          </span>

          <span>
            <p>Employee </p>
            <input
              type="text"
              placeholder="Employee name"
              name="employee"
              value={item.employee}
              onChange={getData}
              required
            />
          </span>

          <button type="submit" onClick={postData}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAssets;
