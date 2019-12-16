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


// Get a reference to the database service
var database = firebase.database();
firebase.database().ref('/events').orderByChild('date').on('value', snapshot => {
    let blocks='';
    snapshot.forEach(child => {
        let event=child.val();
        let dispDate;        
        if(event.endDate){
            dispDate=moment(event.date).format('MMMM Do[-'+new Date(event.endDate).getDate()+'th] YYYY');        
        }else{
            dispDate=moment(event.date).format('MMMM Do YYYY');        
        }
        
        let block='<div class="cd-timeline__block">'+
            '<div class="cd-timeline__img cd-timeline__img--picture">'+
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 432 432"><path d="M213 109q44 0 75.5 31.5T320 216t-31.5 75.5T213 323t-75-31.5t-31-75.5t31-75.5t75-31.5zm.5-106q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3zm0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50z" fill="#626262"/></svg>'+
            '</div>'+
            '<div class="cd-timeline__content text-component">'+
                '<h2>'+event.title+'</h2>'+
                '<p class="color-contrast-medium">'+event.desc+'</p>'+
                '<div class="flex justify-between items-center">'+
                    '<span class="cd-timeline__date">'+dispDate+'</span>'+
                '</div>'+
            '</div>'+
            '</div>';  
            blocks+=block;  
    });
    $('.cd-timeline__container').html(blocks);
})