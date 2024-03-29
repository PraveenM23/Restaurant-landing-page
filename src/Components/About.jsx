import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';


const About = () => {
  return (
    <div className="about-section-container">
    <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
    </div>
    <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
    </div>
    <div className="about-section-text-container">
      <p className="primary-subheading">About</p>
      <h1 className="primary-heading">
        Food Is An Important Part Of A Balanced Diet
      </h1>
      <p className="primary-text">
      Nutritional Diversity: Food provides essential nutrients such as carbohydrates, proteins, fats, vitamins, and minerals necessary for optimal bodily functions. A balanced diet ensures that individuals consume a variety of foods from different food groups, ensuring they obtain all the necessary nutrients to support growth, repair, and overall health
      </p>
      <p className="primary-text">
      For instance, fruits and vegetables are rich in vitamins and fiber, while lean proteins like fish and legumes provide essential amino acids needed for muscle repair and immune function.


      </p>
      <div className="about-buttons-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button">
          <BsFillPlayCircleFill /> Watch Video
        </button>
      </div>
    </div>
  </div>
  )
}

export default About