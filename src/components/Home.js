import Navbar from "./Navbar";
import React, { useState } from "react";
import { Data } from "../DataCenter/Data";

function Home () {

  const [flower, setFlower] = useState(null);

  const handleFlower = (flower) => {
    setFlower(flower);
  }

    return (
      <div className="App">
        <Navbar name="Teju Wine Shop" />
        <h1>Welcome to Flower Selection!</h1>
        
        <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center", margin: "20px"}}>
          {Data.map((item)=>(
            <div style={{display: "flex", border:"1px solid black", padding: "10px", borderRadius: "10px", alignItems: "center", justifyContent: "center"}} onClick={()=>handleFlower(item)}>
              <img src={item.link} alt={item.name} width={"100"} height={"100"} />
              <h2 style={{margin: 0, padding:0}}>{item.name}</h2>
            </div>
          ))}
        </div>

        {flower && (
          <div key={flower.name}>
            <img src={flower.link} alt={flower.name} width={"100"} height={"100"} />
            <h2>{flower.name}</h2>
            <p>{flower.description}</p>
          </div>
        )}
        
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', margin: '20px'}}>
          
        </div>
  
      </div>
    );
}

export default Home;