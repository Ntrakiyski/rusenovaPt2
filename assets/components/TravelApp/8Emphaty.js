import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import { InterviewBox } from "./InterviewBox";

const StylesEmphaty = styled(motion.div)`
  img {
    width: 100%;
  }
  p {
    margin: 40px 0;
  }
  .image-margin {
    margin-bottom: 40px;
  }
  .questions {
    display: flex;
    flex-direction: column;

    justify-content: center;
    .column {
      display: flex;
      flex-direction: column;

      padding-bottom: 15px;

      .title {
        color: #f3cd6a;
        margin-bottom: 25px;
        margin-top: 0;
        margin-right: 15px;
        min-width: 250px;
      }
    }
    .column:last-child {
      margin-bottom: -30px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      margin-top: 40px;
    }
  }
  @media only screen and (min-width: 1023px) {
    .heading {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    img {
      margin-top: 40px;
    }
    .map {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 950px;
      }
    }
    .pains {
      margin-top: 90px;
      width: 90%;
    }
    .questions {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      align-items: start;
      .column {
        max-width: 300px;
      }
    }
  }
`;

export const Emphaty = () => {
  const Width600 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <StylesEmphaty className="setPadding">
      <div className="heading">
        <h1>Еmpathy map</h1>
        <p>
          I summed up the insights collected from the user research in 4
          categories to understand the customer segment
        </p>
      </div>
      {!Width600 ? (
        <div className="map">
          <img src="/media/images/resized/Image 9.png" alt="auto-fill" />
        </div>
      ) : (
        <>
          <img
            className="image-margin"
            src="/media/images/resized/UpRight.png"
            alt="auto-fill"
          />
          <img
            className="image-margin"
            src="/media/images/resized/DownLeft.png"
            alt="auto-fill"
          />
          <img
            className="image-margin"
            src="/media/images/resized/UpLeft.png"
            alt="auto-fill"
          />
          <img
            className="image-margin"
            src="/media/images/resized/DownRight.png"
            alt="auto-fill"
          />
        </>
      )}
      <div className="questions">
        <div className="column">
          <div className="title">Pains</div>
          <InterviewBox
            text="• Missing info about working hours, holydays, pandemic, strikes"
            text2="• Trips that can’t fit the budget"
            text3="• Fear of missing out -  places, offers, activities, events "
            text4="• No time to plan"
          />
        </div>
        <div className="column">
          <div className="title">How the user wants to feel</div>
          <InterviewBox text="• Spontageus but in control  " />
        </div>
        <div className="column">
          <div className="title">What the user wants to do</div>
          <InterviewBox
            text="• Find hidden gems"
            text2="• Explore without worry"
            text3="• Enjoy the new atmosphere and relax"
            text4="• Be aware of possible problems"
          />
        </div>
        <div className="column">
          <div className="title">What the user wants to do</div>
          <InterviewBox text="• Inspiring " text3="• Herself / Himself" />
        </div>
      </div>
    </StylesEmphaty>
  );
};
