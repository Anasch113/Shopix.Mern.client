import "./Banner.scss";
import React from "react";
import BannerImg from "../../../assets/banner-img.png";


const Banner = () => {



    return (
        <>
      
    <div className="hero-banner">
  
    <div className="content">
        <div className="text-content">
            <h1>SALES</h1>
            <p>
            "Are you ready to experience love at first click? Because our e-commerce website is here to sweep you off your feet with irresistible deals and products that will make your heart skip a beat."
            </p>
            <div className="ctas">
                <div className="banner-cta" >Shop Now</div>
                <div className="banner-cta v2"  >Read More</div>
            </div>
        </div>
        <img className="banner-img" src={BannerImg} />
    </div>
</div>
</>
)

};

export default Banner;
