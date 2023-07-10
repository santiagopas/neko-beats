import triangle from "../../images/playBtn.png";

const RadioStations = ({ Ambient, Anime, ChillHop, Lofi, Jazz, Kpop, Taiki, Hits }) => {
  const stations = [
    { id: 1, name: "Ambient Renders", onClick: Ambient },
    { id: 2, name: "Anime Vibe", onClick: Anime },
    { id: 4, name: "ChillHop Music", onClick: ChillHop },
    { id: 6, name: "Chill with Taiki", onClick: Taiki },
    { id: 10, name: "HI-FI Boy", onClick: Lofi },
    { id: 13, name: "The Jazz Café", onClick: Jazz },
    { id: 15, name: "K-POP", onClick: Kpop },
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