import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

const StylesStyling = styled(motion.div)`
  .typography {
    h1 {
      font-size: 27.65px;
    }
    #font {
      font-size: 40px;
      font-weight: 900;
    }
    #bold,
    .tapd {
      font-size: 18px;
      font-weight: 500;
      margin: 5px 0;
    }
    .tapd {
      margin-top: 0;
    }
    #largetitle {
      font-size: 27.654px;
      font-weight: 900;
      margin-top: 35px;
    }
    #title {
      font-size: 23.04px;
      font-weight: 600;
      margin: 10px 0;
    }
    #subt {
      font-size: 19.02px;
      font-weight: 600;
      margin: 10px 0;
    }
    #body {
      font-size: 16px;
      font-weight: 600;
      margin: 10px 0;
    }
    #capt {
      font-size: 13px;
      font-weight: 600;
      margin-top: 10px;
    }
  }
  .text {
    margin-top: 40px;
  }

  .row1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .heading-desktop {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  #bold {
    margin-top: 40px;
  }
  .bg-rect {
    width: 300px;
    border-radius: 30px;
    height: 90px;
    background: #c5c4c4;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .rect1,
    .rect2,
    .rect3,
    .rect4 {
      width: 48px;
      height: 48px;
      border-radius: 10px;
    }
    .rect1 {
      background: #ffe598;
    }
    .rect2 {
      background: #396af5;
    }
    .rect3 {
      background: #3a3a3a;
    }
    .rect4 {
      background: #1f1f1f;
    }
  }

  .bg1 {
    flex-direction: row;
    width: 400px;
    height: 130px;
    .rect1,
    .rect2,
    .rect3,
    .rect4 {
      width: 78px;
      height: 78px;
      border-radius: 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    .typography {
      margin-top: 30px;
    }
  }
  @media only screen and (min-width: 1023px) {
    margin-bottom: 100px;
    .row1 {
      flex-direction: row;
    }
    .row1,
    .typography {
      min-height: 300px;
    }
    .typography {
      margin-top: 30px;
    }
    #font {
      font-size: 55px;
    }
  }
`;

export const Styling = () => {
  const Width600 = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  return (
    <StylesStyling className="setPadding">
      <div className="text1">
        {!Width600 ? (
          <>
            <div className="row1 ">
              <div className="heading-desktop">
                <h1>Style vision</h1>
                <div className="text ">
                  <p id="bold">Colors</p>
                  <div className="bg-rect bg1">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                  </div>
                </div>
              </div>
              <div className="typography">
                <div className="tapd">Typography</div>
                <div id="font">Montserrat</div>
                <div id="bold">Bold, Medium, Regular</div>
                <div>
                  <div id="largetitle">Large title</div>
                  <div id="title">Title</div>
                  <div id="subt">Subtitle</div>
                  <div id="body">Body</div>
                  <div id="capt">Captions</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1>Style vision</h1>
            <div className="text ">
              <div className="typography">
                <div className="tapd">Typography</div>
                <div id="font">Montserrat</div>
                <div id="bold">Bold, Medium, Regular</div>
                <div>
                  <div id="largetitle">Large title</div>
                  <div id="title">Title</div>
                  <div id="subt">Subtitle</div>
                  <div id="body">Body</div>
                  <div id="capt">Captions</div>
                </div>
              </div>

              <div>
                <p id="bold">Colors</p>
                <div className="bg-rect ">
                  <div className="rect1"></div>
                  <div className="rect2"></div>
                  <div className="rect3"></div>
                  <div className="rect4"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </StylesStyling>
  );
};
