import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export const Persona = () => {
  const Width600 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <Styles className="setPadding">
      <h1>Persona</h1>
      <p>
        Using the insights from the Empathy map, I created a more detailed
        segment to have a clear presentation of the target user
      </p>
      {!Width600 ? (
        <img src="/media/images/resized/Image 11.png" alt="auto-fill" />
      ) : (
        <img src="/media/images/resized/Image 11R.png" alt="auto-fill" />
      )}
    </Styles>
  );
};

const Styles = styled(motion.div)`
  img {
    width: 100%;
  }
  p {
    margin: 40px 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      margin-top: 40px;
    }
  }
  @media only screen and (min-width: 1023px) {
    img {
      margin-top: 50px;
    }
    p {
      max-width: 570px;
    }
  }
`;
