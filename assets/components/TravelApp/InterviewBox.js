import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

export const InterviewBox = ({ text, text2, text3, text4 }) => {
  return (
    <Styles>
      <div className="container">
        <div className="box1">
          {/* <img src={Idea} alt="light bulb" /> */}
          <p>{text}</p>
          {text2 && <p>{text2}</p>}
          {text3 && <p>{text3}</p>}
          {text4 && <p>{text4}</p>}
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  .container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 178px;
    max-width: 300px;
    padding: 20px 15px 15px 20px;
    border: 1px solid #656565;
    border-radius: 20px;
    .box1 {
      min-width: 205px;
      max-width: 300px;
      p {
        margin-bottom: 0;
        margin-top: 12px;
      }
      p:nth-child(1) {
        margin: 0;
      }

      img {
        margin-right: 15px;
        max-width: 30px;
        height: 30px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .container,
    .box1 {
      p {
        width: 100%;
      }
    }
    .container {
      margin-right: 20px;
    }
  }
`;
