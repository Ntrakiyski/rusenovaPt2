import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ProblemStatement = () => {
  return (
    <Styles className="setPadding">
      <div className="problem">
        <div className="text">
          <h1>Problem statement</h1>
          <p>
            • People experience difficulty finding the right place which
            corresponds to their lifestyle and <span>personal milestones</span>
          </p>
          <p>
            • Insufficient time to manage their trip - activities, budget, and
            friends
          </p>
        </div>
        <img src="/media/images/resized/Image 4.png" alt="auto-fill" />
      </div>
      <div className="hmw">
        <h1>HMW</h1>
        <p>
          Create an app that shows content based on the personality of the user
          and helps to manage trips
        </p>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  .problem {
    display: flex;
    flex-direction: column;
  }
  p {
    margin: 40px 0;
  }
  img {
    width: 100%;
    border-radius: 30px;
    margin-bottom: 60px;
  }
  span {
    color: #f3cd6a;
  }
  .hmw {
    h1 {
      color: #f3cd6a;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      width: 600px;
      margin-top: 30px;
      align-self: center;
    }
    .hmw {
      margin-top: 50px;
    }
  }
  @media only screen and (min-width: 1023px) {
    .problem {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .text,
    .stats {
      max-width: calc(50vw - 20%);
      padding-right: 10%;
    }
    p {
      min-width: 500px;
    }
    img {
      max-width: calc(50vw - 20%);
    }
    .hmw {
      margin-top: 40px;
    }
  }
`;
