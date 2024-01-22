import React from "react";
import aeroplane from "../../assets/aeroplane.png";
import video from "../../assets/video.mp4";

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Embrace the Skies with Us - Come Fly Away!</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video
            src={video}
            autoPlay
            muted
            loop
            className="video"
            data-testid="home-video"
          />
        </div>

        <img src={aeroplane} className="plane" alt="aeroplane" />
      </div>
    </div>
  );
};

export default Home;
