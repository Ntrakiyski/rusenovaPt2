import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { NavRes } from "../Main/NavRes";
import { Nav } from "../Main/Nav";
import { MediaQuerySSR } from "react-responsive-ssr";

//import image

import { useMediaQuery } from "react-responsive";

export const Hero = ({ loaded, changeLoc, setChangeLoc }) => {
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });
  const Scroll = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };
  return (
    <AnimatePresence>
      <Styles className="setPadding">
        <div className="rowFirst">
          {Width1023 && loaded && (
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              exit={{ opacity: 0 }}
              className="imageDiv"
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
              className="imageDiv"
            >
              <img src="/media/images/profileImage.png" alt="imaged" />
            </motion.div>
          )}
        </div>
      </Styles>
    </AnimatePresence>
  );
};

const Styles = styled.div`
  margin-top: 60px;
  .down-arrow {
    margin-top: 40px;
    cursor: pointer;
    margin: 50px 0;
    display: flex;
    align-items: center;
    font-size: 18px;

    .rowFirst {
      display: flex;
      flex-direction: column;
      align-items: center;

      .imageDiv {
        max-width: 375px;

        img {
          max-width: 70%;
          min-width: 200px;
          width: 100%;
        }
      }
    }
    span {
      font-size: 32px;
      margin-right: 10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 80px;
  }
  @media only screen and (min-width: 1023px) {
    margin-top: 80px;
    min-height: calc(100vh - 200px);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      max-width: 90%;
      margin-top: 40px;
    }
    .rowFirst {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 1248px;
    }
    .imageDiv {
      width: 375px;
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