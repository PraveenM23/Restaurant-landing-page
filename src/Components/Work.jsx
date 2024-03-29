import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Choose your meals from our diverse weekly menu.Find gluten or dairy free, low carb & veggie options. ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Our team of chef's do the prep  work no more chopping, measuring, or sink full of dishes! ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Your freshly prepped 15-min dinner kits arrive on  your doorstep in a refrigerated box.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
       It's though mistakes that you actually can grow you get rid of everything that is not essential to makihave to get bad.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

