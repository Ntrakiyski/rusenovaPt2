import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Link from "next/link";

export const Nav = ({ bgColor }) => {
  const Scroll = () => {
    setTimeout(function () {
      window.scroll({ top: 850, behavior: "smooth" });
    }, 100);
  };

  const ScrollHome = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  //styles
  const NavStyles = styled(motion.div)`
    position: sticky;
    z-index: 1000;

    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: ${bgColor};

    .nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-right: 100px;
      width: 600px;
      div {
        cursor: pointer;
      }
    }
    .logo {
      font-weight: 700;
      font-family: "Gilroy-ExtraBold";
      margin-left: 100px;
      cursor: pointer;
    }

    div {
      font-size: 18px;
      font-weight: 700;
      padding: 15px;
    }
  `;

  //styles
  return (
    <NavStyles className="NavStylesRes ">
      <Link href={"/"}>
        <div onClick={ScrollHome} className="logo">
          gloria
        </div>
      </Link>
      <div className="nav">
        <Link href={"/"}>
          <motion.div
            onClick={Scroll}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.div>
        </Link>
        <Link href={"/about"}>
          <motion.div
            className="middle"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.div>
        </Link>

        <a href="/media/GloriaPdf.pdf" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            Resume
          </motion.div>
        </a>
      </div>
    </NavStyles>
  );
};
