import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

//import image

import { useMediaQuery } from "react-responsive";

export const Hero = () => {
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });
  const Scroll = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };
  return (
    <AnimatePresence>
      <Styles className="setPadding">
        <div className="row1">
          {Width1023 && (
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              exit={{ opacity: 0 }}
              className="image"
            >
              <img src="/media/images/profileImage.png" alt="imaged" />
            </motion.div>
          )}
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ y: -400, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            className="heading"
          >
            <h1>
              I’m Gloria, a product (UX/UI) designer creating human-centеred
              digital products
            </h1>

            <div className="down-arrow CTA" onClick={Scroll}>
              <motion.span
                initial={{ y: -5 }}
                animate={{ y: 5 }}
                transition={{
                  delay: 1.5,
                  repeat: Infinity,
                  duration: 0.4,
                  repeatType: "reverse",
                }}
              >
                👇
              </motion.span>
              Check out some of my work
            </div>
          </motion.div>

          {!Width1023 && (
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              exit={{ opacity: 0 }}
              className="image"
            >
              <img src="/media/images/profileImage.png" alt="imaged" />
            </motion.div>
          )}
        </div>
      </Styles>
    </AnimatePresence>
  );
};

const Styles = styled("div")`
  .heading {
    display: flex;
    flex-direction: column;
    h1 {
      font-family: "Gilroy-Light";
      font-weight: 400;
    }
    span {
      font-weight: 700;
    }
  }
  .row1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      img {
        min-width: 200px;
        width: 320px;
      }
    }
  }
  .down-arrow {
    margin-top: 40px;
    cursor: pointer;
    margin: 50px 0;
    display: flex;
    align-items: center;
    font-size: 18px;

    span {
      font-size: 32px;
      margin-right: 10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1023px) {
    margin-top: 30px;
    min-height: calc(100vh - 218px);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      max-width: 90%;
      margin-top: 40px;
    }
    .row1 {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 1248px;
    }
    .image {
      img {
        max-width: 375px;
        min-width: 280px;
      }
    }
    img {
      margin-right: 105px;
    }
  }
`;
