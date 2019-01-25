const request = require("request");
const yargs = require("yargs");

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if(errorMessage){
          console.log(errorMessage);
        } else {
          console.log(`It is currently ${weatherResults.temperature} degrees. It feels like ${weatherResults.apparentTemp}.`)
          // console.log(JSON.stringify(weatherResults, undefined, 2));
        }
    });
  }
});




//8ae9a024254e2edf00f42c2dc694a34c
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
