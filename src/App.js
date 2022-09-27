import { useState } from "react";
import "./styles.css";

export default function App() {
  const allColors = ["red", "yellow", "green", "pink"];
  const [colorr, setColorr] = useState("");
  const [selects, setSelect] = useState("");
  const [history, setHistory] = useState([]);
  const handleClick = (item) => {
    setColorr(item);
  };
  const handleSelect = () => {
    setSelect(colorr);
    setHistory([...history, colorr]);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="large" style={{ backgroundColor: colorr }}></div>
      </div>
      <div className="main">
        {allColors.map((item, index) => (
          <div
            className="myDiv"
            key={index}
            onClick={() => handleClick(item)}
            style={{ backgroundColor: item }}
          />
        ))}
        <input
          className="myDiv"
          type="color"
          onChange={(e) => handleClick(e.target.value)}
          onClick={(e) => handleClick(e.target.value)}
        />
        {/* <button className="sec1" style={{backgroundColor: "red"}} ></button>
      <button className="sec2" style={{backgroundColor: "yellow"}}></button>
      <button className="sec3" style={{backgroundColor: "blue"}}></button>
      <button className="sec4" style={{backgroundColor: "green"}}></button> */}
      </div>
      <div className="container">
        <div
          className="large"
          onClick={() => handleSelect()}
          style={{ backgroundColor: selects }}
        ></div>
      </div>
      <div className="history">
        {history.map((ele, ind) => (
          <div className="fragment" style={{ backgroundColor: ele }}></div>
        ))}
      </div>

      {/* <div className="sec"></div> */}
    </div>
  );
}
