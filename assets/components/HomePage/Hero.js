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
        {loaded && (
          <>
            <MediaQuerySSR maxWidth={1023}>
              <NavRes
                changeLoc={changeLoc}
                setChangeLoc={setChangeLoc}
                bgColor="#14171b"
              />
            </MediaQuerySSR>
            <MediaQuerySSR minWidth={1024}>
              <Nav bgColor="#14171b" />
            </MediaQuerySSR>
          </>
        )}
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
              <style>{`
              .image {
     
      width: 100%;
      img {
        min-width: 200px;
        width: 320px;
      }
    }`}</style>
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
            <style>{`
            .heading {
              display: flex;
              flex-direction: column;
                        }
            h1 {
              font-family: "Gilroy-Light";
              font-weight: 400;
            }
            span {
                font-weight: 700;
              }
            `}</style>
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
          <style>{`.row1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }`}</style>
        </div>
      </Styles>
    </AnimatePresence>
  );
};

const Styles = styled("div")`
  margin-top: 60px;
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
