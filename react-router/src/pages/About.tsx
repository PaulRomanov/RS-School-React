import React from 'react';
import Header from '../components/header/Header';
import './about.scss';

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-wrapper">
        <div className="abaut-lorem">Your ad could be here, but alas</div>
        <img className="img-about" src="../assets/ad.jpg" alt="ad" />
      </div>
    </div>
  );
};

export default About;
