import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import { AdditionalComponent } from "./AdditionalComponent";

import { Video } from "../Video";

const StylesComp = styled(motion.div)`
  //title
  .heading {
    display: flex;
    align-items: center;

    h1 {
      font-size: 24px;
      display: flex;
      align-items: center;
    }
    .orngNumber {
      h1 {
        color: #f3cd6a;
        font-size: 80px !important;
        margin-right: 15px;
      }
    }
  }

  //configure images
  .images {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .image1,
    .image2 {
    }
    margin: 30px 0;
    img {
      width: 140.88px;
      height: 100%;

      max-width: 314px;
    }
    img:nth-child(2) {
      padding-left: 2%;
    }
  }

  //color description under image/video
  .description {
    color: #f3cd6a;
    font-weight: 600;
    text-align: center;
    margin: 0 0 30px 0;
  }

  //box with description
  .container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 178px;
    max-width: 480px;
    padding: 20px 15px 15px 20px;
    border: 1px solid #656565;
    border-radius: 20px;
    .box1,
    .box2 {
      display: flex;
      width: 100%;
      img {
        margin-right: 15px;
        width: 30px;
        height: 30px;
      }
    }
    .box2 {
      margin-top: 20px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .images {
      img {
        width: 300px;
      }
      img:nth-child(2) {
        margin-left: 5%;
      }
    }
  }
  @media only screen and (min-width: 1023px) {
    //configure position of the media and the boxes with description
    .resCont {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .container,
    .description {
      margin-left: 50px;
    }

    //configure Media with Video or images
    .media {
      max-width: 100%;
    }

    //configure images
    .images {
      margin: 80px 0;

      img {
        width: 339px;
      }
      img:nth-child(2) {
        padding-left: 5%;
      }
    }
    //Set yellow text above box with description
    .yellowTextColumn {
      .description {
        text-align: start;
        font-size: 20px;
      }
    }
  }
`;

export const Component = ({
  para,
  videoSrc,
  number,
  title,
  image1,
  image2,
  yellowText,
  boxText1,
  boxText2,
  boxText3,
  multImg1,
  multImg2,
  multImg3,
  multImg4,
  boxText1Add,
  boxText2Add,
  mainImg1,
  mainImg2,
  videoSrcAdd,
  lastImg,
  boxTextLast,
}) => {
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });
  return (
    <StylesComp className="setPadding">
      <div className="heading">
        <div className="orngNumber">
          <h1>{number}</h1>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="resCont">
        <div className="media">
          {videoSrc && <Video src={videoSrc} />}
          {image1 && (
            <div className="images">
              {image1 && <img className="image1" src={image1} alt="here is" />}
              {image2 && <img className="image2" src={image2} alt="here is" />}
            </div>
          )}
          {!Width1023 && yellowText && (
            <div className="description">{yellowText}</div>
          )}
        </div>
        <div className="yellowTextColumn">
          {Width1023 && yellowText && (
            <div className="description">{yellowText}</div>
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
          {boxText3 && (
            <div className="container">
              <div className="box1">
                <img src="/media/images/idea.png" alt="light bulb" />
                <p>{boxText3}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <AdditionalComponent
        multImg1={multImg1}
        multImg2={multImg2}
        multImg3={multImg3}
        multImg4={multImg4}
        boxText1={boxText1Add}
        boxText2={boxText2Add}
        mainImg1={mainImg1}
        mainImg2={mainImg2}
        videoSrc={videoSrcAdd}
        lastImg={lastImg}
        boxTextLast={boxTextLast}
      />
    </StylesComp>
  );
};
