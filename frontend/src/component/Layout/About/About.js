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
            <span>
              This is a sample ecommerce wesbite made by @Legend.
            </span>
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
