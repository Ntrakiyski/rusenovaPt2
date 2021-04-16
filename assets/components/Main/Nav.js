import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Link from "next/link";

import { NavRes } from "./NavRes";

import { useMediaQuery } from "react-responsive";

//styles

export const Nav = ({ bgColor, setChangeLoc, changeLoc }) => {
  const Scroll = () => {
    setTimeout(function () {
      window.scroll({ top: 880, behavior: "smooth" });
    }, 100);
  };

  const ScrollHome = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });

  //styles
  return (
    <div style={{ background: `${bgColor}` }} className="mainNav">
      <div className="navigation">
        <Link href={"/"}>
          <a>
            {" "}
            <div onClick={ScrollHome} className="logo">
              gloria
            </div>
          </a>
        </Link>
        <div className="nav">
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
          <Link href={"/about"}>
            <a>
              {" "}
              <motion.div
                className="middle"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.div>
            </a>
          </Link>

          <a href="/media/GloriaPdf.pdf" target="_blank">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              Resume
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};
