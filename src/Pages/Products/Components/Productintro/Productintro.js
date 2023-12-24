import React from "react";
import prodIntro from "./prodIntroStyle.module.scss";
import productBanner from "../../../../Assets/products/updated/productBanner.jpg";

const Productintro = () => {
  return (
    <>
   <div className="row">
    <div className={`col-md-12`}>
     <img src={productBanner} className={prodIntro.productBanner} alt="productBanner" />
    </div>
   </div>
   <div className="row">
    <div className={`col-md-12`}>
   <h1 className={prodIntro.heading}>Our Products</h1>
     <p className={prodIntro.para}>
       We are a one-stop solution for your packaging needs!! Our product range
       includes a wide and assorted range of Laminated Food Packaging Pouches,
       Laminated Packaging Rolls, Stand –Up Pouches, LDPE Pouches, 3 Side
       Sealed Pouches, Metalized Films, Incense Stick Pouches, Matte Finish
       Pouches, Flexographic Printed Pouches, Printed BOPP Pouches, 3 Side
       Sealed Bags, and Polypropylene Pouches.
     </p>
     </div>
     </div>
     </>
  );
};

export default Productintro;
