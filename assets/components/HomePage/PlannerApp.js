import React from "react";
import styled from "styled-components";

import Link from "next/link";

import { motion } from "framer-motion";

import ReactPlayer from "react-player";

import { useMediaQuery } from "../CheckWidth";

export const PlannerApp = () => {
  const Width1023 = useMediaQuery(1023);

  return (
    <ShowWorkStyles className="PlannerRes setPadding">
      <div className="res">
        <div className="headPlus">
          <div className="work">
            <h5>PROJECTS</h5>
          </div>
          <div className="content">
            {Width1023 && (
              <div className="heading">
                <span>- 01 -</span>
                <h1>Travel</h1>
                <h1>Planner App</h1>
              </div>
            )}
            <Link href="/travel-planner-app">
              <a>
                <div className="video">
                  <ReactPlayer
                    url="/media/videos/HomePage.mov"
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    playsinline={true}
                  ></ReactPlayer>
                </div>
              </a>
            </Link>
            <motion.div className="heading">
              {Width1023 && (
                <div>
                  <span>- 01 -</span>
                  <h1>Travel Planner App</h1>
                </div>
              )}
              <p>
                This Case study is an example of my research and problem solving
                capabilities.
              </p>
              <Link href="/travel-planner-app">
                <a>
                  <div className="down-arrow CTA">
                    <motion.img
                      initial={{ x: -5 }}
                      animate={{ x: 5 }}
                      transition={{
                        delay: 1.5,
                        repeat: Infinity,
                        duration: 0.4,
                        repeatType: "reverse",
                      }}
                      src="/media/images/arrow-right.svg"
                    />
                    Read Case Study
                  </div>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </ShowWorkStyles>
  );
};

const ShowWorkStyles = styled(motion.div)`
  span {
    font-size: 24px;
    color: #8e8e8e;
  }
  .res {
    display: flex;
    flex-direction: column;
  }
  h5 {
    margin: 55px 0;
    font-family: "Gilroy-Light";
    font-size: 32px;
    font-weight: 400;
  }
  .work {
    h5 {
      margin-bottom: 0;
      padding-bottom: 0;
      padding-top: 30px;
    }
  }

  .heading {
    margin: 30px 0;
    h1:nth-child(2) {
      margin-top: 22px;
    }
    p {
      margin: 20px 0 30px 0;
      font-size: 20px;
    }
  }

  .video {
    video {
      max-width: 568px;
      max-height: 580px;
    }
  }
  .down-arrow {
    margin-top: 20px;
    display: flex;
    align-items: center;

    cursor: pointer;
    margin-top: 50px;
    img {
      margin-right: 15px;
    }
    margin-bottom: 80px;
  }

  @media only screen and (min-width: 1023px) {
    margin-bottom: 100px;
    .res {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    //Projects
    h5 {
      padding-bottom: 60px;
    }
    .heading {
      height: 700px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    h1,
    p {
      max-width: 600px;
      min-width: 350px;
    }
    .video {
      min-width: 410px;
      margin-right: 80px;
    }
  }
`;
