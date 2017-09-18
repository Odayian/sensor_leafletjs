/*global firebase*/
/*global database*/
/*global L*/
var mymap = L.map('mapid').setView([38.92523, -77.39868], 7.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoib2RheWlhbiIsImEiOiJjajdxOXRxcHQyYWtjMzNycmlwOXlvcHdiIn0.sE3L5fLj9019VUCUJ3WDzA'
}).addTo(mymap);



var points = database.ref().child('rwis');



points.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        // key
        //var key = childSnapshot.key;
        //console.log("Key: "+key);

        var childData = childSnapshot.val();
        var coordinates = [childData.Latitude,childData.Longitude];
        var radioShop = L.marker(coordinates).addTo(mymap);
        radioShop.bindPopup(childData.CommonName+"<br>Current Temp: XX <br>Current Wind: XX <br>Pavement Temp: XX<br>"+"<a href='#'>Link</a>");

        
    });
});


// Alert pop-up coordinates onClick. 
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// mymap.on('click', onMapClick);