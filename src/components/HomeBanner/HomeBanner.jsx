import React from "react";
import "./HomeBanner.css";

import { BsGlobe } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { LuInstagram } from "react-icons/lu";
import { Box } from "@mui/material";

const HomeBanner = () => {
  return (
    <Box
      className="main_banner"
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "50%",
        },
        height: {
          xs: "60vh",
          sm: "60vh",
          md: "80vh",
        },
      }}
    >
      <div className="inner_banner">
        <div className="top_button">
          {" "}
          <img src="buttons.png" alt="" />
        </div>
        <div className="banner_text">
          <Box
            sx={{
              fontSize: {
                xs: "28px",
                sm: "35px",
                md: "32px",
                lg: "39px",
              },
            }}
          >
            {" "}
            100% Uptime &#128526;
          </Box>
          <Box
            className="heading"
            sx={{
              fontSize: {
                xs: "23px",
                sm: "32px",
                md: "27px",
                lg: "32px",
              },
            }}
          >
            {" "}
            Zero Infrastructure Management
          </Box>
        </div>
        <div className="footer_left_side">
          <span>
            {" "}
            <BsGlobe /> aesthisia.com
          </span>
          <span className="icons">
            {" "}
            <TfiLinkedin />
            <FaFacebookF />
            <LuInstagram />
          </span>
        </div>
      </div>
    </Box>
  );
};

export default HomeBanner;
