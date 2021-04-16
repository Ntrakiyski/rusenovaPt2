import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export const LookingBack = () => {
  const Width1023 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <>
      {Width1023 ? (
        <Styles className="setPadding">
          <div className="text">
            <h1>
              Looking back on travel in <span>2020</span>
            </h1>
            <p>
              The tourism industry has been heavily impacted by the restrictions
              due to the pandemic
            </p>
            <p>
              • The global travel and tourism revenue for <span>2021</span> is
              forecasted to increase by over <span>50%</span> compared to 2020
            </p>
            <p>
              • The market is set to recover fully by <span>2023</span>{" "}
            </p>
            <div className="stats">According to Statista’s MMO </div>
          </div>

          <img src="/media/images/resized/Image 3.png" alt="auto-fill" />
        </Styles>
      ) : (
        <Styles className="setPadding">
          <img src="/media/images/resized/Image 3.png" alt="auto-fill" />
          <div className="text">
            <h1>
              Looking back on travel in <span>2020</span>
            </h1>
            <p>
              The tourism industry has been heavily impacted by the restrictions
              due to the pandemic
            </p>
            <p>
              • The global travel and tourism revenue for <span>2021</span> is
              forecasted to increase by over <span>50%</span> compared to 2020
            </p>
            <p>
              • The market is set to recover fully by <span>2023</span>{" "}
            </p>
            <div className="stats">According to Statista’s MMO </div>
          </div>
        </Styles>
      )}
    </>
  );
};

const Styles = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .text {
    span {
      color: #f3cd6a;
    }
    p {
      margin: 40px 0;
    }
    .stats {
      font-size: 12px;
      color: #b8b8b8;
      margin-bottom: 40px;
      text-align: right;
    }
  }

  img {
    width: 100%;
    border-radius: 30px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      width: 600px;
      margin-bottom: 30px;
      align-self: center;
    }
  }
  @media only screen and (min-width: 1023px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .text,
    .stats {
      padding-left: 10%;
      max-width: calc(50vw - 20%);
    }
    p {
      min-width: 400px;
    }
    img {
      max-width: calc(50vw - 20%);
    }
  }
`;
