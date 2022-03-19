import axios from "axios";
const getPlace = async (type: string, x: any, y: any) => {
  try {
    const res = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          params: {
            bl_latitude: x.lat,
            tr_latitude: y.lat,
            bl_longitude: x.lng,
            tr_longitude: y.lng,
          },
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": String(process.env.RAPID_API_KEY),
        },
      }
    );
    return res.data.data;
  } catch (err) {
    alert("Error Occured in Getting Places");
    console.error(err);
  }
};

const getData = async (lat: number, long: number) => {
  try {
    if (lat && long) {
      let { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/find",
        {
          params: {
            lon: long,
            lat: lat,
          },
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": String(process.env.RAPID_API_KEY),
          },
        }
      );
      return data;
    } else {
      console.log("latitude and Longitude not defined");
    }
  } catch (err) {
    alert(err);
    console.error(err);
  }
};

export { getData, getPlace };
