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
            <a className="navItem">
              <motion.div
                onClick={Scroll}
                
              >
                Projects
              </motion.div>
            </a>
          </Link>
          <Link href={"/about"}>
            <a className="navItem">
              {" "}
              <motion.div
                className="middle"
               
              >
                About
              </motion.div>
            </a>
          </Link>

          <a className="navItem" href="/media/GloriaPdf.pdf" target="_blank">
            <motion.div >
              Resume
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};
