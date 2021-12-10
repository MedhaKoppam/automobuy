import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <TwitterIcon/>
                <PhoneIcon  />
                <LinkedInIcon/>
                <InstagramIcon/>

                <p>&copy; 2021 Automobuy</p>
            </div>
           
        </div>
    )
}

export default Footer
