import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Link from "next/link";

const StylesProjectStore = styled(motion.div)`
  padding: 0 0 40px 0;
  .stores {
    img {
      margin: 0 20px 20px 0;
      max-width: 150px;
    }
  }
  .images {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .imag1 {
      div {
        margin-bottom: 15px;
        text-align: center;
        font-size: 18px;
      }
      img {
        max-height: 314px;
        width: auto;
      }
      :first-child {
        margin-right: 4%;
      }
    }

    .phone {
      width: 100%;
    }
  }
  .vignetteImage {
    max-width: 334px !important;
  }

  @media only screen and (min-width: 568px) {
    .images {
      flex-direction: row;
    }
    .stores {
      display: flex;
    }
  }
  @media only screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 70px 0;
    .vignetteImage {
      max-width: 616px !important;
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      .res {
        margin-right: 60px;
      }
      .images {
        justify-content: flex-end;
        .imag1 {
          img {
            max-height: 430px;
          }
          div {
            font-size: 26px !important;
          }
        }
      }
    }
  }
`;

export const ProjectsStore = ({
  number,
  title,
  sub,
  image1,
  image2,
  image3,
  stores,
  titleImg,
}) => {
  return (
    <StylesProjectStore>
      <div className="content">
        <div className="res">
          <div className="numberSpan"> - {number} -</div>
          <h3>{title}</h3>
          {sub && <p className="sub">{sub}</p>}
          {stores && (
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
          )}
        </div>

        <div className="images">
          {image1 && (
            <div className="imag1">
              {titleImg && <div>Before</div>}
              <img className="phone" src={image1} alt="before" />
            </div>
          )}
          {image2 && (
            <div className="imag1">
              {titleImg && <div>After</div>}
              <img className="phone" src={image2} alt="after" />
            </div>
          )}
          {image3 && <img className="vignetteImage" src={image3} alt="new" />}
        </div>
      </div>
    </StylesProjectStore>
  );
};
