import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

const StylesTheProcess = styled(motion.div)`
  img {
    max-width: 1081px;
    width: 100%;
  }
  p {
    margin: 40px 0;
  }
  @media only screen and (min-width: 1023px) {
    .images {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        margin-top: 40px;
      }
    }
  }
`;

export const TheProcess = ({ loaded }) => {
  const Width768 = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  return (
    <StylesTheProcess className="setPadding">
      {loaded && (
        <>
          <h1>The process</h1>
          <p>
            The process and the tools I use may vary depending on project goals,
            business needs, the complexity of the problem, time, etc. For this
            project I will use the following process.
          </p>
          <div className="images">
            <img
              src={
                Width768
                  ? "/media/images/resized/Image 2.png"
                  : "/media/images/resized/Image2R.png"
              }
              alt="auto-fill"
            />
          </div>
        </>
      )}
    </StylesTheProcess>
  );
};
