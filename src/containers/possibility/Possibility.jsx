import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The name says it all. <br /> "Its Fun to Grow”</h1>
      <p>Funngro is built by educators, Tech enthusiasts, IIM alumni, Finance experts but most importantly by Loving parents. We are thankful to those mentors who helped us in early stage of our lives and Funngro is our effort to give back to the society. Funngro is a mission to enable Teenagers to become Financially empowered and grow up to be responsible citizens.</p>
      <h4>Enable Smart Teenagers and Smart Companies to realize their full potentials</h4>
    </div>
  </div>
);

export default Possibility;