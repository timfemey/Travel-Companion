import Header from "./Components/Header";
import React, { useEffect, useState } from "react";
import { getPlace, getData } from "./Controller/api";

import "./App.css";

function App() {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  return (
    <div className="App">
      <Header setCoords={setCoords} />
    </div>
  );
}

export default App;
