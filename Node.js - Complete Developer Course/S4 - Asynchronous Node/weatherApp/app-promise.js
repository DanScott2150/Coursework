const axios = require("axios");
const yargs = require("yargs");

const argv = yargs
  .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
      }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var encodedAddress = encodeURIComponent(argv.address);
  var apiKey = "AIzaSyBZb_5nSBYAoGQUD26tC8TMx8HRKKRtbmA";
  var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  var darkSkyKey = "8ae9a024254e2edf00f42c2dc694a34c";


axios.get(geocodeURL).then((response) => {
  if(response.data.status === "ZERO_RESULTS"){
    throw new Error("Unable to find address.");
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lat;
  var weatherURL = `https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherURL);

}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemp = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature} degrees. It feels like ${apparentTemp}.`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log("Unable to connect to API servers");
  } else {
    console.log(e.message);
  }
});

//8ae9a024254e2edf00f42c2dc694a34c
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
