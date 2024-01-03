import "../css/main.css";
import { useState } from "react";

export default function Converter() {
  const [hexColor, setHexColor] = useState("");
  const [rgbColor, setRgbColor] = useState("");
  const [cashHex, setCashHex] = useState("");
  return (
    <>
      <form
        className="converter-form"
        style={{ backgroundColor: `#${cashHex}` }}
      >
        <div className="converter-div">
          <input
            className="converter-input"
            type="text"
            id="hexColor"
            value={`#${hexColor}`}
            onInput={(e) => {
              const hex = e.target.value.substring(1);
              setHexColor(hex);
              if (hex !== null && hex.length == 6) {
                const rgb = hex2rgb(hex);
                setRgbColor(rgb);
                setCashHex(hex);
              }
            }}
          ></input>
          <input
            className="converter-label"
            type="text"
            id="rgbColor"
            value={rgbColor}
            disabled
          ></input>
        </div>
      </form>
    </>
  );
}

function hex2rgb(hex) {
  if (hex == null || hex.length !== 6) {
    return "Error";
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result == null) {
    return "Error";
  }
  return `rgb(${parseInt(result[1], 16)}, ${parseInt(
    result[2],
    16
  )}, ${parseInt(result[3], 16)})`;
}
