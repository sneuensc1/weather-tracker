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

    var searchText = $("#search-box").val();
    
    //set up the api info
    var getWeatherData = function () {
        //format the weather api
        var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=41.881832&lon=-87.623177&appid=4bfcf3f737f250cacc137acee1f02832";
        // make a get request to url
        fetch(apiUrl).then(function(response) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            });
        });
    };
    //call the api
    //this will:
        //pull the city and the current day info
        //give a daily forecast including:
            //an icon representation of weather conditions, temp, humidity, wind speed, and UV index
            //UV index will present with a color indicating if conditions are favorable, moderate, or severe
        //fulls a five day future forecast
            //five day will dispaly date, icon, temp, humidity, wind speed
    var getWeatherData = function(searchText) {};

    //updates localStorage with the information from the search bar
    var saveSearchLocalStorage = function (searchText) {};





    //pulls the current date and time when the page opens
    let today = new Date();
    let currentHour = today.getHours();
    $("#currentDay").text(moment().format("Do MMMM YYYY"));


   
    var showSearchHistory = function() {
        var cityList = "";
        for (var i = 0; i < weatherList.length; i++) {
            showSearchHistory += "<li>" + weatherList[i] + "</li>";
        }
        searchedCities.innerHTML = showSearchHistory
    };
   
    var showSearchHistory = function() {
        var cityList = "";
        for (var i = 0; i < weatherList.length; i++) {
            showSearchHistory += "<li>" + weatherList[i] + "</li>";
        }
        searchedCities.innerHTML = showSearchHistory
    };

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
    $("#search-form").submit(function() {
        //grabs the text
        saveSearch();
        showSearchHistory();
    });



    //make the history clickable
    //take list of cities (search history) and add a click function so I you click one, it activates the getWeatherData function
    $("#searchHistory").click(function() {
        getWeatherData();
    });




});

