import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import Link from "next/link";

export const NavRes = ({ changeLoc, setChangeLoc, bgColor }) => {
  const GoBackFunc = () => {
    setChangeLoc(!changeLoc);
  };

  const ScrollHome = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });

  return (
    <div className="navv" style={{ background: `${bgColor}` }}>
      <div className="contentT">
        <Link href={"/"} exact>
          <div onClick={ScrollHome} className="logo">
            gloria
          </div>
        </Link>
        <div className="back">
          <div
            className={changeLoc ? "menu-btn open" : "menu-btn"}
            onClick={GoBackFunc}
          >
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
