import React, {useState} from 'react'
import './add.css'
import { Button, Modal,Select } from 'antd';

function Add() {
  const [laptop, setLaptop] = useState(false);
  const [item, setItem] = useState({
    itemtype: "",
    model: "",
    employee: "",
    ram: '',
    hard: '',
    imei:''
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
    console.log("item is", item)
  };

  const postData = async (e) => {
    e.preventDefault();

    const { itemtype, model, employee} = item;
    if (itemtype && model && employee) {
      const res = await fetch(
        "https://assets-management-6cdf7-default-rtdb.firebaseio.com/assets.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      if (res) {
        setItem({ itemtype: "", model: "", employee: "", ram:'', hard:'', imei:'' });
        setIsModalOpen(false);
      }
    } else {
      alert("Please fill the data first");
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='assets__add'>
      <Button type="primary" onClick={showModal}>
        Add Assets
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={postData} onCancel={handleCancel} width={800}>
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
                name={value}
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
            <div className="assets__laptop">
              <span>
                <p> RAM </p>
                <input
                  type="text"
                  placeholder="Ram"
                  name="RAM"
                  value={item.ram}
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
                  value={item.hard}
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
                  value={item.imei}
                  onChange={getData}
                  required
                />
              </span>
            </div>
          ) : (
            null
          )}
          {/* <button type="submit" onClick={postData}>
            Submit
          </button> */}
        </form>
      </div>
      </Modal>
    </div>
  );
};
export default Add