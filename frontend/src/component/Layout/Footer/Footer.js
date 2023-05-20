import React from 'react'
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";

export const Footer = () => {
  return (
   <footer>
    <div className="leftFooter">
        <h4>DOWNLOAD APP</h4>
        <p>Download App for anddroid and IOS mobile phone</p>
        <img src={playstore} alt="playstore"/>
        <img src={appstore} alt="Appstore"/>
    </div>
    <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights  &copy; {new Date().getFullYear() } by Legend</p>
    </div>
    <div className="rightFooter">
     <h4>Follow Us</h4>
     <a href="http://instagram.com">instagram</a>
     <a href="http://instagram.com">YouTube</a>
     <a href="http://instagram.com">Facebook</a>
    </div>
   </footer>
  );
}
