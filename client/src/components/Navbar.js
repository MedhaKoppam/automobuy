import React ,{useState} from 'react'
import Logo from '../img/automobuylogo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    
    const[openLinks,setOpenLinks]=useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
      };
   
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks?"open":"close"}>
                <Link to ="/home"><img src={Logo} ></img></Link>
                <div className="hiddenLinks"></div>
            </div>
            <div className="rightSide">
                <Link to ="/home">Home</Link>
                <Link to ="/buy">Buy</Link>
                <Link to ="/sell">Sell</Link>
                <Link to ="/history">History</Link>
                <Link to ="/about">About</Link>
                
                <button onClick={toggleNavbar}>
                <ReorderIcon/>
                </button>
            </div>
            
        </div>
    )
}

export default Navbar
