/*global firebase*/
/*global L*/
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZsQKrFFmWbj7rd4eayrXqBwTzfRRhBb4",
    authDomain: "rpuid-f2495.firebaseapp.com",
    databaseURL: "https://rpuid-f2495.firebaseio.com",
    projectId: "rpuid-f2495",
    storageBucket: "",
    messagingSenderId: "140299848934"
};

firebase.initializeApp(config);

var database = firebase.database();
