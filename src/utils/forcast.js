const request = require("request");
const axios = require("axios").default;


async function forcast(address) {
  const url = `http://api.weatherstack.com/forecast?access_key=5ae5e4d7eb3178b7bf5a841de419edfc&query=${address}`;
  let data = await axios.get(url);
  return data;
}


module.exports = forcast;
