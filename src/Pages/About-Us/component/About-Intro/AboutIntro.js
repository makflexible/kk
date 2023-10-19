import React from "react";
import aboutIntro from "./aboutIntro.module.scss";
import whiteLayer from "../../../../Assets/products/whiteLayer.png";
import bgImage from "../../../../Assets/home/updated/homeProFour.jpg"

const AboutIntro = () => {
  return (
   
    // <div className={aboutIntro.aboutIntroContainer}>
    //   <div className={aboutIntro.overlay}></div>
      // <h1>About Us</h1>
      // <p>
      //   Although a book shouldn’t be judged solely by its cover, in our
      //   industry, it is exactly how we are evaluated and where we flourish!
      //   <br />
      //   Any products packaging is extremely important since it determines the
      //   products quality, durability, protection, and shelf life. The customers
      //   attention is drawn to a product by the first impression, presentation,
      //   and packaging. The packaging experts at MAK Flexible Packaging Pvt Ltd,
      //   make sure that a customers first impression of a product is the best
      //   impression possible. <br />
      //   We have been in the industry for more than three decades and are fully
      //   aware of what it means to properly package a product. MAK Flexible
      //   Packaging Pvt Ltd, is one of the top producers because of this. <br />
      //   We offer a wide variety of packaging, including nylon cable ties,
      //   laminates, shrink sleeves, liquid packaging, standy pouches, pouches with
      //   and without zippers, and pouches of various varieties. With
      //   a committed team, first-rate technical assistance, cutting-edge innovative
      //   technology, top-notch packaging quality, and structural and graphic
      //   design for both food and non-food services, MAK Flexible Packaging
      //   employees provide an organised method in each stage of the package
      //   manufacturing process,from design to dispatch. Every level of quality
      //   control is ensured via quality inspection.Throughout our manufacturing
      //   process, we pledge to employ eco-friendly materials and
      //   renewable resources wherever possible. <br />
      //   MAK Flexible Packaging Industry firmly believes in exceeding client
      //   expectations by offering superior post-purchase support and continuing
      //   to develop an innovate packaging solution.
       
      // </p>
    // </div>

    <div className={aboutIntro.aboutIntroContainer}>
      <div className="row">
      <div className="col-md-6">
        <img src={bgImage} />
      </div>
      <div className="col-md-6">
      <h1>About Us</h1>
      <p>
        Although a book shouldn’t be judged solely by its cover, in our
        industry, it is exactly how we are evaluated and where we flourish!
        <br /> 
        Any products packaging is extremely important since it determines the
        products quality, durability, protection, and shelf life. The customers
        attention is drawn to a product by the first impression, presentation,
        and packaging. The packaging experts at MAK Flexible Packaging Pvt Ltd,
        make sure that a customers first impression of a product is the best
        impression possible. <br /> <br />
        We have been in the industry for more than three decades and are fully
        aware of what it means to properly package a product. MAK Flexible
        Packaging Pvt Ltd, is one of the top producers because of this. <br />
        MAK Flexible Packaging Industry firmly believes in exceeding client
        expectations by offering superior post-purchase support and continuing
        to develop an innovate packaging solution.
      </p>
      </div>
      </div>
      <div className="row">
      <div className="col-md-12">
      <p>
      We offer a wide variety of packaging, including nylon cable ties,
        laminates, shrink sleeves, liquid packaging, standy pouches, pouches with
        and without zippers, and pouches of various varieties. With
        a committed team, first-rate technical assistance, cutting-edge innovative
        technology, top-notch packaging quality, and structural and graphic
        design for both food and non-food services, MAK Flexible Packaging
        employees provide an organised method in each stage of the package
        manufacturing process,from design to dispatch. Every level of quality
        control is ensured via quality inspection.Throughout our manufacturing
        process, we pledge to employ eco-friendly materials and
        renewable resources wherever possible. <br />
        
      </p>
      </div>
      </div>
    </div>
  );
};

export default AboutIntro;
