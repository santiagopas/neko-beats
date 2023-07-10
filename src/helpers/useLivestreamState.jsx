import { useState } from "react";

const useLivestreamState = () => {
  const [livestream, setLivestream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setCurrentLivestream] = useState("");
  const [stationName, setStationName] = useState("");
  const [youtubeChannal, setYoutubeChannal] = useState("");

  const startLivestream = () => {
    setLivestream(true);
    setPauseScreen("unpauseScreen");
  };

  const stopLivestream = () => {
    setLivestream(false);
    setPauseScreen("pauseScreen");
  };

  return {
    livestream,
    pauseScreen,
    currentLivestream,
    stationName,
    youtubeChannal,
    startLivestream,
    stopLivestream,
    setCurrentLivestream,
    setStationName,
    setYoutubeChannal,

  };
};

export default useLivestreamState;