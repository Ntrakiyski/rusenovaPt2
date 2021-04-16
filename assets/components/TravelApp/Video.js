import ReactPlayer from "react-player";
import styled from "styled-components";

export const Video = ({ src, classStyles }) => {
  return (
    <Styles>
      <div className="video">
        <ReactPlayer
          url={src}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          playsinline={true}
          className={classStyles}
        />
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  .video {
    height: 452px;
    width: 219px;
  }

  video {
    border-radius: 35px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .video {
      height: 620px;
      width: 314px;
    }
    video {
      border-radius: 70px;
    }
  }
  @media only screen and (min-width: 1023px) {
    width: 100%;
    margin: 80px 0;
    .video {
      height: 638px;
      width: 314px;
    }
    video {
      border-radius: 55px;
    }
  }
`;
