import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MapsComponent: React.FC = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 40.712776,
    longitude: -74.005974,
    zoom: 10,
    width: "100%",
    height: "400px",
  });

  return (
    <div className="border border-pink-700 w-1/2">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoia2Ftc2FtIiwiYSI6ImNseGJ0dmh0bjBndjMyanMzNndxbXRvanAifQ.Jjch2OuCaoAa4-kQ64Hg7g"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker latitude={40.712776} longitude={-74.005974}>
          <div>You are here</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default MapsComponent;
