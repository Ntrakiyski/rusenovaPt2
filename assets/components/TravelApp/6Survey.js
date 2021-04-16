import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

const StylesSurvey = styled(motion.div)`
  .row1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  .chartAnswers {
    img {
      max-width: 400px;
      width: 300px;

      height: auto;
    }
  }
  .answers {
    background: #353535;
    padding: 15px 10px;
    border-radius: 20px;
    width: calc(100% - 40px);
    max-width: 400px;

    .heading {
      h6 {
        font-size: 14px;
        margin-bottom: 5px;
      }
      div {
        font-size: 12px;
        margin: 0;
      }
      span {
        font-size: 12px;
        color: #aeadaf;
      }
    }
  }

  .text {
    img {
      width: 272px;
    }
  }

  .imgs {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 160px;
      height: 100%;
    }

    .Img75 {
      margin-top: 40px;
    }
  }
  .chart {
    max-width: 660px;
  }

  p {
    margin: 40px 0;
  }
  .subHead {
    color: #818181;
    font-size: 18px;
    font-weight: 300;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .answers {
      padding: 25px 30px;
      width: calc(100% - 100px);
      h6,
      div,
      p,
      span {
        font-size: 14px;
      }
    }
    .chartAnswers {
      img {
        width: 400px;
      }
    }
  }
  @media only screen and (min-width: 1023px) {
    .row1 {
      flex-direction: row;
      margin-bottom: 50px;
    }
    .text {
      padding-right: 40px;
    }
    .chartAnswers {
      img {
        width: 400px;
      }
    }

    .chart {
      max-width: 660px;
      padding-right: 40px;
    }
    .answers {
      padding: 25px 30px;
      width: calc(100% - 100px);
    }
  }
`;

export const Survey = () => {
  const Width600 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });

  return (
    <StylesSurvey className="setPadding">
      <div className="row1  ">
        <div className="text">
          <h1>Online survey</h1>
          <div className="subHead">Quantative research</div>
          <p>
            I wanted to validate my hyphotesis so I survayed 40+ individuals
            using Typeform
          </p>
        </div>
        <div className="chartAnswers">
          <img src="/media/images/resized/Image 5.png" alt="answers" />
        </div>
      </div>
      {!Width600 ? (
        <img
          className="chart"
          src="/media/images/resized/Image 6.png"
          alt="auto-fill"
        />
      ) : (
        <div className="imgs">
          <div>
            <img className="Img80" src="/media/images/80.png" alt="auto-fill" />{" "}
            <img className="Img60" src="/media/images/60.png" alt="auto-fill" />
          </div>
          <img className="Img75" src="/media/images/75.png" alt="auto-fill" />
        </div>
      )}
    </StylesSurvey>
  );
};
