//Pseudocode for new scraper bot refactor.


axios.get('URL_1')
  .then((unmannedResponse) => {

    //Add response.data to allBills[]

    return axois.get('URL_2')
  })
  .then((droneReponse) => {

    //for loop add to allBills[]

    return new Promise((resolve, reject) => {   //could we do Promise(allBills)?
      resolve(allBills);
    })
  })
  .then((allBills) => {
      //Push to .csv format

      res.locals.allResults = allBills;
      next();
  })
  .catch((err) => console.log(err));

  
