import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { NavRes } from "./NavRes";

import Link from "next/link";

import { useMediaQuery } from "react-responsive";

export const Nav = ({ bgColor }) => {
  const Scroll = () => {
    setTimeout(function () {
      window.scroll({ top: 850, behavior: "smooth" });
    }, 100);
  };

  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });

  const ScrollHome = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  //styles
  return (
    <>
      {Width1023 ? (
        <div style={{ background: `${bgColor}` }} className="main">
          <Link href={"/"}>
            <div onClick={ScrollHome} className="logo">
              <div>gloria</div>
              <style>
                {`
        .logo {
          font-weight: 700;
          font-family: "Gilroy-ExtraBold";
          margin-left: 100px;
          cursor: pointer;
          font-size:24px;
        }`}
              </style>
            </div>
          </Link>
          <div className="nav">
            <Link href={"/"}>
              <motion.div
                className="navItem"
                onClick={Scroll}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Projects
              </motion.div>
            </Link>
            <Link href={"/about"}>
              <motion.div
                className="navItem middle"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.div>
            </Link>

            <a href="/media/GloriaPdf.pdf" target="_blank">
              <motion.div
                className="navItem"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume
              </motion.div>
            </a>
            <style>
              {`
          .nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 600px;
          }
        `}
            </style>
          </div>
          <style>
            {`
        
        .navItem {
          cursor: pointer;
          font-size: 24px;
          font-weight: 700;
          padding: 15px;
        }
      `}
          </style>
          <style>
            {`
        .main {
          position: sticky;
          z-index: 1000;
          top: 0;
          left: 0;
          width: 90vw;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding-top:30px;
          background: ${bgColor}
        }
      `}
          </style>
        </div>
      ) : (
        <NavRes />
      )}
    </>
  );
};

//styles
// const NavStyles = styled(motion.div)`
//   position: sticky;
//   z-index: 1000;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;

//   .nav {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;

//     width: 600px;
//     div {
//       cursor: pointer;
//     }
//   }
//   .logo {
//     font-weight: 700;
//     font-family: "Gilroy-ExtraBold";
//     margin-left: 100px;
//     cursor: pointer;
//   }

//   div {
//     font-size: 18px;
//     font-weight: 700;
//     padding: 15px;
//   }
// `;
