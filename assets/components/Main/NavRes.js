import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Link from "next/link";

export const NavRes = ({ changeLoc, setChangeLoc, bgColor }) => {
  const GoBackFunc = () => {
    setChangeLoc(!changeLoc);
  };

  const ScrollHome = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  //styles

  //styles

  return (
    <NavResStyles className="navv" style={{ background: `${bgColor}` }}>
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
    </NavResStyles>
  );
};

const NavResStyles = styled(motion.div)`
  margin-bottom: 10px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  height: 59px;
  overflow: hidden;
  top: 0;
  left: 0;
  position: sticky !important;

  z-index: 1000;

  .logo {
    width: 59px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    font-size: 15px;
    font-weight: 700;

    font-family: "Gilroy-ExtraBold";
  }

  .menu-btn {
    position: sticky;
    border-bottom-left-radius: 20px;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 59px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    /* border: 3px solid #fff; */

    :active {
      background: transparent;
    }
  }
  .menu-btn__burger {
    width: 25px;
    height: 2px;
    background: #c0c0c0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 2px;
    background: #c0c0c0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-9px);
  }
  .menu-btn__burger::after {
    transform: translateY(9px);
  }
  /* ANIMATION */
  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  //responsive
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    //basics - padding, flex, h1, p, etc.
    .logo {
      margin-left: 30px;
    }
  }
`;
