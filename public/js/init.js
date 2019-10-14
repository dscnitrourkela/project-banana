jQuery(document).ready( function( $ ) {

     // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB1mDD2MLmghXbxZ4YSTK61KfYKrw2xAtQ",
        authDomain: "project-banana-4822.firebaseapp.com",
        databaseURL: "https://project-banana-4822.firebaseio.com",
        projectId: "project-banana-4822",
        storageBucket: "project-banana-4822.appspot.com",
        messagingSenderId: "120654780626",
       appId: "1:120654780626:web:bb5a034a16b3ad10da350b",
        measurementId: "G-92NW0Q5WD0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // Get a reference to the database service
    var database = firebase.database();

    function saveData() {

        // get data
            var Contact = "https://github.com/dsc-nitr/";
            var Date = "2019-10-14";
            var Desc = "Interactive Map for NITR";
            var Name = "Abel Mathew";
            var Stack = "App Developement, Flutter";
            var Title = "NITR Route"

        firebase.database().ref('ideas/' + 'nitr-route').set({
            contact: Contact,
            date: Date,
            desc: Desc,
            name: Name,
            stack: Stack,
            title: Title
          }, function(error) {
            if (error) {
              // The write failed...
              console.log('Could not save data...');
            } else {
              // Data saved successfully!
              console.log('Write Successfull...');
            }
          });
    }
        

    var x = saveData();

});