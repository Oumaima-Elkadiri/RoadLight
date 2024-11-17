import Feu from "./feu";
import { useState } from "react";
import car from "/car.png";
import roue from "/roue.png";

export default function Vehicule() {
  const [currentLight, setCurrentLight] = useState("vert");

  return (
    <div className="vehiculContainer">
      <div className={`back ${currentLight === "rouge" ? "stopped" : ""}`}></div>

      <Feu isStopped={currentLight === "rouge"} onLightChange={setCurrentLight} />

      <div className={`vehicule ${currentLight === "rouge" ? "stopped" : ""}`}>
        <img src={car} alt="Véhicule" className="vehiculeBody" />
        <div className="roueContainer roueAvant">
          <img
            src={roue}
            alt="Roue avant"
            className={`roue ${currentLight === "rouge" ? "" : "rotation"}`}
          />
        </div>
        <div className="roueContainer roueArriere">
          <img
            src={roue}
            alt="Roue arrière"
            className={`roue ${currentLight === "rouge" ? "" : "rotation"}`}
          />
        </div>
      </div>
    </div>
  );
}
