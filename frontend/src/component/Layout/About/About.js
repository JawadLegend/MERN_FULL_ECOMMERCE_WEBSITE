import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import legend from "../../../images/legend.jpg"


const About = () => {
  const visitInstagram = () => {
    window.location = "https://wa.me/+233547403691";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={legend}
              alt="Founder"
            />
            <Typography>LEGEND JAWAD</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit WhatsApp
            </Button>
           
          </div>
          <div>
          <p>
              Welcome to Cubains!

              At Cubains, we believe in the power of online shopping to make your life easier, more convenient, and filled with delightful discoveries. We are dedicated to providing you with a seamless and enjoyable shopping experience, right from the comfort of your own home.

              As an innovative and customer-centric online marketplace, we curate a diverse range of products to cater to your every need. Whether you're searching for the latest fashion trends, cutting-edge technology, home essentials, or unique gifts, we have it all in one place. Our extensive selection is carefully chosen to ensure the highest quality, style, and value for our customers.

              . Our secure checkout process guarantees a safe and hassle-free transaction, while our reliable shipping partners ensure prompt delivery of your purchases to your doorstep.

              Customer satisfaction is at the heart of everything we do. Our dedicated support team is always ready to assist you with any questions, concerns, or issues you may have. We value your feedback and continuously strive to improve our services to exceed your expectations.

              In addition to our commitment to excellent service, we also prioritize sustainability. We actively seek out eco-friendly products and work with environmentally responsible suppliers to minimize our impact on the planet. By shopping with us, you're not only treating yourself but also making a conscious choice to support a more sustainable future.

              Join our vibrant online community and become part of the Cubains family. Explore, shop, and discover an exciting world of possibilities.

              Thank you for choosing Cubains.
            </p>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://wa.me/+233547403691"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://wa.me/+233547403691" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
