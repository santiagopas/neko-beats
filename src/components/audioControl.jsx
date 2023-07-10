import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import mute from "../images/mute.png";
import volumeOn from "../images/volumeOn.png";
import { backgrounds } from "../helpers/backgrounds";


let lastPlayedVolume = 0;

const AudioControls = ({
  playPause,
  buttonClass,
  playPauseImage,
  buttonClass2,
  LiveStreamAudio,
  LiveStreamPlayPause
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

  const [backgroundGift, setBackgroundGift] = useState('');

  const cambiarImagen = () => {
    console.log('cambiar imagen');
    setBackgroundGift(backgrounds[Math.floor(Math.random() * backgrounds.length)]);

  }


  return (
    <>
      <div className="audioControl">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          onClick={playPause}
          className={buttonClass}
        >
          <img width={40} height={40} src={playPauseImage} className={buttonClass2} alt="playPause" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMute}
          className={muteCheck}
        >
          <img width={10} height={10} className={muteCheck2} src={volumeImg} alt="volume" />
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
      <button type='button' onClick={cambiarImagen}>Next Img</button>
      <button type='button' onClick={cambiarImagen}>Prev Img</button>
      {
        LiveStreamPlayPause ?
          (
            backgrounds.map((background) => {
              setBackgroundGift(background);
              <ReactPlayer
                className="liveStreamPlayer"
                style={{
                  backgroundImage: `url(${backgroundGift})`
                }}
                playing={LiveStreamPlayPause}
                volume={volume}
                url={LiveStreamAudio}
                controls={true}
              />
            })
          )
          : null
      }
    </>
  );
};

export default AudioControls;