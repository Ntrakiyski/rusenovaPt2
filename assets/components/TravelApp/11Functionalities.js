import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

const StylesFunctionalities = styled(motion.div)`
  h1 {
  }
  img {
    width: 100%;
  }

  .bg {
    background: #f3cd6a;
    color: #2b2b2b;
    div {
      margin: 20px 0;
      font-size: 18px;
      font-weight: 670;
    }
  }
`;

export const Functionalities = () => {
  const Width600 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <StylesFunctionalities>
      {!Width600 ? (
        <img src="/media/images/resized/Image 112.png" alt="auto-fill" />
      ) : (
        <div>
          <h1>Functionalities</h1>
          <div className="bg">
            <div className="bullets setPadding">
              <div>• Day by day schedules </div>
              <div>• Collaboration with co-travellers </div>
              <div>• Budget estimation </div>
              <div>• Map </div>
              <div>• Voice integration </div>
            </div>
          </div>
        </div>
      )}
    </StylesFunctionalities>
  );
};
