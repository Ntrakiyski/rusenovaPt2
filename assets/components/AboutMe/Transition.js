import React from "react";
import Link from "next/link";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Transition = () => {
  return (
    <Styles className="setPadding">
      <div className="content">
        <div className="heading">
          <h5>PRODUCT DESIGN TRANSITION</h5>
          <p>
            I started my Service Design internship at Telenor Bulgaria two
            months after starting the Design program. I was able to be a part of
            the <span>Service Design</span> team, as well as the team working on
            Telenor's internal app Digital Office.
          </p>
        </div>
        <div className="res">
          <div className="image">
            <img src="/media/images/TelenorPresent.png" alt="talk on a table" />
          </div>
          <div className="text">
            <p>
              Later on, I became the company's first designer, redesigning
              MyTelenor App for over <span>1 million</span> users.
            </p>
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
                  />
                  Check out some of the projects
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Styles>
  );
};
const Styles = styled(motion.div)`
  margin-bottom: 40px;
  .heading {
    p {
      margin-bottom: 40px;
    }
  }
  .image {
    margin: 0px 0 40px;

    img {
      width: 100%;
    }
  }
  span {
    border-bottom: 2px solid #dc2020;
  }

  .down-arrow {
    margin-top: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    margin-top: 50px;
    img {
      margin-right: 15px;
    }
    margin-bottom: 80px;
  }

  @media only screen and (min-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .res {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .text {
      margin-left: 40px;
      width: 420px;
    }
    .image {
      min-width: 580px;
      max-width: 700px;
      margin: 80px 0;
    }
    .heading p {
      width: 80%;
    }
  }
`;
