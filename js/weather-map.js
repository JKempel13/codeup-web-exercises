"use strict";
$(document).ready(function(){
    //======================== cycle through 3 days =========================
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyToken +"/29.4241,-98.4936").done(function(data) {
        console.log(data.daily);

        var forecast = "";
        $('#blah').html(function(){
            for (var i = 0;i < 3;i++){
                var highTemp = data.daily.data[i].apparentTemperatureHigh + '<span>&#176;</span>';
                var lowTemp = data.daily.data[i].apparentTemperatureLow + '<span>&#176;</span>';
                var icon = data.daily.data[i].icon;
                var humidity = data.daily.data[i].humidity;
                var windSpeed = data.daily.data[i].windSpeed;
                var pressure = data.daily.data[i].pressure;

                forecast+="<div class='card col-4'>";
                forecast+="<h4>" + highTemp + "/" + lowTemp +"</h4>";
                forecast+="<p>"+ icon +"</p>";
                forecast+="<p><span style='font-weight: bold'>Humidity: </span>"+ humidity +"</p>";
                forecast+="<p><span style='font-weight: bold'>Wind: </span>"+ windSpeed +"</p>";
                forecast+="<p><span style='font-weight: bold'>Pressure: </span>"+ pressure +"</p>";
                forecast+="</div>";
            }
            return forecast;
        })

    });

    //============= weather icon array =======================
    var icons = [
        {

        }
    ]


    //====================== my map ====================
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

});