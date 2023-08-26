import React from 'react';
// import productStyle from './productStyle.module.scss';
import Productintro from './Components/Productintro/Productintro';
import Catalogue from './Components/Catalogue/Catalogue';

const Products = () => {
  return (
    <div>
    <Productintro/>
    <Catalogue />
    {/* <Learn/> */}
   
    </div>
  )
}

export default Products;