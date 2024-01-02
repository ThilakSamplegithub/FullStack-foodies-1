import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          "Foodies Paradise: Where cravings meet convenience, and flavor is
          delivered to your doorstep. Indulge in a culinary journey that ignites
          your taste buds and satisfies your soul. Bon appétit!"
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} loading="lazy" alt="" />
        <p>
          Foodies Paradise is an absolute delight! Their wide selection, prompt
          delivery, and mouthwatering flavors make every meal a heavenly
          experience.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
