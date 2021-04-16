import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Heading = () => {
  return (
    <Styles className="setPadding">
      <div className="content">
        <h5>MY EXPERIENCE AT TELENOR BULGARIA</h5>
        <p>
          I started my <span>Service Design</span> internship where I learned a
          lot about product creation from the idea to the final product using
          Design Thinking. It was a valuable experience participating in
          Sprints, defining project goals, observing and interviewing customers,
          and prioritizing product features.
        </p>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  @media only screen and (min-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .content {
      max-width: 1200px;

      p {
        max-width: 750px;
      }
    }
  }
`;
