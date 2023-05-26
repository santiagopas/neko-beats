import React from "react";
import triangle from "../../images/playBtn.png";

const RadioStations = ({ Ambient, Anime, Astral, ChillHop, Cow, Cloud, Ivy, High, Lofi, NiceGuys, Study, Jazz, IndieRock, Kpop, Taiki, BTS, Hits }) => {
  const stations = [
    { id: 1, name: "Ambient Renders", onClick: Ambient },
    { id: 2, name: "Anime Vibe", onClick: Anime },
    { id: 3, name: "Astral Throb", onClick: Astral },
    { id: 4, name: "ChillHop Music", onClick: ChillHop },
    { id: 5, name: "Chilled Cow", onClick: Cow },
    { id: 6, name: "Chill with Taiki", onClick: Taiki },
    { id: 7, name: "CloudHop Music", onClick: Cloud },
    { id: 8, name: "Ivy Records", onClick: Ivy },
    { id: 9, name: "H5G1 Music", onClick: High },
    { id: 10, name: "HI-FI Boy", onClick: Lofi },
    { id: 11, name: "Nice Guys", onClick: NiceGuys },
    { id: 12, name: "StudyMD", onClick: Study },
    { id: 13, name: "The Jazz Café", onClick: Jazz },
    { id: 14, name: "Indie rock", onClick: IndieRock },
    { id: 15, name: "K-POP", onClick: Kpop },
    { id: 16, name: "BTS", onClick: BTS },
    { id: 17, name: "80's Hits", onClick: Hits },
  ]


  return (
    <div className="radioList">
      {stations.map((station) => (
        <div key={station.id} className="animate">
          <div onClick={station.onClick} className="station">
            <img className="triangle" src={triangle} alt={station.name} />
            {station.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioStations;
