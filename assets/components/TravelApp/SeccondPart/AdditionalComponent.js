import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Video } from "../Video";


const StylesAddComp = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .gridDisplay {
    display: grid;
    gap: 4%;
    grid-template-columns: repeat(2, 157px);
    .name {
      width: 100%;
      div {
        margin-bottom: 25px;
      }
    }
    img {
      width: 157px;
      max-width: 317px;
    }
  }
  .flex {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .multipleImages {
    padding: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    margin: 30px 0;
    .column:nth-child(2) {
      margin-left: 5%;
    }
    img {
      max-width: 240px;
      min-width: 168px;
    }
    .name {
      display: flex;
      flex-direction: column;
      div {
        margin-bottom: 35px;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1023px) {
    flex-direction: row;
    .row11 {
      display: flex;
      align-items: center;
    }
    .video {
      justify-self: flex-end;
    }
    .flex {
      max-width: 1200px;
    }
    .gridDisplay {
      width: 100%;
      grid-template-columns: repeat(4, minmax(200px, 317px)) !important;
      gap: 30px;

      padding: 50px 0;
      .name {
      }
      img {
        width: 100%;
      }
    }

    img {
      img:last-child {
        margin-right: 0;
      }
    }
  }
`;


export const AdditionalComponent = ({
  multImg1,
  multImg2,
  multImg3,
  multImg4,
  boxText1,
  boxText2,
  mainImg1,
  mainImg2,
  videoSrc,
  lastImg,
  boxTextLast,
}) => {
  return (
    <StylesAddComp>
      {mainImg1 && (
        <div className="images">
          {mainImg1 && <img className="image1" src={mainImg1} alt="here is" />}
          {mainImg2 && <img className="image2 " src={mainImg2} alt="here is" />}
        </div>
      )}
      {videoSrc && (
        <div className="video">
          <Video src={videoSrc} />
        </div>
      )}
      {boxText1 && (
        <div className="container">
          <div className="box1">
            <img src="/media/images/idea.png" alt="light bulb" />
            <p>{boxText1}</p>
          </div>
          {boxText2 && (
            <div className="box2">
              <img src="/media/images/idea.png" alt="light bulb" />
              <p>{boxText2}</p>
            </div>
          )}
        </div>
      )}
      <div>
        {multImg1 && (
          <div className="flex">
            <div
              className={
                !multImg4 ? "multipleImages" : "gridDisplay setPadding"
              }
            >
              <div className="name">
                <div>Daily plan</div>
                <img src={multImg1} alt="croped" />
              </div>
              <div className="name">
                <div>Budget</div>
                <img src={multImg2} alt="croped" />
              </div>

              <div className="name">
                <div>Packing</div>
                <img src={multImg3} alt="croped" />
              </div>
              <div className="name">
                <div>Docs</div>
                <img src={multImg4} alt="croped" />
              </div>
            </div>
          </div>
        )}
        <div className="row11">
          {lastImg && (
            <div className="images">
              {lastImg && (
                <img className="image1" src={lastImg} alt="here is" />
              )}
            </div>
          )}
          {boxTextLast && (
            <div className="container">
              <div className="box1">
                <img src="/media/images/idea.png" alt="light bulb" />
                <p>{boxTextLast}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </StylesAddComp>
  );
};
