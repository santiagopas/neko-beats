import React from "react";
// import { motion } from "framer-motion";
import triangle from "../../images/playBtn.png";


const RadioStations = ({
  Ambient,
  Anime,
  Astral,
  ChillHop,
  Cow,
  Cloud,
  Ivy,
  High,
  Lofi,
  Study,
  Jazz,
  Nice,
  IndieRock,
  Kpop,
  Taiki,
  BTS,
  Hits
}) => {
  return (
    <div className="radioList">
      <div className="animate">
        <div
          onClick={Ambient}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Ambient Renders" />
          Ambient Renders
        </div>
      </div>

      <div className="animate" >
        <div
          onClick={Anime}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Anime Vibe" />
          Anime Vibe
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Astral}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Astral Throb" />
          Astral Throb
        </div>
      </div>

      <div className="animate">
        <div
          onClick={ChillHop}
          className="station"
        >
          <img className="triangle" src={triangle} alt="ChillHop Music" />
          ChillHop Music
        </div>
      </div>

      <div className="animate" >
        <div
          onClick={Cow}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Chilled Cow" />
          Chilled Cow
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Taiki}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Chill with Taiki" />
          Chill with Taiki
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Cloud}
          className="station"
        >
          <img className="triangle" src={triangle} alt="CloudHop Music" />
          CloudHop Music
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Ivy}
          className="station"
        >
          <img className="triangle" src={triangle} alt=" Ivy Records" />
          Ivy Records
        </div>
      </div>

      <div className="animate">
        <div
          onClick={High}
          className="station"
        >
          <img className="triangle" src={triangle} alt=" H5G1 Music" />
          H5G1 Music
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Lofi}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Lofi Girl" />
          <span> Lofi Girl </span>
        </div>
      </div>

      <div className="animate" >
        <div
          onClick={Nice}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Nice guys" />
          <span> Nice Guys </span>
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Study}
          className="station"
        >
          <img className="triangle" src={triangle} alt="StudyMD" />
          StudyMD
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Jazz}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Jazz cafe" />
          The Jazz Café
        </div>
      </div>

      <div className="animate">
        <div
          onClick={IndieRock}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Idie  Rock" />
          Indie rock
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Kpop}
          className="station"
        >
          <img className="triangle" src={triangle} alt="K-POP" />
          K-POP
        </div>
      </div>

      <div className="animate">
        <div
          onClick={BTS}
          className="station"
        >
          <img className="triangle" src={triangle} alt="BTS station" />
          BTS
        </div>
      </div>

      <div className="animate">
        <div
          onClick={Hits}
          className="station"
        >
          <img className="triangle" src={triangle} alt="Hits de los 80'S" />
          80's Hits
        </div>
      </div>
    </div>
  );
};

export default RadioStations;
