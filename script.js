$(function() {

    //get search items from local storage. Use if to set to an empty list if null so there is always a list.
    let weatherList = localStorage.getItem("searchKeyStorage");
    if (weatherList === null) {
        weatherList = []
    } else {
        weatherList = JSON.parse(weatherList);
    }

//pulls the current date and time when the page opens
let today = new Date();

let currentHour = today.getHours();

$("#currentDay").text(moment().format("Do MMMM YYYY"));




    //add functionality to the search button
    $(".search-btn").click(function() {
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
})

