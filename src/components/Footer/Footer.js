import React from 'react';
import { BiJoystick } from "react-icons/bi";
import './footer.css';
import facebook from "../../icons/facebook.jpg";
import instagram from "../../icons/insta.jpg";
import twich from "../../icons/twich.png";
import x from "../../icons/x.png";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='about'>
        <p>GameStore.AZ</p>
        <p>
          Welcome to gamesote.az, the ultimate destination for discovering the latest
          and most popular games. Whether you're a fan of action-packed adventures or 
          strategic gameplay, our extensive library and user-friendly interface cater 
          to all types of gamers. At gamesote.az, you'll find everything you need to make 
          informed choices with comprehensive reviews and user feedback.
        </p>
      </div>
      <div className='social-media-and-logo'>
        <div className='social-media'>
          <img src={facebook} alt='facebook' />
          <img src={instagram} alt='instagram' />
          <img src={twich} alt='twich' />
          <img src={x} alt='x' />
        </div>
        <div className='logo-footer'>
          <BiJoystick />
        </div>
      </div>
    </div>
  );
}

export default Footer;
