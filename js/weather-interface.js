//Link Weather with business logic page
var Weather = require('./../js/weather.js').Weather;

$(document).ready(function() {

//Objects go here.
  var humidityObject = new Weather(); //Use on line 14.


  //jQuery goes here to display result
  $('#weatherLocation').click(function() {
      var city = $('#location').val();
      $('#location').val("");
      var humidity = humidityObject.getWeather(city);
    $('.showWeather').text("The humidity in " + city + " is " + humidity + "%");
  });
});
