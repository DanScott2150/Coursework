// 1. Write a function called getMostFollowers, which accepts a variable number of arguments.
// You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user)
// to get the name and number of followers of each argument. The function should return a promise, which when resolved, 
//returns a string which displays the username who has the most followers.
// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

// Example:
    // getMostFollowers('elie','tigarcia','colt').then(function(data){
    //     console.log(data)
    // });
    //
    // "Colt has the most followers with 424"

  function getMostFollowers(...usernames){
    let baseUrl = 'https://api.github.com/users/';
    let urls = usernames.map(function(value){
      return baseUrl + value;
    })



    users.forEach()

    function getFollowers(username){
      $.getJSON(`https://api.github.com/users/${username}`);
    }

    var arr = [...args];

    Promise.all(

    )

  }
