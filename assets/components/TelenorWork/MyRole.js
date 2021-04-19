import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { ParaComp } from "./ParaComp";

const StylesMyRole = styled(motion.div)`
  .title {
    margin-top: 30px;
  }
  .paragraphs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 40px;
  }
  @media only screen and (min-width: 1023px) {
    .title {
      h5 {
        margin-bottom: 0;
        margin-top: 100px;
      }
    }
    .paragraphs {
      gap: 40px;
      p {
        width: 100%;
      }
    }
  }
`;

export const MyRole = () => {
  const para1 = (
    <p>
      Define the key aspects of the product or services by individual in-depth{" "}
      <span>interviews</span> and market research.
    </p>
  );
  const para2 = (
    <p>
      Analizing and synthesise user data and create user <span>personas</span>{" "}
      and user story maps.
    </p>
  );
  const para3 = (
    <p>
      Participating in <span>Sprints</span>, leading design acitivities and
      develop solutions.
    </p>
  );
  const para4 = (
    <p>
      Sketch, create <span>wireframes</span>, user flows, informational{" "}
      architectures
    </p>
  );
  const para5 = (
    <p>
      Usability, <span>A/B testing</span>
    </p>
  );
  const para6 = (
    <p>
      <span>Interaction,</span> Visual Design
    </p>
  );
  return (
    <StylesMyRole className="setPadding">
      <h5>MY ROLE IN THE PROJECTS</h5>
      <div className="paragraphs">
        <ParaComp title="Emphatize" content={para1} />
        <ParaComp title="Define" content={para2} />
        <ParaComp title="Ideate" content={para3} />
        <ParaComp title="Prototype" content={para4} />
        <ParaComp title="Test" content={para5} />
        <ParaComp title="Design" content={para6} />
      </div>
    </StylesMyRole>
  );
};
