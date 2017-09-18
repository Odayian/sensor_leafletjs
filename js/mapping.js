/*global L*/



var mymap = L.map('mapid').setView([39.285586, -76.739019], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoib2RheWlhbiIsImEiOiJjajdxOXRxcHQyYWtjMzNycmlwOXlvcHdiIn0.sE3L5fLj9019VUCUJ3WDzA'
}).addTo(mymap);

var radioShop = L.marker([39.285586, -76.739019]).addTo(mymap);
radioShop.bindPopup("SHA Radio Shop <br> -Extra info here-");

var radioShopLot = L.marker([39.30, -76.8]).addTo(mymap);
radioShopLot.bindPopup("SHA Lot <br> -Extra info here-");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at<br>" + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);