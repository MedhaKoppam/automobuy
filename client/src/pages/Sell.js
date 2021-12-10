import React from 'react'
import "../styles/Sell.css";
import { useState } from "react";
import ReactDOM from 'react-dom';

function Sell() {
    const [name, setName] = useState("");
    return (
        <div className="menu">
            <h1 className="menuTitle">Sell Your Car</h1>
            <form>
                <p><label>Enter Model:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label></p>
                <p><label>Enter Cost:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label></p>
                <p><label>Enter Fuel :
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label></p>
                <p><label>Enter Color:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label></p>
                <p><label>Enter Status:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label></p>
                <p><label>Enter Category:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label></p>
            </form>  

            
        </div>
           )
    
}

export default Sell


