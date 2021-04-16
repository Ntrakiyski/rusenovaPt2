import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Link from "next/link";

export const FooterNavi = ({ number, menu, to, target }) => {
  return (
    <Styles className="setPadding">
      <div className="content">
        <Link href={to}>
          <a target={target ? target : null}>
            <div className="menu">
              <div className="span">{number}.</div>
              <motion.div
                whileHover={{ x: 30, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {menu}
              </motion.div>
            </div>
          </a>
        </Link>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  padding-top: 0;

  .menu {
    display: flex;
    align-items: center;
    div {
      font-family: "Gilroy-Light";
      margin-bottom: 10px;
      font-size: 24px;
      text-transform: uppercase;
    }
  }

  .span {
    font-size: 32px;
    color: #727272 !important;
    margin-right: 5px;
    margin-top: 1px;
    width: 40px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .span {
      margin-right: 25px;
    }
    .menu div {
      font-size: 44px;
    }
  }
  @media only screen and (min-width: 1023px) {
    .menu div {
      font-size: 44px;
    }
    .span {
      margin-right: 25px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      width: 1200px;
    }
  }
`;
