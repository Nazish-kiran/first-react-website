import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImg from "../assets/Intersect.png";

const banner = () => {
  return (
    <>
    <div className="banner row w-100 d-flex align-items-center">
      <div className="banner-right col-md-6 ">
        <div className="banner-right__content">
          <h1 className="banner-right__title pb-3 fw-bolder">
            Dive into Delights Of Delectable <span className="green-txt">Food</span> 
          </h1>
          <p className="banner-right__text">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>
          <button className="btn order-btn rounded-pill">Order Now</button>
        </div>
      </div>
      <div className="banner-left col-md-6 pt-5 d-flex justify-content-end">
        <div className="image-wrapper position-relative">
        <img src={bannerImg} alt="" className=" position-absolute w-100 h-100 object-fit-contain" />
        </div>
      </div>
    </div>
    </>
  );
};
export default banner;