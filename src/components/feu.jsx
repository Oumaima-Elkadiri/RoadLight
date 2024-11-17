import { useState, useEffect } from "react";
import feu from "/feu.png";

export default function Feu({ isStopped, onLightChange }) {
  const [currentLight, setCurrentLight] = useState("vert");

  useEffect(() => {
    let timer;
    if (currentLight === "vert") {
      timer = setTimeout(() => setCurrentLight("orange"), 10000);
    } else if (currentLight === "orange") {
      timer = setTimeout(() => setCurrentLight("rouge"), 5000);
    } else if (currentLight === "rouge") {
      timer = setTimeout(() => setCurrentLight("vert"), 10000);
    }

    onLightChange(currentLight);

    return () => clearTimeout(timer);
  }, [currentLight, onLightChange]);

  return (
    <div
      className={`trafficLightContainer ${isStopped ? "stopped" : "moving"}`}
      
    >
      <div className="trafficLight">
        <img className="trafficLightImage" src={feu} alt="Feu de circulation" />
        
        <div className={`light vert ${currentLight === "vert" ? "active" : ""}`}></div>
        <div className={`light orange ${currentLight === "orange" ? "active" : ""}`}></div>
        <div className={`light rouge ${currentLight === "rouge" ? "active" : ""}`}></div>
      </div>
      <div className="barre"></div>
    </div>
  );
}
