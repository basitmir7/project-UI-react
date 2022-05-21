import { useState } from "react";
import "./App.css";

function App() {
  const name1 = "zubair";
  const name2 = "Basit";
  const [isdance, setIsdance] = useState(false);
  const toggleDance = () => {
    setIsdance = !isdance;
  };
  return (
    <div className="App">
      <h1>
        {" "}
        New app Creation in progress...
        <br /> By
      </h1>

      <h2 className="Names dance">{name1}</h2>
      <p> and </p>
      <h2 className="Names dance">{name2}</h2>
    </div>
  );
}

export default App;
