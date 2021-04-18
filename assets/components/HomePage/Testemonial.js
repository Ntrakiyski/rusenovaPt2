import React from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

export const Testemonial = () => {
  const Width1200 = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  return (
    <Styles className="">
      <div className="desktopOnly setPadding">
        <div>
          <div className="quote">
            <span>“</span>
            <div>
              It was easy to work with Gloria because she is a communicative and
              team-oriented individual having customer-first thinking. She
              helped us not only designing but also defining our products and
              services.
            </div>
            <span>“</span>
          </div>
          <div className="imageDiv">
            {!Width1200 && (
              <img src="/media/images/testemonial.png" alt="avatar image" />
            )}
            <div className="name">
              <div>Stefan Dimitrov</div>
              <span>Digital Sales & Marketing Manager at Telenor Bulgaria</span>
            </div>
          </div>
        </div>
        {Width1200 && (
          <img src="/media/images/testemonial.png" alt="avatar image" />
        )}
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  .quote {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    span {
      font-size: 100px;
      color: #4569ed;
      font-family: "Gilroy-ExtraBold";
      margin-left: -2px;
      :last-child {
        margin-top: -20px;
        align-self: flex-end;
      }
    }
    div {
      margin-top: -50px;
      line-height: 150%;
      font-size: 18px;
      font-weight: 700;
      font-family: "Gilroy-ExtraBold";
      font-style: italic;
    }
  }
  .imageDiv {
    display: flex;
    align-items: center;
    margin-top: -40px;

    img {
      width: 94px;
      height: 94px;
    }
    .name {
      max-width: 280px;
      margin-left: 30px;
      div {
        font-size: 18px;
        font-weight: 700;
        font-family: "Gilroy-ExtraBold";
        margin-bottom: 10px;
      }
      span {
        font-size: 14px;
        line-height: 150%;
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .imageDiv {
      .name {
        margin-left: 0;
      }
    }
    .desktopOnly {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      img {
        width: 174px;
        height: 174px;
      }
    }
    .quote {
      span {
        font-size: 280px;
        :last-child {
          margin-top: -70px;
          align-self: flex-end;
        }
      }
      div {
        font-size: 22px;
        margin-top: -210px;
        margin-left: 90px;
      }
    }
    .name {
      margin-top: -200px;
    }
  }
`;
