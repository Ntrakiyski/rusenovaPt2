import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

// import BlueShirt from "assets/images/BlueShirt.png";

import { useMediaQuery } from "react-responsive";

export const MyStory = () => {
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });
  return (
    <Styles className="setPadding">
      <div className="content">
        <div className="heading">
          <h5>MY STORY</h5>
          {Width1023 && (
            <p id="para1">
              I have graduated with bachelor degree in European Studies from the
              University of National and World Economics. My mission has always
              been to improve the lives of others, which is why I began doing
              internships and volunteering.
            </p>
          )}
          {!Width1023 && (
            <p id="para1">
              I have graduated with bachelor degree in European Studies from the
              University of National and World Economics.
            </p>
          )}
        </div>

        <div className="images">
          <div className="image">
            <img src="/media/images/WithMochko.png" alt="talk on a table" />
          </div>
          {!Width1023 && (
            <p id="para2">
              My mission has always been to improve the lives of others, which
              is why I began doing internships and volunteering.
            </p>
          )}
          <p>
            Regardless of how ambitious I was, I knew I had to find my craft
            that would allow me to help and empower people. Signing up for a{" "}
            year-long course in <span>design</span> at Software University gave
            me a taste of what real-world product design is like, and that made
            me pursuit my design career.
          </p>
        </div>
      </div>
    </Styles>
  );
};
const Styles = styled(motion.div)`
  .image {
    margin: 0px 0 40px 0;
    max-height: 384px;
    width: 100%;
    img {
      width: 100%;
    }
  }
  #para1 {
    margin-bottom: 40px;
  }

  .orang {
  }
  span {
    border-bottom: 2px solid #dc2020;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
    }
    .image {
      max-width: 574px;
      margin: 0;
      padding-right: 80px;
    }
    .images {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 80px 0;

      p {
        max-width: 422px;
      }
    }
    .orang {
      margin-left: 40px;
    }
    p {
      width: 80%;
    }
  }
`;
