import React from "react";
import catStyle from "./catStyle.module.scss";
import ProductList from "../../../../Utils/ProductList";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

const Catalogue = () => {
  const navigate = useNavigate();
  const handleProductClick = (product) => {

    const { images, heading, description } = product;

    navigate("/productDetail", {
      state: {
        images,
        heading,
        description,
      },
    });
  };

  return (
    <div id="catalogue" className={catStyle.catContainer}>
      <div className="row">
        {ProductList.map((cat, index) => (
          <div
            key={index}
            className={`col-6 col-sm-3 col-md-3 col-lg-3 ${catStyle.catItem}`}
            onClick={() => { handleProductClick(cat); window.scrollTo(0, 0) }}
          >
              <img src={cat.images[0]} alt={cat.heading} />
              <div className={catStyle.productOverlay}>
                <p>{cat?.heading}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
