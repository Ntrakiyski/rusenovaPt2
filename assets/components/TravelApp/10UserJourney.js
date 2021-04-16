import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export const UserJourney = () => {
  const Width600 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <Styles className="setPadding">
      <div>
        <h1>User Journey Map</h1>
        <p>
          This user journey map represents a hypothetical scenario in which the
          user uses a guide template in the app
        </p>
      </div>
      {!Width600 ? (
        <img src="/media/images/resized/Image 12.png" alt="auto-fill" />
      ) : (
        <div className="image">
          <img id="right" src="/media/images/resized/Journey.png" alt="auto-fill" />
          <img id="left" src="/media/images/resized/Journey1.png" alt="auto-fill" />
        </div>
      )}
    </Styles>
  );
};

const Styles = styled(motion.div)`
  p {
    margin: 40px 0;
  }
  img {
    width: 100%;
  }
  .image {
    #right {
      margin-left: 15px;
      margin-bottom: 40px;
    }
    #left {
      margin-left: -15px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      margin: 40px 0;
    }
  }
  @media only screen and (min-width: 1023px) {
    img {
      margin: 50px 0;
    }
    p {
      max-width: 760px;
    }
  }
`;
