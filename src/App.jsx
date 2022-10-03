import "./styles/index.scss";
import "./styles/audioControl.scss";
import { useState } from "react";
import AdditionSettings from "./components/additionalInfo";
import PauseImage from "./components/pauseImage";
import Loading from "./components/loadingImage";
import RadioStations from "./components/radioStations/radioStations";
import github from "./images/github.png";
import play from "./images/playBtn.png";
import AudioControls from "./components/audioControl";
import pauseImg from "./images/pause.png";
import ReactPlayer from "react-player";


function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);

  const [livestream, playLiveStream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(
    "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"
  );

  const [stationName, setStationName] = useState("LofiGirl");


  const [youtubeChannal, setYoutubeChannal] = useState("");

  const handlePausePlaySwitch = (e) => {
    let className = e.target.className;

    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  const [video, setVideo] = useState(
    `//www.youtube.com/watch?v=DWcJFNfaw9c`
  );

  // <------------- Radio Change section -------------->

  const LofiGirlVideo = () => {
    setVideo("//www.youtube.com/watch?v=5qap5aO4i9A");
    setStationName("LofiGirl");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=5qap5aO4i9A"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const AmbientRenders = () => {
    setVideo("https://www.youtube.com/watch?v=XcoyRYIMfzw");
    setStationName("Ambient Renders");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=pJH-j2CnwBY&ab_channel=RelaxingAmbienceASMR"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const IvyRecords = () => {
    setVideo("//www.youtube.com/embed/F1B9Fk_SgI0?autoplay=1&mute=1&start=10");
    setStationName("Ivy Records");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCv7qaGzuEfLhKxAZf4eZONg"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=aLqc8TdoLJ0"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const ChillHiphop = () => {
    setVideo("//www.youtube.com/embed/iEGFFyv0MH4?autoplay=1&mute=1&start=1");
    setStationName("ChillHop Music");
    setYoutubeChannal("https://www.youtube.com/c/Chillhopdotcom/videos");
    setLivestream(
      "https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const HFiveGOneFunc = () => {
    setVideo("//www.youtube.com/embed/lniKA4QHuxg?autoplay=1&mute=1&start=1");
    setStationName("H5G1 Music");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCIPy2w-XdvaU73L3nAK1-0g"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=-9gEgshJUuY&ab_channel=lofigeek"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const StudyMD = () => {
    setVideo("//www.youtube.com/embed/PcxpLIv4CNU?autoplay=1&mute=1&start=1");
    setStationName("StudyMD");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UC5CRP-6oxYenIgBj17CkBZg"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=uxR_sTZnBtg&ab_channel=StudyMD"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const astralThrob = () => {
    setVideo("//www.youtube.com/embed/dIf_ZQZCSoM?autoplay=1&mute=1&start=1");
    setStationName("Astral Throb");
    setYoutubeChannal("https://www.youtube.com/c/AstralThrob");
    setLivestream(
      "https://www.youtube.com/watch?v=xxgxkjV70Vc&ab_channel=NightrideFM"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const chilledCow = () => {
    setVideo("//www.youtube.com/embed/lTRiuFIWV54?autoplay=1&mute=1&start=1");
    setStationName("Chilled Cow");
    setYoutubeChannal("https://www.youtube.com/c/LofiGirl");
    setLivestream(
      "https://www.youtube.com/watch?v=DWcJFNfaw9c&ab_channel=LofiGirl"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const theJazzHopCafe = () => {
    setVideo("//www.youtube.com/embed/U8HBZOTZrf0?autoplay=1&mute=1&start=1");
    setStationName("theJazz Cafe");
    setYoutubeChannal("https://www.youtube.com/c/TheJazzHopCaf%C3%A9");
    setLivestream(
      "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const CloudHop = () => {
    setVideo("//www.youtube.com/embed/70NcGd759Bc?autoplay=1&mute=1&start=1");
    setStationName("CloudHop");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCWRqPtvnyVUS9zpADA-9oaw"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=kgx4WGK0oNU&ab_channel=%E9%98%BF%E9%B2%8DAbao"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const NiceGuys = () => {
    setVideo("//www.youtube.com/embed/3n1aC2TYXIA?autoplay=1&mute=1&start=1");
    setStationName("Nice Guys");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCMmt12UKW571UWtJAgWkWqg"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=oVi5gtzTDx0&ab_channel=NiceGuys"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  //setVideo("//www.youtube.com/embed/5B7Rsw0L2r8?autoplay=1&mute=1&start=0"); VIDEO SHGINGEKI
  // setVideo("//www.youtube.com/watch?v=-WhU5nfpE2Q"); VIDEO MADARA

  //setVideo("//www.youtube.com/watch?v=PHsaY8VXvOc"); VIDEO HOWL
  const animeVibe = () => {
    setVideo("//www.youtube.com/watch?v=PHsaY8VXvOc");
    setStationName("AnimeVibe");
    setYoutubeChannal("https://www.youtube.com/c/AnimeVibe");
    setLivestream(
      "https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const rockIndie = () => {
    setVideo("//www.youtube.com/watch?v=1itSqkbXIlU");
    setStationName("rock Indie");
    setYoutubeChannal("https://www.youtube.com/watch?v=1itSqkbXIlU");
    setLivestream(
      "https://www.youtube.com/watch?v=1itSqkbXIlU"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const kpop = () => {
    setVideo("//www.youtube.com/watch?v=bwmSjveL3Lc&list=RDQMNmyLqgPmcnE&start_radio=1");
    setStationName("kpop");
    setYoutubeChannal("https://www.youtube.com/channel/UCuPNoEZUan3WybeJawo9gNQ");
    setLivestream(
      "https://www.youtube.com/watch?v=bwmSjveL3Lc&list=RDQMNmyLqgPmcnE&start_radio=1"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Taiki = () => {
    setVideo("https://www.youtube.com/watch?v=qH3fETPsqXU");
    setStationName("Chill With Taiki");
    setYoutubeChannal("https://www.youtube.com/channel/UCKdURsjh1xT1vInYBy82n6g");
    setLivestream(
      "https://www.youtube.com/watch?v=qH3fETPsqXU"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const BTS = () => {
    setVideo("//www.youtube.com/watch?v=e54zLsDa5E0");
    setStationName("BTStation");
    setYoutubeChannal("https://www.youtube.com/channel/UCfUGIcsUpU-QTye5B6CN3rw");
    setLivestream(
      "https://www.youtube.com/watch?v=IxtG_p3IQM4"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };


  const Hits = () => {
    setVideo("//www.youtube.com/watch?v=Vcg7sLDTICk");
    setStationName("80'S Hits");
    setYoutubeChannal("https://www.youtube.com/channel/UC-ITe1nKavRL6-Sl2aE3LKA");
    setLivestream(
      "https://www.youtube.com/watch?v=oLyaNIdCQFI"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  return (
    <div className="interfaceContainer">
      <aside className="radioContainer">

        <h1 className="logo">NekoBeats</h1>

        <div className="radioStationsContainer">
          <RadioStations
            Ambient={AmbientRenders}
            Anime={animeVibe}
            Astral={astralThrob}
            ChillHop={ChillHiphop}
            Cow={chilledCow}
            Cloud={CloudHop}
            Ivy={IvyRecords}
            High={HFiveGOneFunc}
            Lofi={LofiGirlVideo}
            Study={StudyMD}
            Jazz={theJazzHopCafe}
            Nice={NiceGuys}
            IndieRock={rockIndie}
            Kpop={kpop}
            Taiki={Taiki}
            BTS={BTS}
            Hits={Hits}
          />
        </div>
      </aside>
      {/* <div className="socialsContainer2">
          <div className="socials">
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://github.com/santiagopas");
              }}
              className="link"
            >
              <img className="githubLogo" src={github} alt="github" />
              Github
            </motion.div>
          </div>
        </div> */}
      <div className="audioControlContainer">
        <AudioControls
          plauPause={handlePausePlaySwitch}
          buttonClass={BtnClass}
          playPauseImage={playPauseImg}
          buttonClass2={BtnClass2}
          LiveStreamAudio={currentLivestream}
          LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
        <p style={{ marginTop: "0rem" }}>Música Pausada</p>
      </div>

      <AdditionSettings youtube={youtubeChannal} radio={stationName} />
      <div class="videoContainer">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          loop="true"
          playing={livestream}
          volume="mute"
          url={video}
        />
      </div>



      <Loading />
    </div>
  );
}

export default App;
