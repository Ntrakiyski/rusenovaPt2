import React, { useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import { motion } from "framer-motion";

import Link from "next/link";

const HamburgerStyles = styled(motion.div)`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 50vh;

  .menues {
    text-align: center;
    font-size: 38px;
    margin-bottom: 10px;
    margin-top: 50px;
    div {
      margin-bottom: 30px;
    }
  }
`;

export const Hamburger = ({ setChangeLoc, changeLoc }) => {
  const location = useRouter();

  const Scroll = () => {
    setTimeout(function () {
      window.scroll({ top: 800, behavior: "smooth" });
    }, 100);
    setChangeLoc(!changeLoc);
  };
  const AboutFunc = () => {
    setChangeLoc(!changeLoc);
  };

  return (
    <HamburgerStyles
      initial={{ x: 500 }}
      animate={{ x: 0, transition: { duration: 0.4 } }}
    >
      <div className="menues">
        <Link href="/about">
          <a>
            <motion.div
              onClick={AboutFunc}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.div>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <motion.div
              onClick={Scroll}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </motion.div>
          </a>
        </Link>
        <Link href="/travel-planner-app">
          <a>
            <motion.div
              onClick={AboutFunc}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              Travel Planner App
            </motion.div>
          </a>
        </Link>
        <Link href="/telenor-bulgaria">
          <a>
            <motion.div
              onClick={AboutFunc}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              Telenor Bulgaria
            </motion.div>
          </a>
        </Link>

        {/* <a href="/media/GloriaPdf.pdf" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            Resume
          </motion.div>
        </a> */}
      </div>
    </HamburgerStyles>
  );
};
