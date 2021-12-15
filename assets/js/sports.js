// gets all the players
var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" 
var searchEl = document.querySelector('#playerSearch');
var buttonEl = document.querySelector('#city-form');
var dataEl = document.querySelector('#data');

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    for (i = 0; i > data.length; i++)
    console.log(data)
})

var playerSumbitHandler = function(event) {
    // prevent page from refreshing 
    event.preventDefault();
    // get the value from the input
    var playerSearch = searchEl.value.trim();

    if(playerSearch) {
        getPlayer(playerSearch);
        // clear the old content
    } else {
        alert('Please enter a player');
    }
};

var getPlayer = function() {
    // format the Api
    var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" + playerSearch 
    // fetch the api
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dataEl.innerHTML = data.data
    })
};

buttonEl.addEventListener("submit", playerSumbitHandler);