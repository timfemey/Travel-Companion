import Header from "./Components/Header";
import React, { useEffect, useState } from "react";
import { getPlace, getData } from "./Controller/api";

import "./App.css";

function App() {
  const [coords, setCoords] = useState<any>({});
  const [rating, setRating] = useState("");
  const [preference, setPreference] = useState([]);
  const [choice, setChoice] = useState([]);
  const [weather, setWeather] = useState([]);
  const [attraction, setAttraction] = useState("hotels");
  const [direction, setDirection] = useState<any>({});
  let mounted: boolean,
    mounted2: boolean,
    mounted3: boolean = true;

  useEffect(() => {
    if (mounted) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
        }
      );
    }
    return () => {
      mounted = false;
    };
  }, []);
  useEffect(() => {
    if (mounted2) {
      if (direction.sw && direction.ne) {
        getData(coords.lat, coords.lng).then((data) => setWeather(data));
        getPlace(attraction, direction.sw, direction.ne).then((data) => {
          setPreference(
            data
              ? data.filter((place: any) => place.name && place.num_reviews > 0)
              : alert(`Error Setting Preference`)
          );
          setChoice([]);
        });
      }
    }
    return () => {
      mounted2 = false;
    };
  }, [direction, attraction]);
  useEffect(() => {
    if (mounted3) {
      const choice = preference.filter((place: any) => place.rating > rating);
      setChoice(choice);
    }

    return () => {
      mounted3 = false;
    };
  }, [rating]);

  return (
    <div className="App">
      <Header
        setPreference={setAttraction}
        setRating={setRating}
        setCoords={setCoords}
      />
    </div>
  );
}

export default App;
