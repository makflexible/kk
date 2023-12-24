import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import layoutStyle from './BasicLayout.module.scss';
import whatsapp from "../../Assets/footer/whatsapp.png";
// import Scrollbar from 'smooth-scrollbar'

const BasicLayout = ({ children}) => {
  return (
  <div>
      <Header  />
      <div>{children}</div>
      <div className="whatsapp-float">
      <a href="https://wa.me/message/VY4BJNE5U6BLJ1" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
      <Footer  />
    </div>
  );
};

export default BasicLayout;
