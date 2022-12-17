import React, { useState } from "react";
import "./addassets.css";
import { Select } from "antd";

function AddAssets() {
  const [laptop, setLaptop] = useState(false);
  const [item, setItem] = useState({
    itemtype: "",
    model: "",
    employee: "",
  });

  const handleChange = (value) => {
    setItem({
      itemtype: value,
    });
    if (value === "Laptop") {
      setLaptop(!laptop);
    } else {
      setLaptop(false);
    }
  };

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
          <div className="assets__add-content-select">
            <span>
              <p>Type</p>
              <Select
                style={{
                  width: 200,
                  height: 30,
                }}
                onChange={handleChange}
                defaultValue="Select Type"
                options={[
                  {
                    value: "Mouse",
                    label: "Mouse",
                  },
                  {
                    value: "Keyboard",
                    label: "Keybaord",
                  },
                  {
                    value: "Laptop",
                    label: "Laptop",
                  },
                  {
                    value: "Headphone",
                    label: "Headphone",
                  },
                ]}
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
          </div>
          {laptop ? (
            <div>
              <span>
                <p> RAM </p>
                <input
                  type="text"
                  placeholder="Ram"
                  name="RAM"
                  value={item.model}
                  onChange={getData}
                  required
                />
              </span>
              <span>
                <p> Hard </p>
                <input
                  type="text"
                  placeholder="Hard Disk"
                  name="Hard"
                  value={item.model}
                  onChange={getData}
                  required
                />
              </span>

              <span>
                <p> IMEI </p>
                <input
                  type="text"
                  placeholder="Laptop IMEI"
                  name="IMEI"
                  value={item.model}
                  onChange={getData}
                  required
                />
              </span>
            </div>
          ) : (
            null
          )}
          <button type="submit" onClick={postData}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAssets;
