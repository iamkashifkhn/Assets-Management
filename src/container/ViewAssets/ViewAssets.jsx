import React, { useState, useEffect } from "react";
import "./viewAssets.css";
import { getDatabase, ref, child, get } from "firebase/database";

function ViewAssets() {
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
  }, []);

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th> Employee </th>
          <th> Item Type </th>
          <th> Model </th>
        </tr>
        </thead>
        {Object.keys(data).map((item, idx) => {
          return (
            <tbody>
            <tr>
              <td>{data[item].employee}</td>
              <td>{data[item].itemtype}</td>
              <td>{data[item].model}</td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ViewAssets;
