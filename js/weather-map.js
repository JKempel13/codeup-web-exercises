"use strict";
$(document).ready(function() {
    //======================== cycle through 3 days =========================
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/29.4241,-98.4936").done(function (data) {
        console.log(data.daily);
        var forecast = "";
        $('#blah').html(function () {
            for (var i = 0; i < 3; i++) {
                var highTemp = data.daily.data[i].apparentTemperatureHigh + '<span>&#176;</span>';
                var lowTemp = data.daily.data[i].apparentTemperatureLow + '<span>&#176;</span>';
                var weatherIcon = data.daily.data[i].icon;
                var humidity = data.daily.data[i].humidity;
                var windSpeed = data.daily.data[i].windSpeed;
                var pressure = data.daily.data[i].pressure;
                var dateObject = new Date(data.daily.data[i].time * 1000);
                console.log(dateObject.toString());

                forecast += "<div class='card col-4'>";
                forecast += "<h4>" + highTemp + "/" + lowTemp + "</h4>";
                forecast += "<img src='" + displayIconPicture(iconsArr, weatherIcon) + "'>";
                forecast += "<p>" + weatherIcon + "</p>";
                forecast += "<p><span style='font-weight: bold'>Humidity: </span>" + humidity + "</p>";
                forecast += "<p><span style='font-weight: bold'>Wind: </span>" + windSpeed + "</p>";
                forecast += "<p><span style='font-weight: bold'>Pressure: </span>" + pressure + "</p>";
                forecast += "<p><span style='font-weight: bold'>Date: </span>" + dateObject + "</p>";
                forecast += "</div>";
            }
            return forecast;

        })
        });

        //============= weather icon array function=======================

        var iconsArr = [

            {
                link: "img/SVG/Sun.svg",
                name: "clear-day"
            },
            {
                link: "img/SVG/Moon-Full.svg",
                name: "clear-night"
            },
            {
                link: "img/SVG/CLoud-Rain.svg",
                name: "rain"
            },
            {
                link: "img/SVG/Snowflakes.svg",
                name: "snow"
            },
            {
                link: "img/SVG/Cloud-Hail.svg",
                name: "sleet"
            },
            {
                link: "img/SVG/Wind.svg",
                name: "wind"
            },
            {
                link: "img/SVG/Cloud-Fog.svg",
                name: "fog"
            },
            {
                link: "img/SVG/Cloud.svg",
                name: "cloudy"
            },
            {
                link: "img/SVG/Cloud-Sun.svg",
                name: "partly-cloudy-day"
            },
            {
                "link": "img/SVG/Cloud-Moon.svg",
                name: "partly-cloudy-night"
            }
        ];

        //============== display icons =================
        function displayIconPicture(iconsArr, weatherIcon) {
            for (var j = 0; j < iconsArr.length; j++) {
                if (iconsArr[j].name === weatherIcon) {
                    return iconsArr[j].link;
                }
            }
        }

        //====================== my map ====================

    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
        center: [-98.4916, 29.4252], // starting position
        zoom: 10 // starting zoom
    });

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();

    }

    marker.on('dragend', onDragEnd);

        //=============== update map after input
        // $("#update-map-btn").click(function(){
        //     //    assign the value from the input into a variable
        //     //    log what the value is
        //     var newLocation = $('.goAnywhere').val();
        //     //    change the span with #color to the correct text
        //    //
        //     $('#blah').html(newLocation);
        // });
});
