var content = {
    
    
    headerOne: function(){
    
        setTimeout(function(){
        
            $("#main-header-one").text("Hey, it's");
            $("#main-header-one").addClass("animated bounceIn hvr-grow-rotate");
            
        },1000); // 3 seconds
    },

    headerTwo: function(){

        setTimeout(function(){

            $("#main-header-two").text("MARTIN.");
            $("#main-header-two").addClass("animated bounceIn");
            // $("#main-header-one").append("<i class='fas fa-laptop-code fa-1x laptop'>" + "</i>" );

        }, 1200);
    },

    headerThreetwo: function(){

        setTimeout(function(){

            $("#main-header-threetwo").text("H O M E");
            $("#main-header-threetwo").addClass("animated bounceIn");
            $(".work-link").addClass("hvr-hang");

        }, 1400);
    },

    headerThree: function(){

        setTimeout(function(){

            $("#main-header-three").text("W O R K");
            $("#main-header-three").addClass("animated bounceIn");
            $(".work-link").addClass("hvr-hang");

        }, 1500);
    },

    headerFour: function() {
        setTimeout(function(){

            $("#main-header-four").text("A B O U T");
            $("#main-header-four").addClass("animated bounceIn");
            $(".me-link").addClass("hvr-hang");

        }, 1700);
    },

    headerFive: function() {
        setTimeout(function(){
            
            $("#main-header-five").text("Full-Stack Web Developer based in New Jersey.");
            $("#main-header-five").addClass("animated bounceIn");

        }, 1800);
    },

    headerSix: function() {
        setTimeout(function(){
            
            $("#main-header-six").text("I design responsive & visually appealing websites.");
            $("#main-header-six").addClass("animated bounceIn");

        }, 1900);
    },
    button: function(){
        setTimeout(function(){
            $(".link2gmail").html("<button id='work-btn'>" + "Work with me" + " <i class='far fa-envelope'>" + 
            "</button>");
            $(".fa-envelope").addClass("hvr-icon");
            $("#work-btn").addClass("btn btn-outline-primary animated bounceIn");
            
        }, 2000)
    },

    martinPic: function(){
        setTimeout(function(){
            
            $("#pic-container").html("<img src='martin1.jpg' id='me'>");
            $("#me").attr("class","hvr-bounce-in animated flipInY");
        }, 2100)
    },

    headerSeven: function(){
        setTimeout(function(){

            $("#main-header-seven").text("About Me:");
            $("#main-header-seven").addClass("animated bounceIn");

        }, 2300)
    },

    headerEight: function(){
        
        setTimeout(function(){

            $("#main-header-eight").text("Full-stack web developer that has an eye for detail and design. I am highly skilled in building aesthetically creative and mobile-responsive applications. What sparks my interest is being able to solve difficult problems and providing value to clients through my work.");
            $("#main-header-eight").addClass("animated bounceIn");

        }, 2700)
    },

    headerMe: function(){
        setTimeout(function() {

            $("#me-content").text("Key Specialties:");
            $("#me-content").addClass("animated bounceIn");

        }, 2300)
    },

    headerDesc: function(){
        setTimeout(function() {
            $("#me-desc").text("Front-End: React.js, Javasript, jQuery, Materialize.css, Bootstrap");
            $("#me-desc2").text("Back-End: Node.js, RESTful API, SQL, MongoDB, MVC framework")
            $("#me-desc").addClass("animated bounceIn");
            $("#me-desc2").addClass("animated bounceIn");
        }, 2700)
    },


    icons: function(){
        setTimeout(function(){
            $("#html-container").html("<i id='html5'></i>");
            $("#html5").addClass("fab fa-react fa-3x html-icon animated flipInY");
            $("#html-container").append("<i id='css3'></i>");
            $("#css3").addClass("fab fa-css3-alt fa-3x css-icon animated flipInY");
            $("#html-container").append("<i id='js'></i>");
            $("#js").addClass("fab fa-js fa-3x js-icon animated flipInY");
            $("#html-container").append("<i id='node'></i>");
            $("#node").addClass("fab fa-node-js fa-3x node-icon animated flipInY");
        }, 2500)

    },

    headerNine: function(){
        
        setTimeout( function() {
            
            $("#main-header-nine").text("Here's a Portfolio of my Work Currated by Me.");
            $("#main-header-nine").addClass("animated bounceIn");
        }, 1800)
    },
    
    headerTen: function(){
        
        setTimeout( function() {
            
            $("#main-header-ten").text("They are all made responsive and mobile-friendly.");
            $("#main-header-ten").addClass("animated bounceIn");
        }, 2000)
    },

    iconOne: function() {
        setTimeout( function() {
            $("#pic-dump1").html("<img src='one.jpg' id='icon1'>");
            $("#icon1").addClass("animated bounceIn");
        }, 2100)
    },

    iconTwo: function() {
        setTimeout( function() {
            $("#pic-dump2").html("<img src='blog.png' id='icon2'>");
            $("#icon2").addClass("animated bounceIn");
        }, 2200)
    },

    iconThree: function() {
        setTimeout( function() {
            $("#pic-dump3").html("<img src='hotel.jpg' id='icon3'>");
            $("#icon3").addClass("animated bounceIn");
        }, 2300)
    },

    iconFour: function() {
        setTimeout( function() {
            $("#pic-dump4").html("<img src='date.jpg' id='icon4'>");
            $("#icon4").addClass("animated bounceIn");
        }, 2400)
    },

    iconFive: function() {
        setTimeout( function() {
            $("#pic-dump5").html("<img src='trivia.jpg' id='icon5'>");
            $("#icon5").addClass("animated bounceIn");
        }, 2500)
    },

    iconSix: function() {
        setTimeout( function() {
            $("#pic-dump6").html("<img src='strangerthings.jpg' id='icon6'>");
            $("#icon6").addClass("animated bounceIn");
        }, 2600)
    }
}


$(document).ready(function(){
content.headerOne();
content.headerTwo();
content.headerThree();
content.headerThreetwo();
content.headerFour();
content.headerFive();
content.headerSix();
content.button();
content.martinPic()
content.headerSeven();
content.headerMe();
content.headerDesc();
content.icons();
content.headerEight();
content.headerNine();
content.headerTen();
content.iconOne();
content.iconTwo();
content.iconThree();
content.iconFour();
content.iconFive();
content.iconSix();
});

// Modal Function

$(function () {
  
    $("#pic-dump1").on("click", function (event) {
      
    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#button-dump").empty();
    $("#tech-dump").empty();
    
    jQuery.noConflict();
    
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("E-Commerce Store " + "<i class='fas fa-laptop'></i>");
    $("#sample-dump").html("<img src='store.png' class='work1'>");
    $("#desc-dump").append("E-commerce app that displays items through a database and incorporates full CRUD capabilities." +
     " This app incorporates the MVC framework. It is divided into two parts namely customer view and supervisor view.");
    $("#tech-dump").append("jQuery, Bootstrap, Handlebars, Passport.js, Node.js, Express, MySQL ")
    $("#link-dump").html("<button type='button' class='btn btn-primary'><a href='https://frozen-atoll-67387.herokuapp.com/' id='link' target='_blank'>Click Me</a></button>");
    });
});

$(function () {
  
    $("#pic-dump2").on("click", function (event) {
      
    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#button-dump").empty();
    $("#tech-dump").empty();
    
    jQuery.noConflict();
    
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Dream Job Finder " + "<i class='fas fa-laptop'></i>");
    $("#sample-dump").html("<img src='job.png' class='work2'>");
    $("#desc-dump").append("Searches multiple job APIs for user input and displays that information in an accessible way. It also searches twitter for the latests tweets about potential employers. It provides a link where you can actually apply. Searches a news API for the latest job related news and displays links to various articles.");
    $("#tech-dump").append("jQuery, Bootstrap, 3rd Party API, Github Jobs API, Authentic Jobs API, Twitter API, News API")
    $("#link-dump").html("<button type='button' class='btn btn-primary'><a href='https://martinjurado.github.io/DreamJob-Finder/' id='link' target='_blank'>Click Me</a></button>");
    });
});

$(function () {

    $("#pic-dump3").on("click", function(event) {

    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#link-dump").empty();
    $("#tech-dump").empty();
    
    jQuery.noConflict();
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Trip Pal " + "<i class='fas fa-laptop'></i>");
    $("#sample-dump").html("<img src='react.png' class='work3'>");
    $("#desc-dump").append("Trip Pal is an application that caters to many of our user's travel needs in one place." + 
    " It is designed to provide a place where users can store all of their travel information in an itinerary which can be updated to keep up with any last minute changes." +
    " Users can also store their travel photos in albums and search for airport weather, flight status and hotels.");
    $("#tech-dump").append("React.js, Redux, HTML, React-Materialize, Javascript, MongoDB/Mongoose, Firebase (User Authentication), " +
    " Express, Axios, 3rd Party API (Flight Stats & Mak Corps), Moment.js, Google Fonts, Font Awesome");
    $("#link-dump").html("<button type='button' class='btn btn-primary'><a href='https://boiling-sea-88261.herokuapp.com/' id='link' target='_blank'>SAMPLE</a></button>");
    
    });
});

$(function () {

    $("#pic-dump4").on("click", function(event) {

    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#link-dump").empty();
    $("#tech-dump").empty();
    
    jQuery.noConflict();
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Celebrity Dating App " + "<i class='fas fa-laptop'></i>");
    $("#sample-dump").html("<img src='friend.gif' class='work4'>");
    $("#desc-dump").append("A Celebrity Dating App with full-stack features that takes in the results of the user, and matches the answer with an existing user." +
    " Then, it will display the name and picture of the best-matched user");
    $("#tech-dump").append("jQuery, Bootstrap, AJAX calls (Get, Post), Node.js, Express")
    $("#link-dump").html("<button type='button' class='btn btn-primary'><a href='https://arcane-retreat-18762.herokuapp.com/' id='link' target='_blank'>SAMPLE</a></button>");
    });
});

$(function () {

    $("#pic-dump5").on("click", function(event) {

    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#link-dump").empty();
    $("#tech-dump").empty();
    
    jQuery.noConflict();
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Friends Trivia Game " + "<i class='fas fa-laptop'></i>");
    $("#sample-dump").html("<img src='friends-trivia.png' class='work4'>");
    $("#desc-dump").append("A friends-themed trivia game that allows user to answer questions with a timer.");
    $("#tech-dump").append("jQuery, Bootstrap, Node.js, Express, AJAX calls (Get, Post)")
    $("#link-dump").html("<button type='button' class='btn btn-primary'><a href='https://martinjurado.github.io/TriviaGame-Week5/' id='link' target='_blank'>Click Me</a></button>");

    });
});

$(function () {

    $("#pic-dump6").on("click", function(event) {

    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#link-dump").empty();
    $("#tech-dump").empty();
    
    jQuery.noConflict();
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Hangman Game" + "<i class='fas fa-laptop'></i>");
    $("#sample-dump").html("<img src='stranger.png' class='work5'>");
    $("#desc-dump").append("Stranger Things-themed hangman. Guess the word or be doomed in the upside down." +
    " This application requires user to guess the name of the character with limited lives. Clues for the word are also included. The application also radomly picks words for the user.");
    $("#tech-dump").append("Javascript, Bootstrap, HTML")
    $("#link-dump").html("<button class='btn btn-dark'><a href='https://martinjurado.github.io/WordGuessingGame/' id='link'>Click Me</a></button>");

    });
});



