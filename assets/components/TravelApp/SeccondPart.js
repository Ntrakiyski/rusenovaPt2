import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Component } from "./SeccondPart/Component";

export const SeccondPart = () => {
  return (
    <Styles>
      <h1 className="mainTitle setPadding">Key design moments</h1>
      <Component
        number="1"
        title="Seamless entering"
        videoSrc="/media/videos/Entering.mov"
        image1=""
        image2=""
        yellowText="Lower interaction cost for the user"
        boxText1="We should first give some value to the user before asking her/him to spend time and energy on adding information or reads how the app works"
        boxText2="- Sing in/ Sign up ( require effort)   - Onboarding (taxing user’s
         memory)"
      />
      <Component
        number="2"
        title="Feed"
        videoSrc=""
        image1="/media/images/feed 1.png"
        image2="/media/images/feed 2.png"
        yellowText=""
        boxText1="The home screen is a place to find inspiration from others, guides, and feedback  "
        boxText2=""
        boxText3="The user can save, like, comment and share the video or the guide"
      />

      <Component
        number="3"
        title="Learn about user’s prefrences"
        videoSrc="/media/videos/2.mov"
        image1=""
        image2=""
        yellowText=""
        boxText1="After the user has spent some time in the app environment, it is a good time to customize her/his content"
        boxText2="Explaining more about the Algorithm -  we can build trust if we are open with the user"
        boxText3=""
      />
      <Component
        number="4"
        title="Sign up"
        videoSrc=""
        image1="/media/images/sign up.png"
        image2=""
        yellowText="After the user has already made some interactions"
        boxText1="If the user tries to make an interaction for example she\he wants to send a message to a friend in the app, now we have a reason to ask for Log in / Sign up and on the other side she/he has a reason to do it"
        boxText2=""
        boxText3=""
      />
      <Component
        number="5"
        title="Profile & Notifications"
        videoSrc=""
        image1="/media/images/prof and notif 1.png"
        image2="/media/images/prof and notif 2.png"
        yellowText=""
        boxText1="Different badges stimulating
        the user to interact more with the app so that she/he can gain more popularity"
        boxText2=""
        boxText3=""
      />
      <Component
        number="6"
        title="Create Guide"
        videoSrc=""
        image1="/media/images/create guide 1.png"
        image2="/media/images/create guide 2.png"
        yellowText=""
        boxText1="Creates a guide"
        boxText2=""
        boxText3="Selects a template"
        videoSrcAdd="/media/videos/3.mov"
        boxText1Add="The user selects desired days to travel and invites friends to plan together"
      />
      <Component
        number="7"
        title="Customize"
        videoSrc="/media/videos/4.mov"
        image1=""
        image2=""
        yellowText=""
        boxText1=""
        boxText2=""
        boxText3=""
        multImg1="/media/images/DailyPlan.png"
        multImg2="/media/images/Budget.png"
        multImg3="/media/images/Packing.png"
        multImg4="/media/images/Docs.png"
        lastImg="/media/images/Map.png"
        boxTextLast="In app map that shows you the location of each places within the choosen guide"
      />
      <Component
        number="8"
        title="Guides & Places"
        videoSrc="/media/videos/5.mov"
        image1=""
        image2=""
        yellowText=""
        boxText1=""
        boxText2=""
        boxText3=""
      />
      <Component
        number="9"
        title="Search places"
        videoSrc=""
        image1="/media/images/Search1.png"
        image2="/media/images/Search2.png"
        mainImg1="/media/images/Search3.png"
        mainImg2="/media/images/Search4.png"
        yellowText=""
        boxText1="The user can choose from pre-selected categories or find places that respond to her/his preferences"
        boxText2=""
        boxText3=""
        boxTextLast="Safety section which has relevant information about Covid-19 restrictions"
      />
    </Styles>
  );
};

const Styles = styled(motion.div)`
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1023px) {
  }
`;
