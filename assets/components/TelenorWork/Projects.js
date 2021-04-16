import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { ParaComp } from "./ParaComp";

import { ProjectsStore } from "./ProjectsStore";

import { useMediaQuery } from "react-responsive";

export const Projects = () => {
  const Width768 = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  const TitleMta = (
    <>
      MyTelenor <br></br>App re-design
    </>
  );
  return (
    <Styles className="setPadding">
      <div className="title">
        <h5>SOME OF THE PROJECTS I WORKED ON</h5>
      </div>
      <div className="projects">
        {/* 01 - MyTelenor re-design */}

        <ProjectsStore
          number="01"
          title={TitleMta}
          sub=""
          stores="true"
          image1={Width768 ? "/media/images/MTAR.png" : "/media/images/MTA.png"}
          image2={
            Width768 ? "/media/images/MTA2R.png" : "/media/images/MTA2.png"
          }
          titleImg="true"
        />

        <div className="infoProject1">
          <div className="content">
            <ParaComp
              title="My Role"
              content="My role was to understand the problems that users were experiencing, validate hypotetical solutions, and design a better interface of the home screen."
            />
            <ParaComp
              title="Project deliverables"
              content="Clear information and call to actions on the home sceen."
            />
          </div>
        </div>
        <div className="lineDiv">
          <div className="line"></div>
        </div>
        {/* 02 - Smart Tourist */}
        <ProjectsStore
          number="02"
          title="Smart Tourist"
          sub="Travel insurance "
          stores="true"
          image1={
            Width768
              ? "/media/images/Travel1R.png"
              : "/media/images/Travel1.png"
          }
          image2={
            Width768
              ? "/media/images/Travel2R.png"
              : "/media/images/Travel2.png"
          }
        />
        <div className="infoProject1">
          <div className="paragraphs">
            <div className="content">
              <ParaComp
                title="My Role"
                content="Conduct in-depth interviews with potential users and synthesize user data into personas and case scenarios together with the team. After the concept creation, I had to go through the prototyping and design process."
              />
              <ParaComp
                title="Project deliverables"
                content="Travel insurance managed through the MyTelenor App. When the user is roaming, the insurance coverage starts and can be canceled for up to four 4 hours."
              />
            </div>
          </div>
        </div>
        <div className="lineDiv">
          <div className="line"></div>
        </div>
        {/* 03 - E-INVOICE */}
        <ProjectsStore
          number="03"
          title="E-INVOICE"
          sub="PAYMENTS"
          stores="true"
          image1={
            Width768
              ? "/media/images/Invoice1R.png"
              : "/media/images/Invoice1.png"
          }
          image2={
            Width768
              ? "/media/images/Invoice2R.png"
              : "/media/images/Invoice2.png"
          }
        />
        <div className="infoProject1">
          <div className="paragraphs">
            <div className="content">
              <ParaComp
                title="My Role"
                content="Understand the problems that users are experiencing, prototype a solution and test it with users. Create user scenarios and journeys for the different users."
              />
              <ParaComp
                title="Project deliverables"
                content="Easy way to present invoices of different client numbers owned by the user"
              />
            </div>
          </div>
        </div>
        <div className="lineDiv">
          <div className="line"></div>
        </div>
        {/* 04 - Gamification */}
        <ProjectsStore
          number="04"
          title="Gamification"
          sub="Game alike campaings"
          image1={
            Width768 ? "/media/images/GameR.png" : "/media/images/Game.png"
          }
          image2={
            Width768 ? "/media/images/Game2R.png" : "/media/images/Game.png"
          }
        />
        <div className="infoProject1">
          <div className="content">
            <ParaComp
              title="My Role"
              content="Conduct market research and understand different gamification methods. Create user journeys and visual design. Manage some of the campaigns and synthesize improvements."
            />
            <ParaComp
              title="Project deliverables"
              content="Games in MyTelenor app in which the user can instantly win prizes without effort."
            />
          </div>
        </div>
      </div>
      <div className="lineDiv">
        <div className="line"></div>
      </div>
      {/* 04 - E-vignette */}
      <ProjectsStore
        number="05"
        title="E-VIGNETTE"
        sub="Telenor.bg"
        image3={
          Width768
            ? "/media/images/VignetteR.png"
            : "/media/images/Vignette.png"
        }
      />
      <div className="infoProject1">
        <div className="content gridSet">
          <ParaComp
            title="My Role"
            content="Market Research, Informational Architectures, User flows, Prototype, Visual design"
          />
          <ParaComp
            title="Project deliverables"
            content="Online Vignette Service for mobile and web"
          />
        </div>
      </div>
      <div className="lineDiv">
        <div className="line"></div>
      </div>
      <p className="lastPara">
        {" "}
        I worked on many other projects related to MyTelenor App, Telenor
        E-shop, Business Portal and Digital Office App. You can reach me out if
        you want to learn more about my experience!
      </p>
    </Styles>
  );
};
const Styles = styled(motion.div)`
  //Space between the footer
  margin-bottom: 60px;
  .infoProject1 {
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 40px;
    }
  }
  .images {
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      max-height: 475px;
      max-width: 201px;
      margin-bottom: 40px;
    }
    .paragraphs {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 40px;
    }
  }
  .lineDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    .line {
      height: 1px;
      width: 70%;
      max-width: 760px;
      background: #5b5b5b;
      margin: 40px 0;
    }
  }
  .lastPara {
    max-width: 1200px;
  }

  @media only screen and (min-width: 768px) {
    .info {
      justify-content: flex-start;
      align-items: flex-start;
      .images {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 40px 0;

        img:first-child {
          margin-bottom: 0px;
        }
        img {
          margin-bottom: 0;
          margin-right: 60px;
        }
      }
    }
  }

  @media only screen and (min-width: 1023px) {
    .images {
      flex-direction: row;
      max-width: 562px;
    }
    .projects {
      max-width: 1200px;
    }

    .paragraphs,
    .infoProject1 {
      grid-template-columns: repeat(auto-fill, minmax(422px, 1fr));
      gap: 80px !important;

      .content {
        grid-template-columns: repeat(2, minmax(340px, 422px));
        gap: 160px;
      }
    }
    .infoProject1 {
      justify-content: flex-start;
      .gridSet {
        grid-template-columns: repeat(auto-fill, minmax(350, 1fr));
      }
    }
    .lineDiv {
      .line {
        margin: 100px 0;
      }
    }

    .imageAlone {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
