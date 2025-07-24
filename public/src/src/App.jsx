import React, { useState } from "react";
import mapImage from "./map.jpg";

export default function App() {
  const [markers, setMarkers] = useState([]);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMarkers([...markers, { x, y }]);
  };

  return (
    <div style={{ textAlign: "center", background: "#111", color: "white", minHeight: "100vh", padding: 20 }}>
      <h1>Fortnite Dropmap</h1>
      <div style={{ position: "relative", display: "inline-block" }} onClick={handleClick}>
        <img src={mapImage} alt="map" style={{ width: "90vw", maxWidth: "600px" }} />
        {markers.map((m, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)"
          }} />
        ))}
      </div>
    </div>
  );
    }
