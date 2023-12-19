


import { Add } from "./Add";

// import "./Dashboard.css";

import { Update } from "./Update";

import Product from "./Adminproductdata";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export const AdminPage = () => {
  const [ren, setRen] = useState(false);

  // useEffect(()=>{

  // },[ren])

  return (
    <div>
      <Navbar />
    <div style={{ backgroundColor: "#F1F8E9" ,marginTop:"120px "}}>
      <h1 style={{ textAlign: "left", marginLeft: "20px",fontSize:"20px",color:"green"  }}>Hello Admin</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px",
        }}
      >
        <div
          style={{
            padding: "10px",
            boxShadow: "0px 5px 5px 0px red",
            height: "60px",
            width: "300px",
          }}
        >
          <h3 style={{ marginTop: "1px", marginBottom: "2px" }}>
            EARNINGS (MONTHLY)
          </h3>
          <h3>Rs. 4,00,000</h3>
        </div>

        <div
          style={{
            padding: "10px",
            boxShadow: "0px 5px 5px 0px green",
            height: "60px",
            width: "300px",
          }}
        >
          <h3 style={{ marginTop: "1px" }}>EARNINGS (ANNUAL)</h3>
          <h3>Rs. 2,15,000,000</h3>
        </div>

        <div
          style={{
            padding: "10px",
            boxShadow: "0px 5px 5px 0px blue",
            height: "60px",
            width: "300px",
          }}
        >
          <h3 style={{ marginTop: "1px" }}>TASKS</h3>
          <h3>50%</h3>
        </div>

        <div
          style={{
            padding: "10px",
            boxShadow: "0px 5px 5px 0px yellow",
            height: "60px",
            width: "300px",
          }}
        >
          <h3 style={{ marginTop: "1px" }}>PENDING REQUESTS</h3>
          <h3>18</h3>
        </div>
      </div>

      <Add setRen={setRen} ren={ren} />
      <Update setRen={setRen} ren={ren} />
      <Product setRen={setRen} ren={ren} />
    </div>
    </div>
  );
};

