import React from "react";

import styled from "styled-components";

import { motion } from "framer-motion";

export const Toolbox = () => {
  return (
    <Styles>
      <div className="content setPadding">
        <div className="toolbox">
          <div className="heading">
            {/* <div className="rect">
                <div className="rect1"></div>
                <div className="rect2"></div>
              </div> */}
            <h5>TOOLBOX</h5>
          </div>
          <div className="logos">
            <div className="row1">
              <img src="/media/images/Figma.png" alt="logo1" />
              <img src="/media/images/Notion.png" alt="logo1" />
              <img src="/media/images/Miro.png" alt="logo1" />
              <img src="/media/images/Adobe.png" alt="logo1" />
              <img src="/media/images/Invision.png" alt="logo1" />
            </div>
          </div>
        </div>
        <div className="skills">
          <h5>SKILLS</h5>

          <p>User research</p>
          <p>Usability Testing</p>

          <p>Prototyping</p>
          <p>Visual Design</p>

          <p>Interaction Design</p>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  .content {
    display: flex;
    flex-direction: column;
  }

  //Logos
  .logos {
    display: flex;
    flex-direction: column;
    .row1 {
      display: flex;
      flex-direction: row;

      img {
        margin-right: 20px;
        width: 45px;
        height: 45px;
      }
    }
  }
  .skills h5,
  .toolbox h5 {
    font-family: "Gilroy-Light";
    font-weight: 400;
  }
  .skills {
    margin-top: 25px;
    .div {
      display: flex;
      p {
        width: 50%;
      }
      p:nth-child(2) {
        margin-left: 0px;
      }
    }
    p {
      margin: 10px 0;
      font-size: 20px;
      color: #acacac;
    }
    h5 {
      margin-top: 55px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;
    .skills {
      margin-top: 0px;
      div {
        width: 400px;
      }
      p {
        width: 250px;
      }
    }
  }

  @media only screen and (min-width: 1023px) {
    margin-top: 100px;
    display: flex;

    justify-content: center;

    .toolbox {
      min-width: 410px;
      width: 568px;
      padding-right: 60px;
    }
    .skills {
      min-width: 400px;
      width: 372px;

      h5 {
        margin-top: 0;
      }
    }
    .content {
      //set the width of the content
      max-width: 1200px;
      flex-direction: row;
      justify-content: space-between;
    }
    .logos {
      .row1 {
        img {
          width: 68px;
          height: 68px;
        }
      }
    }
  }
`;
