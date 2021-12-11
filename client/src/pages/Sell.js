import React from 'react'
import "../styles/Sell.css";
import { useState } from "react";
import ReactDOM from 'react-dom';

function Sell() {
    const [name, setName ] = useState("");
    const [cost, setCost ] = useState("");
    const [fuel, setFuel ] = useState("");
    const [color, setColor ] = useState("");
    const [status, setStatus ] = useState("");
    const [category, setCategory ] = useState("");
    return (
        <div className="menu">
            <h1 className="menuTitle">Sell Your Car</h1>
            <form>
                <p><label>Enter Model:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label></p>
                <p><label>Enter Cost:
                    <input type="text" value={cost} onChange={(e) => setCost(e.target.value)}/>
                </label></p>
                <p><label>Enter Fuel :
                    <input type="text" value={fuel} onChange={(e) => setFuel(e.target.value)}/>
                </label></p>
                <p><label>Enter Color:
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                </label></p>
                <p><label>Enter Status:
                    <input type="text" value={status} onChange={(e) => setStatus (e.target.value)}/>
                </label></p>
                <p><label>Enter Category:
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
                </label></p>
            </form>  
            <button  onClick={()=>{ alert(`You have Sold your Car`); }}>Sell</button>

            
        </div>
           )
    
}

export default Sell


