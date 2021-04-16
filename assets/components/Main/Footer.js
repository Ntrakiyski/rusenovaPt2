import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Footer = ({ flexDirection, alignItems, marginLeft }) => {
  return (
    <FooterStyles className="setPadding">
      <div className="heading">
        <h1>Let’s chat</h1>
        <p>
          Interested in working on something <span> together</span>? Hit me up!
        </p>
      </div>
      <div className="links">
        <a
          href={" https://www.linkedin.com/in/gloriarusenova/"}
          target="_blank"
        >
          <motion.div
            whileHover={{ color: "#0A66C2", scale: 1.5 }}
            whileTap={{ scale: 1 }}
          >
            <img src="/media/images/linkedin.svg" alt="linkedin" />
          </motion.div>
        </a>
        <div className="line"></div>
        <a href={" https://www.behance.net/gloriarusenova"} target="_blank">
          <motion.div
            whileHover={{ fill: "#053eff", scale: 1.5 }}
            whileTap={{ scale: 1 }}
          >
            <img src="/media/images/behance.svg" alt="behance" />
          </motion.div>
        </a>
        <div className="line"></div>
        <a href={" https://dribbble.com/GloriaRusenova"} target="_blank">
          <motion.div
            whileHover={{ fill: "#EA4c8d", scale: 1.5 }}
            whileTap={{ scale: 1 }}
          >
            <img src="/media/images/dribble.svg" alt="dribble" />
          </motion.div>
        </a>
        <div className="line"></div>
        <a href={" mailto:russenovaa@gmail.com"} target="_blank">
          <motion.div
            className="mail"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1 }}
          >
            <img src="/media/images/mail.svg" alt="mail" />
          </motion.div>
        </a>
        <div className="font">
          Font made from{" "}
          <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> is
          licensed by CC BY 3.0
        </div>
      </div>
    </FooterStyles>
  );
};
const FooterStyles = styled(motion.div)`
  padding-top: 60px;
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 28px;
      font-family: "Space Grotesk";
      font-weight: 900;
    }

    span {
      border-bottom: 2px solid #dc2020;
    }

    p {
      margin: 20px 0px 50px 0;
      font-size: 15px;
      max-width: 100%;
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 57px;
  }

  .line {
    height: 32px;
    width: 2px;
    background: #dddddd;
    margin: 0 20px;
  }

  .font {
    display: none;
  }
`;
