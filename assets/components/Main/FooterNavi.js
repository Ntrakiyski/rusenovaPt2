import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Link from "next/link";

const StylesFooterNavi = styled(motion.div)`
  padding-top: 0;
  padding-bottom: 0;

  .menu {
    display: flex;
    align-items: center;
    a {
      font-family: "Gilroy-Light";
      margin: 10px 0;

      font-size: 24px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  .span {
    font-size: 32px;
    color: #727272 !important;
    width: 40px;
    margin-right: 15px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .span {
      margin-right: 25px;
    }
    .menu a .menu div {
      font-size: 44px;
    }
  }
  @media only screen and (min-width: 1023px) {
    .menu a,
    .menu div {
      font-size: 44px;
      margin: 10px 0;
      margin-left: 15px;
    }
    .span {
      width: 60px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    .contentT {
      width: 1200px;
    }
  }
`;

export const FooterNavi = ({ number, menu, to, target }) => {
  return (
    <StylesFooterNavi className="setPadding">
      <div className="contentT">
        <Link href={to}>
          <div className="menu">
            <div className="span">{number}.</div>
            <a target={target ? target : null}>
              <motion.div
                whileHover={{ x: 30, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {menu}
              </motion.div>
            </a>
          </div>
        </Link>
      </div>
    </StylesFooterNavi>
  );
};
