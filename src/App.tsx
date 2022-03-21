import Header from "./Components/Header";
import React, { useEffect, useState } from "react";
import { getPlace } from "./Controller/api.js";
import GoogleMapReact from "google-map-react";
import "./App.css";
import Preference from "./Components/Preference";

function App() {
  const [coords, setCoords] = useState<any>({});
  const [rating, setRating] = useState("");
  const [preference, setPreference] = useState([]);
  const [choice, setChoice] = useState([]);
  const [attraction, setAttraction] = useState("hotels");
  const [direction, setDirection] = useState<any>({});
  let mounted: boolean = true;
  let mounted_two: boolean = true;

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  };

  useEffect(() => {
    if (mounted) {
      getLocation();
    }
    return () => {
      mounted = false;
    };
  }, []);
  useEffect(() => {
    if (mounted_two) {
      if (direction.sw && direction.ne) {
        (async () => {
          try {
            let { data } = await getPlace(
              attraction,
              direction.sw,
              direction.ne
            );
            setPreference(
              data
                ? data.filter(
                    (place: any) => place.name && place.num_reviews > 0
                  )
                : []
            );
            setChoice([]);
          } catch (err) {
            alert(`Error Occured, Please refresh browser`);
            console.error(err);
          }
        })();
      }
    }
    return () => {
      mounted_two = false;
    };
  }, [direction, attraction]);
  useEffect(() => {
    let mounted_three: boolean = true;
    if (mounted_three) {
      const choice = preference.filter((place: any) => place.rating > rating);
      setChoice(choice);
    }

    return () => {
      mounted_three = false;
    };
  }, [rating]);

  // let places = {
  //   places: choice.length ? choice : preference,
  // };

  return (
    <div className="App">
      <Header
        setAttraction={setAttraction}
        setRating={setRating}
        setCoords={setCoords}
      />
      <Preference
        places={choice.length ? choice : preference}
        rating={rating}
        type={attraction}
      />
      {console.log(coords)}
      <div style={{ float: "right", height: "100vh", width: "50%" }}>
        {coords.lat && coords.lng ? (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "Your maps api key",
            }}
            defaultCenter={coords}
            center={coords}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
            onChange={(e) => {
              setCoords({ lat: e.center.lat, lng: e.center.lng });
              setDirection({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            }}
          ></GoogleMapReact>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
}

export default App;
