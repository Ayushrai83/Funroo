import React from 'react';
import Feature from '../../component/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Social Media Marketing',
    text: 'Teens manage social media pages of companies',
  },
  {
    title: 'Video Creation',
    text: 'Teens create an edit cideo for your company',
  },
  {
    title: 'Web Design',
    text: 'Get help to design and build a website for your company',
  },
  {
    title: 'Mobile App Development',
    text: 'Develop market ready app for buisness',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Talent for all your needs</h1>
      <p>Thousands of Talented Teenagers for all your business needs. Register your interest and start working with smartest talent around.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;