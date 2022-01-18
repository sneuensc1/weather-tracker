$(function () {

    //get search items from local storage. Use if to set to an empty list if null so there is always a list.
    //create a list of searched for cities pulled from local storage and set them into a list
    let weatherList = localStorage.getItem("searchKeyStorage");
    if (weatherList === null) {
        weatherList = []
    } else {
        weatherList = JSON.parse(weatherList);
    }

    var searchedCities = document.getElementById("searchHistory");

    
    
    //set up the api info
    var getWeatherData = function (cityName) {
        //format the weather api
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=4bfcf3f737f250cacc137acee1f02832`
        console.log(apiUrl);
        // make a get request to url
        fetch(apiUrl).then(function(response) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            });
        });
    };
    //set up the second api call
    var fiveDayWeather = function (cityName) {
        //format the 5 day api
        let apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(cityName)}&appid=4bfcf3f737f250cacc137acee1f02832'
        //make a fetch request
        fetch(apiURL2).then(function(response) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            });
        });
    };
    //this will:
        //pull the city and the current day info
        //give a daily forecast including:
            //an icon representation of weather conditions, temp, humidity, wind speed, and UV index
            //UV index will present with a color indicating if conditions are favorable, moderate, or severe
        //fulls a five day future forecast
            //five day will dispaly date, icon, temp, humidity, wind speed

    //updates localStorage with the information from the search bar
    var saveSearchLocalStorage = function (searchText) {};

    var showSearchHistory = function() {
        var cityList = "";
        for (var i = 0; i < weatherList.length; i++) {
            cityList += `<li> ${weatherList[i]} </li>`
        }
        searchedCities.innerHTML = cityList;
    };

    showSearchHistory();

    //pulls the current date and time when the page opens
    let today = new Date();
    let currentHour = today.getHours();
    $("#currentDay").text(moment().format("Do MMMM YYYY"));


    //updates HTML with information from the search bar
    var saveSearch = function(searchText) {
        //adds text to existing list of searched for cities
        weatherList.push(searchText);
        //save to localStorage
        localStorage.setItem("searchKeyStorage", JSON.stringify(weatherList));
    };

    //add functionality to the search button
    //saves searched cities to localStorage
    //call getWeatherData
    $("#search-form").submit(function(event) {
        event.preventDefault();
        //grabs the text
        var searchText = $("#search-box").val().trim();
        saveSearch(searchText);
        showSearchHistory();
        getWeatherData(searchText);
        fiveDayWeather(searchText);
    });



    //make the history clickable
    //take list of cities (search history) and add a click function so I you click one, it activates the getWeatherData function
   $("#searchHistory").click(function(event) {
     
    //get the text of the search
    getWeatherData(event.target.innerText);
    fiveDayWeather(event.target.innerText);
    });




});