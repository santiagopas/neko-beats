import "./styles/index.scss";
import "./styles/audioControl.scss";
import { useState, useCallback } from "react";
import AdditionSettings from "./components/AdditionalInfo";
import PauseImage from "./components/PauseImage";

import RadioStations from "./components/radioStations/RadioStations";
import play from "./images/playBtn.png";
import AudioControls from "./components/audioControl";
import pauseImg from "./images/pause.png";
import useLivestreamState from "./helpers/useLivestreamState";
function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause");
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);


  const {
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
  } = useLivestreamState();

  const handlePausePlaySwitch = useCallback((e) => {
    let className = e.target.className;
  
    className === "PlayPause" || className === "playBtn"
      ? (setPlayPause(pauseImg),
        setBtnClass("PlayPause2"),
        setBtnClass2("playBtn2"),
        startLivestream())
      : (setPlayPause(play), setBtnClass("PlayPause"), setBtnClass2("playBtn"), stopLivestream());
  }, [startLivestream, stopLivestream]);


  
  const LofiGirlVideo = () => {
    setStationName("HifiBoy");
    setYoutubeChannal("");
    setCurrentLivestream("https://youtu.be/MVPTGNGiI-4");
  };

  const AmbientRenders = () => {
    setStationName("Ambient Renders");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw"
    );
    setCurrentLivestream(
      "https://youtu.be/MVPTGNGiI-4"
    );
  };

  const ChillHiphop = () => {
    setStationName("ChillHop Music");
    setYoutubeChannal("https://www.youtube.com/c/Chillhopdotcom/videos");
    setCurrentLivestream(
      "https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic"
    );
  };

  const theJazzHopCafe = () => {
    setStationName("theJazz Cafe");
    setYoutubeChannal("https://www.youtube.com/c/TheJazzHopCaf%C3%A9");
    setCurrentLivestream(
      "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
    );
  };

  const animeVibe = () => {
    setStationName("AnimeVibe");
    setYoutubeChannal("https://www.youtube.com/c/AnimeVibe");
    setCurrentLivestream(
      "https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic"
    );
  };

  const kpop = () => {
    setStationName("kpop");
    setYoutubeChannal("https://www.youtube.com/channel/UCuPNoEZUan3WybeJawo9gNQ");
    setCurrentLivestream(
      "https://www.youtube.com/watch?v=bwmSjveL3Lc&list=RDQMNmyLqgPmcnE&start_radio=1"
    );
  };

  const Taiki = () => {
    setStationName("Chill With Taiki");
    setYoutubeChannal("https://www.youtube.com/channel/UCKdURsjh1xT1vInYBy82n6g");
    setCurrentLivestream(
      "https://www.youtube.com/watch?v=qH3fETPsqXU"
    );
  };

  return (
    <div className="interfaceContainer">
      <aside className="radioContainer">

        <h1 className="logo">NekoBeats</h1>

        <div className="radioStationsContainer">
          <RadioStations
            Ambient={AmbientRenders}
            Anime={animeVibe}
            ChillHop={ChillHiphop}
            Lofi={LofiGirlVideo}
            Jazz={theJazzHopCafe}
            Kpop={kpop}
            Taiki={Taiki}
          />
        </div>
      </aside>

      <div className="audioControlContainer">
        <AudioControls
          playPause={handlePausePlaySwitch}
          buttonClass={BtnClass}
          playPauseImage={playPauseImg}
          buttonClass2={BtnClass2}
          LiveStreamAudio={currentLivestream}
          LiveStreamPlayPause={livestream}
        />
      </div>
      {
        pauseScreen === "unpauseScreen" ? null : (
          <div className={pauseScreen}>
            <PauseImage />
            <p>Música Pausada</p>
          </div>
        )
      }
      <AdditionSettings youtube={youtubeChannal} radio={stationName}
        playPause={handlePausePlaySwitch} buttonClass={BtnClass} playPauseImage={playPauseImg} buttonClass2={BtnClass2} LiveStreamAudio={currentLivestream} LiveStreamPlayPause={livestream} pauseScreen={pauseScreen} />
    </div>
  );
}

export default App;