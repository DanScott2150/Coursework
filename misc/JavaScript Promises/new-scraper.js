//Pseudocode for new scraper bot refactor.


axios.get('URL_1')
  .then((unmannedResponse) => {
    // >> Add response.data to allBills[] <<
    return axois.get('URL_2')
  })
  .then((droneReponse) => {
    // >> for loop add to allBills[] <<
    return new Promise((resolve, reject) => {   //could we do Promise(allBills)?
      resolve(allBills);
    })
  })
  .then((allBills) => {
      // >> Push to .csv format <<
      res.locals.allResults = allBills;
      next();
  })
  .catch((err) => console.log(err));



  states.forEach((state) => {
    function runUnmannedCall(){
      return axios.get(URL)
    }

    runUnmannedCall().then((response) => {

    })
  })


/* ---------------------------------------- */

let allBills = [];

async function openStatesAPI(state){
  let keywordDrone = await axios.get(OS-URL-'drone');

  let keywordUnmanned = await axios.get(OS-URL-'unmanned');

}


const promises = [openStatesAPI("drone"), openStatesAPI("unmanned")];
Promise.all(promises)
  .then((results))

function openStatesAPI(keyword){

}

/*
    1) States = array = promises to return
    2) Promise.all(states)


*/




/* ----------------------------- */
Fish App:

Middleware:

1) Lookup all Rivers => river{}
2) For each river{}, run getWeather()
3) Store weather in dashboardObj{}
