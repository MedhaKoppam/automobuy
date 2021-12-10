import React, {useEffect, useState} from "react";
import '../styles/Buy.css';

function Cars(){
    const [cars, setCars]=useState([{
        name:'',
        cost:0,
        fuel:'',
        color: '',
        status: '',
        category:''
    }])

    useEffect(()=>{
        fetch('http://localhost:8080/api').then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setCars(jsonRes));
    })

    return <div className="container">
        {cars.map(car => <div className='carEntity'>
            <h1 className='name'>{car.name} ({car.status})</h1>
            <p className='cost'>Rupees {car.cost} only </p>
            <h2 className='keySpecs'>Key Specs:</h2>
            <p className='category'>Type: {car.category}</p>
            <p className='color'>Color: {car.color}</p>
            <p className='fuel'>Type: {car.fuel}</p>
            <button className='buy'>Buy</button>
        </div>)}
        <br></br>
    </div>
}

export default Cars;