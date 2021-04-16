import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export const Architecture = () => {
  const Width600 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <Styles className="setPadding">
      <h1>Informational Architecture</h1>
      {!Width600 ? (
        <img src="/media/images/resized/Image 13.png" alt="13th" />
      ) : (
        <div className="arch">
          <div>
            <img
              className="column"
              src="/media/images/resized/Arch1.png"
              alt="1"
            />
            <img src="/media/images/resized/Arch2.png" alt="2" />
          </div>

          <div>
            <img
              className="column"
              src="/media/images/resized/Arch3.png"
              alt="3"
            />
            <img src="/media/images/resized/Arch4.png" alt="4" />
          </div>
        </div>
      )}
    </Styles>
  );
};

const Styles = styled(motion.div)`
  img {
    width: 100%;
    margin: 40px 0;
  }
  .arch {
    display: flex;
    justify-content: center;
    gap: 10px;
    div {
      width: 102px;
      :first-child {
        margin-right: 20px;
      }
    }

    .column {
      margin: 40px 0;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    h1 {
      margin-top: 20px;
    }

    img {
      margin-top: 40px;
      margin-bottom: 0px;
    }
  }

  @media only screen and (min-width: 1023px) {
    h1 {
      margin: 50px 0;
    }
    img {
      margin-bottom: 0;
    }
  }
`;
