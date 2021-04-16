import React from "react";

import Link from "next/link";

import styled from "styled-components";

import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

//Import images

export const TelenorWork = () => {
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });
  return (
    <ShowWorkStyles>
      {Width1023 ? (
        <div className="res setPadding">
          <div>
            <div className="heading">
              <span>- 02 -</span>
              <h1>Telenor Bulgaria</h1>
              <p>
                During my three years at Telenor Bulgaria, I worked on over 20
                cross-platform projects to design digital services and products.
              </p>
              <div className="stores">
                <Link
                  href={
                    " https://apps.apple.com/bg/app/mytelenor-bulgaria/id1186781645"
                  }
                  target="_blank"
                >
                  <a>
                    <motion.img
                      whileHover={{ y: 15, scale: 1.1 }}
                      src="/media/images/apple.png"
                      width="141px"
                      height="40px"
                      alt="apple logo"
                    />
                  </a>
                </Link>

                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=bg.telenor.mytelenor"
                  }
                  target="_blank"
                >
                  <a>
                    <motion.img
                      whileHover={{ y: 15, scale: 1.1 }}
                      src="/media/images/android.png"
                      alt="android logo"
                      width="141px"
                    />
                  </a>
                </Link>
              </div>
              <Link href="/telenor-bulgaria">
                <a>
                  <div className="down-arrow ">
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
                      alt="arrow image"
                    />
                    Read about my experience
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <Link href="/telenor-bulgaria">
            <a>
              <div className="imageNew">
                <img
                  className="last"
                  src="/media/images/iphone2.png"
                  alt="telenor phone"
                />
              </div>
            </a>
          </Link>
        </div>
      ) : (
        <div className="res setPadding">
          <div className="heading">
            <span>- 02 -</span>
            <h1>Telenor Bulgaria</h1>
          </div>
          <Link href="/telenor-bulgaria">
            <a>
              <div className="imageNew">
                <img
                  className="last"
                  src="/media/images/iphone2R.png"
                  alt="telenor phone"
                />
              </div>
            </a>
          </Link>

          <div>
            <div className="heading">
              <p>
                During my three years at Telenor Bulgaria, I worked on over 20
                cross-platform projects to design digital services and products.
              </p>
              <div className="stores">
                <Link
                  href={
                    " https://apps.apple.com/bg/app/mytelenor-bulgaria/id1186781645"
                  }
                  target="_blank"
                >
                  <a>
                    <motion.img
                      whileHover={{ y: 15, scale: 1.1 }}
                      src="/media/images/apple.png"
                      width="141px"
                      height="40px"
                      alt="apple logo"
                    />
                  </a>
                </Link>

                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=bg.telenor.mytelenor"
                  }
                  target="_blank"
                >
                  <a>
                    <motion.img
                      whileHover={{ y: 15, scale: 1.1 }}
                      src="/media/images/android.png"
                      alt="android logo"
                      width="141px"
                    />
                  </a>
                </Link>
              </div>
              <Link href="/telenor-bulgaria">
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
                      alt="arrow image"
                    />
                    Read about my experience
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </ShowWorkStyles>
  );
};

const ShowWorkStyles = styled(motion.div)`
  .res {
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 22px;
    color: #8e8e8e;
  }
  .heading {
    h1 {
      margin-top: 22px;
      margin-bottom: 24px;
    }
    p {
      margin: 24px 0 32px 0;
      font-size: 20px;
      font-weight: lighter;
    }
  }

  .imageNew {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4569ed;

    img {
      max-height: 100%;
      padding: 20px 40px;
      max-width: 200px;
    }
    .last {
      margin: 0;
    }
  }

  .stores {
    img {
      margin: 0 20px 20px 0;
    }
  }

  .down-arrow {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    img {
      margin-right: 15px;
    }
    margin-bottom: 80px;
  }
  @media only screen and (min-width: 767px) {
    .imageNew {
      min-width: 350px;
      max-width: 568px;
      img {
        padding: 58.5px;
      }
    }
  }

  @media only screen and (min-width: 1023px) {
    .imageNew {
      max-width: 502px;
      img {
        padding: 50px 80px;
        height: 100%;
        height: 480px;
        max-width: 100%;
      }
    }
    a {
      width: 568px;
    }
    .res {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .heading h1,
    .heading p {
      padding-right: 80px;
      max-width: 568px;
      min-width: 410px;
    }
    .down-arrow {
      margin-bottom: 20px;
    }
  }
`;
