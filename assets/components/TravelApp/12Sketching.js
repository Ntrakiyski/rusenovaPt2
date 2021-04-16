import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export const Sketching = () => {
  const Width600 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <Styles>
      <div className="text setPadding">
        <h1>Sketching</h1>
        <p>
          Because of the scope of this project I created only sketches. Other
          projects may require to create wireframes if there is a design system
          or a new one should be created
        </p>
      </div>
      {!Width600 ? (
        <img src="/media/images/resized/Image 14.jpg" alt="auto-fill" />
      ) : (
        <img src="/media/images/resized/Image14R.jpg" alt="auto-fill" />
      )}
    </Styles>
  );
};

const Styles = styled(motion.div)`
  img {
    width: 100%;
    margin-bottom: 20px;
  }
  p {
    margin: 40px 0;
    max-width: 570px;
  }

  @media only screen and (min-width: 1023px) {
    img {
      margin-bottom: 50px;
    }
  }
`;
