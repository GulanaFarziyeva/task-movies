import { ImVolumeMedium } from "react-icons/im";
import { FaVolumeMute } from "react-icons/fa";
import { useState } from "react";

const Hero = () => {
  const [volume, setvolume] = useState(false);

  return (
    <div className="home__hero">
      <div className="home__hero__inner">
        <div className="home__hero__inner__volume">
          <ImVolumeMedium 
           className={`home__hero__inner__volume__btn ${
            volume ? "volume-off" : "volume-open"
          }`} onClick={() => {
            setvolume(prevState => !prevState);
          }} />
          <FaVolumeMute  className={`home__hero__inner__volume__off-btn ${
            volume ? "volume-open" : "volume-off"
          }`} onClick={() => {
            setvolume(prevState => !prevState);
          }}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
