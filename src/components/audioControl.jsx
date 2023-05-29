import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import mute from "../images/mute.png";
import volumeOn from "../images/volumeOn.png";

let lastPlayedVolume = 0;

const AudioControls = ({
  playPause,
  buttonClass,
  playPauseImage,
  buttonClass2,
  LiveStreamAudio,
  LiveStreamPlayPause,
  livestream
}) => {
  const handleMute = (e) => {
    let classNameVol = e.target.className;
    if (classNameVol === "volumeOn" || classNameVol === "audioOnImg") {
      console.log("mute");
      setVolumeImg(mute);
      setUnmute("volumeOff");
      setUnmute2("audioOffImg");
      lastPlayedVolume = volume;
      setVolume(0);
    } else if (classNameVol === "volumeOff" || classNameVol === "audioOffImg") {
      setVolumeImg(volumeOn);
      setUnmute("volumeOn");
      setUnmute2("audioOnImg");
      setVolume(lastPlayedVolume);
    }
  };

  const [muteCheck, setUnmute] = useState("volumeOn");
  const [muteCheck2, setUnmute2] = useState("audioOnImg");
  const [volumeImg, setVolumeImg] = useState(volumeOn);
  const [volume, setVolume] = useState(1);


  return (
    <>
      <div className="audioControl">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          onClick={playPause}
          className={buttonClass}
        >
          <img src={playPauseImage} className={buttonClass2} alt="" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMute}
          className={muteCheck}
        >
          <img className={muteCheck2} src={volumeImg} alt="" />
        </motion.div>
        <div>
          <input
            className="volumeDial"
            type="range"
            min={0}
            max={1}
            value={volume}
            step={0.01}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </div>
      </div>
      {
        LiveStreamPlayPause ? (
            <ReactPlayer
              className="liveStreamPlayer"
              style={{ backgroundImage: "url(https://art.pixilart.com/sr26e544e4b579e.gif)" }}
              playing={LiveStreamPlayPause}
              volume={volume}
              url={LiveStreamAudio}
              controls={true}
            />
        ) : null
      }
    </>
  );
};

export default AudioControls;