import { useEffect, useState } from "react";
import RainASMR from "../Sounds/rain.mp3";
import OceanASMR from "../Sounds/Ocean.mp3";
import whiteNoiseASMR from "../Sounds/whiteNoise.mp3";
import rain from "../images/rain.png";
import waves from "../images/waves.png";
import youtubeImg from "../images/youtube.png";
import WhiteNoise from "../images/whiteNoise.png";
import { motion } from "framer-motion";

const AdditionSettings = ({ youtube, radio }) => {
  const [rainVolume, setRainVolume] = useState(0);
  const [oceanVolume, setOceanVolume] = useState(0);
  const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (userInteracted) {
      const Rain = new Audio(RainASMR);
      const Ocean = new Audio(OceanASMR);
      const whiteNoise = new Audio(whiteNoiseASMR);

      Rain.volume = rainVolume;
      Ocean.volume = oceanVolume;
      whiteNoise.volume = whiteNoiseVolume;

      Rain.play();
      Ocean.play();
      whiteNoise.play();

      return () => {
        Rain.pause();
        Rain.currentTime = 0;
        Ocean.pause();
        Ocean.currentTime = 0;
        whiteNoise.pause();
        whiteNoise.currentTime = 0;
      };
    }
  }, [userInteracted, rainVolume, oceanVolume, whiteNoiseVolume]);

  const [transitionValue, setTransitionValue] = useState(0);
  const [titleLocation, setTitleLocation] = useState(350);
  const [show, setShow] = useState(false);

  const setTransition = () => {
    setTransitionValue(0);
  };

  useEffect(() => {
    setTransition();
    setTitleLocation(1000);
  }, [radio]);

  useEffect(() => {
    setTransitionValue(-450);
    setTitleLocation(420);
    setTimeout(() => {
      setTransition();
      setTitleLocation(1000);
    }, 2000);
  }, [radio]);
  const handleClick = () => {
    setShow(!show);
  };



  return (
    <div className="infoContainer" onClick={() => setUserInteracted(true)}>
      <div className="time"></div>
      <div className="songName">
        <motion.div
          animate={{ x: transitionValue }}
          transition={{ delay: 1 }}
          className="radioStationTitle"
          style={{ left: titleLocation }}
        >
          {radio}
          <div className="socialsContainer">
            <a href={youtube}>
              <img src={youtubeImg} className="socialIcons" alt="youtube" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="otherSoundsContainer">

        <div className="allign" >
          {show ? (

            <input
              className="soundDial"
              type="range"
              orient="vertical"
              min={0}
              max={1}
              value={rainVolume}
              onChange={(event) => {
                setRainVolume(event.target.valueAsNumber);
              }}
              step={0.2}
            />
          ) : null}
          <div className="otherSounds" onClick={handleClick}>
            <img width={10} height={10} src={rain} className="imgSizing" alt="lluvia" />
          </div>
        </div>
        <div className="allign">
          {show ? (
            <input
              className="soundDial"
              type="range"
              orient="vertical"
              min={0}
              max={1}
              value={oceanVolume}
              onChange={(event) => {
                setOceanVolume(event.target.valueAsNumber);
              }}
              step={0.2}
            />) : null}
          <div className="otherSounds" onClick={handleClick}>
            <img width={10} height={10} src={waves} className="imgSizing" alt="mar" />
          </div>
        </div>
        <div className="allign">
          {show ? (
            <input
              className="soundDial"
              type="range"
              orient="vertical"
              min={0}
              max={1}
              value={whiteNoiseVolume}
              onChange={(event) => {
                setWhiteNoiseVolume(event.target.valueAsNumber);
              }}
              step={0.2}
            />) : null}
          <div className="otherSounds" onClick={handleClick}>
            <img width={10} height={10} src={WhiteNoise} className="imgSizing" alt="ruido blanco" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionSettings;
