// import Layout from './container/Layout/Layout';
import React from "react";
import "./App.css";
import Login from "../src/container/Login/Login";
import AssetList from "./container/ViewAssets/ViewAssets";
import Assets from "./container/AddAssets/addAssets";
import Setting from "./container/Setting/Setting";
import { Route, Routes } from "react-router-dom";
import Layout  from "./container/Layout/Layout";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Protected Component={Layout}/>}>
          <Route exact path='' element={<Assets/>}/>
          <Route exact path="assets" element={<AssetList />} />
          <Route exact path="setting" element={<Setting />} />
          <Route exact path='assets/:id' element={<AssetList/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
