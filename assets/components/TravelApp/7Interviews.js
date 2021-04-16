import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { InterviewBox } from "./InterviewBox";

const StylesInterviews = styled(motion.div)`
  .header {
    display: flex;
    justify-content: space-between;
    img {
      width: 80px;
      height: 78px;
    }
  }
  .subHead {
    color: #818181;
    font-size: 18px;
    font-weight: 300;
  }
  p {
    margin: 40px 0;
  }
  img {
    width: 100%;
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
        max-width: 380px;
        min-width: 330px;

        color: #f3cd6a;
        margin-top: 0;
        margin-right: 15px;
      }
    }
    .column:last-child {
      margin-bottom: -30px;
    }
  }
  .change {
    margin-bottom: 15px;
    max-width: 360px;
  }

  .table {
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      margin-top: 40px;
    }
  }
  @media only screen and (min-width: 1023px) {
    .table {
      margin-top: 50px;
    }
    .questions {
      flex-direction: row;
      justify-content: space-between;
      .column:nth-child(2) {
      }
      .column .title {
        max-width: 400px;
      }
      .change {
        margin-bottom: 15px;
        max-width: 360px !important;
      }
    }
  }
`;

export const Interviews = () => {
  return (
    <StylesInterviews className="setPadding">
      <div className="row1">
        <div className="text">
          <div className="header">
            <div>
              <h1>Interviews</h1>
              <div className="subHead">Qualitative research</div>
            </div>
            <img
              src="/media/images/resized/Image 7.png"
              className="eleven"
              alt="auto-fill"
            />
          </div>
          <p>
            I interviewed 11 people both in-person and remotely and I ask them
            questions like:
          </p>
        </div>
      </div>
      <div className="questions">
        <div className="column">
          <p className="title">What activities currently waste your time?</p>
          <InterviewBox text="Calculating my budget" />
          <InterviewBox text="Organizing my friends" />
          <InterviewBox text="Finding activities" />
        </div>
        <div className="column ">
          <p className="title change">
            How the process of managing trip destination makes you feel and why?
          </p>
          <InterviewBox text="I want to be spontaneous but I want to see everything the place can offer" />
          <InterviewBox text="Last time I felt like I couldn’t explore everything worth seeing" />
        </div>
        <div className="column">
          <p className="title">How do you choose a travel destination?</p>
          <InterviewBox text="When my friends are sharing their experience" />
          <InterviewBox text="I usually see a cool place while I’m scrolling through my feed, and I wish I could go there" />
        </div>
      </div>
    </StylesInterviews>
  );
};
