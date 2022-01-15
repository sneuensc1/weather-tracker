$(function () {

    //get search items from local storage. Use if to set to an empty list if null so there is always a list.
    let weatherList = localStorage.getItem("searchKeyStorage");
    if (weatherList === null) {
        weatherList = []
    } else {
        weatherList = JSON.parse(weatherList);
    }

    //set up the api info
    var getWeatherData = function () {
        //format the weather api
        var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={42.4859}&lon={83.1052}&exclude={minutely, hourly, alerts}&appid={4bfcf3f737f250cacc137acee1f02832}";
        // make a get request to url
        fetch(apiUrl).then(function(response) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            });
        });
    };
    //call the api
    getWeatherData()


    //pulls the current date and time when the page opens
    let today = new Date();
    let currentHour = today.getHours();
    $("#currentDay").text(moment().format("Do MMMM YYYY"));



    //add functionality to the search button
    $(".search-btn").submit(function() {
        //creates an empty list
        var searchList = [];

        //creates a key for setItem
        var searchListKey = "searchList";
        //setting search items into a list
        for (var i = 0; i < searchVar.length; i++) {
            searchList[i] = $(searchVar[i]).val();
        };
        //save to localStorage
        localStorage.setItem("searchKeyStorage", JSON,stringify(searchList));
    });

    //make the history clickable
    $(weatherList).click(function() {
        getWeatherData();
    });




})

