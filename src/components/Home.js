import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import React from "react";
import { Link } from "react-router-dom";

function Home () {

    const [mandhu, setMandhu] = useState(0)
    /*
      USE EFFECT - TWO PARAMETERS (1. FUNCTION, 2. DEPENDENCY ARRAY)
    */
    useEffect(()=>{
      console.log("The value of mandhu is", mandhu)
    }, [mandhu])
  
    /*
      NOTE: NEVER UPDATE THE DEPENDENCY ARRAY VALUE INSIDE THE USE EFFECT FUNCTION
    */
  
    return (
      <div className="App">
        <Navbar name="Teju Wine Shop" mandhu={mandhu} />
        <h1>Welcome to my wine shop!</h1>
        
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', margin: '20px'}}>
          <button onClick={()=> setMandhu(1)} style={{backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px', minWidth: '100px'}}>BD</button>
          <button onClick={()=> setMandhu(2)} style={{backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px', minWidth: '100px'}}>M2</button>
          <button onClick={()=> setMandhu(3)} style={{backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px', minWidth: '100px'}}>JD</button>
        </div>
  
        {mandhu == 1 ? (
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0Hs88-J1nllS9TeB-gOUX0v_URYiP_rKDA&s' width={100} height={150} />
          <h2>Black Dog (Nalla kukka)</h2>
          <p>Rs. 1200</p>
        </div>
        ) : null}
  
        {mandhu == 2 ? (
        <div>
          <img src='https://s3.me-central-1.amazonaws.com/catalog.citydrinks.com/offers/addcd175-aa35-477e-b264-0909d2f8e6e6.jpeg' width={100} height={150} />
          <h2>M2 (Engg Second Sem Ghost)</h2>
          <p>Rs. 1500</p>
        </div>
        ) : null}
  
        {mandhu == 3 ? (
        <div>
          <img src='https://www.theliquorestate.in/wp-content/uploads/2022/06/JD-Tennessee-Honey-Whisky.png' width={100} height={150} />
          <h2>Jack Daniels</h2>
          <p>Rs. 1800</p>
        </div>
        ) : null}

        <Link to="/contact-us">
            <button>Contact US</button>
        </Link>
      </div>
    );
}

export default Home;