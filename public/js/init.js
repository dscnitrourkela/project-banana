jQuery(document).ready( function( $ ) {

     // Firebase configuration
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

        $("form").submit(function(){

            // console.log('Aaa');
            var Contact = document.getElementById('contact').value;
            var Desc = document.getElementById('desc').value;
            var Name = document.getElementById('name').value;
            var Stack = document.getElementById('stack').value;
            var Title = document.getElementById('title').value;

            var today = new Date();
            var now = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            var id = Title.toLowerCase().replace(/ /g, "-");

            id = id + ':' + now.toString();

        firebase.database().ref('ideas/' + id).set({
            contact: Contact,
            date: now,
            desc: Desc,
            name: Name,
            stack: Stack,
            title: Title
          }, function(error) {
            if (error) {
              alert('Could not save data...');
            } else {
              alert('Idea successfully submitted...');
            }
            window.location.reload();
          });
        return false;
        });
    

});
