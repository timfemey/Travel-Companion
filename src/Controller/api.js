const axios = require("axios").default;
const getPlace = async (type, x, y) => {
  let options = {
    method: "GET",
    url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
    params: {
      bl_latitude: x.lat,
      tr_latitude: y.lat,
      bl_longitude: x.lng,
      tr_longitude: y.lng,
      limit: "2",
      currency: "USD",
      adults: "1",
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "Your api key",
    },
  };

  let { data } = await axios.request(options);
  return data;
};

export { getPlace };
