const request = require("request");

var darkSkyKey = "8ae9a024254e2edf00f42c2dc694a34c";
// var weatherLat = "";
// var weatherLng = "";

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      });
    } else {
      callback("unable to fetch weather");
    }
  });
}

module.exports.getWeather = getWeather;
