var apiKey = require('./../.env').apiKey;


//This is an object. Refer to line 7 of weather-interface.js
exports.Weather = function(){
};

//This is prototype of Weather Object. line 5...Look up!
exports.Weather.prototype.getWeather = function(city) {
  //Line 11 is an API request
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {

    //Line 14 is an API response
    $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};
