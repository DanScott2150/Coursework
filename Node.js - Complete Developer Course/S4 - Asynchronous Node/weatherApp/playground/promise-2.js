const request = require("request");
var apiKey = "AIzaSyBZb_5nSBYAoGQUD26tC8TMx8HRKKRtbmA";

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`,
      json: true
    }, (error, response, body) => {
        if(error){
          reject("Unable to connect to Google Servers");
        } else if(body.status === "ZERO_RESULTS"){
          reject("Unable to find address");
        } else if(body.status === "OK"){
          resolve(body.results[0]);
        }
    }); //request
  }); // new Promise
};  //geocodeAddress

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}).catch((errorMessage) => {
  console.log(errorMessage);
});

//     } else if(body.status === "OK"){
//       callback(undefined, {
//         address:body.results[0].formatted_address,
//         latitude: body.results[0].geometry.location.lat,
//         longitude:body.results[0].geometry.location.lng
//       });
//     }
//   });
//
// };
