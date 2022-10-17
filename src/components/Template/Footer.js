import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer(){
return(

<footer className='footer'>
      <ul className="social_list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
     
      <p className="copy_right">
        <span>GW Soluções 3D</span> &copy; 2022
      </p>
      
      
    </footer>

)

}
export default Footer