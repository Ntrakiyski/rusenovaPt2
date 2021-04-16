import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

export const ChartRow = ({ barWidth, title, bigPercent, resp, number }) => {
  //styiling
  const Styles = styled(motion.div)`
    margin: 20px 0;
    display: flex;
    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 30px;
      height: 30px;
      background: #47443b;
      border-radius: 3px;
      color: #edce6c;
      font-size: 16px;
    }
    .column2 {
      margin-left: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    .heading {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      font-weight: 100;
      span {
        font-size: 8px;
        color: #aeadaf;
      }
    }

    .progress {
      background: #47443a;
      height: 10px;
      width: calc(100vw - 120px);
      max-width: 350px;
      display: flex;
      align-items: center;
      border-radius: 5px;
    }
    justify-content: flex-start;
    .bar {
      height: 10px;
      width: ${barWidth};
      background: #edce6c;
      border-radius: 3px;
    }
    @media only screen and (min-width: 768px) {
      .number {
        min-width: 40px;
        height: 40px;
        border-radius: 5px;
      }
      .progress {
        height: 15px;
        border-radius: 5px;
        width: 350px;
      }

      .bar {
        height: 15px;
        border-radius: 5px;
      }
    }
  `;

  return (
    <Styles>
      <div className="number">{number}</div>
      <div className="column2">
        <div className="heading">
          <div>{title}</div>
          <div>
            {bigPercent}
            <span>/{resp}resp.</span>
          </div>
        </div>
        <div className="progress">
          <div className="bar"></div>
        </div>
      </div>
    </Styles>
  );
};
