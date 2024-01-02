import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: " Discover a variety of fresh and delicious meals, snacks, and ingredients available to suit your taste and preferences.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Customize your meal plan according to your schedule, whether it's daily, weekly, or monthly deliveries.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy the convenience of fast and reliable delivery services, ensuring that your groceries arrive fresh and on time, ready to be enjoyed.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Browse through a wide selection of meals, customize your delivery
          frequency, and enjoy fast doorstep delivery for a seamless online
          grocery shopping experience.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} loading="lazy" alt="" />
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
