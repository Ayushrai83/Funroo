import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; 
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Teen</a></p>
          <p><a href="#wgpt3">Company</a></p>
          <p><a href="#possibility">Parent</a></p>
          <p><a href="#features"><FontAwesomeIcon icon={faAndroid} /></a></p>
          <p><a href="#blog"><FontAwesomeIcon icon={faApple} /></a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Teen</a></p>
            <p><a href="#wgpt3">Company</a></p>
            <p><a href="#possibility">Parent</a></p>
            <p><a href="#features"><FontAwesomeIcon icon={faAndroid} /></a></p>
            <p><a href="#blog"><FontAwesomeIcon icon={faApple} /></a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
