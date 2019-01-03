var content = {
    
    
    headerOne: function(){
    
        setTimeout(function(){
        
            $("#main-header-one").text("Hey, it's");
            $("#main-header-one").addClass("animated bounceIn hvr-grow-rotate");
            

            console.log("hey"); // test
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

            $("#main-header-seven").text("Key Specialties:");
            $("#main-header-seven").addClass("animated bounceIn");

        }, 2300)
    },
    icons: function(){
        setTimeout(function(){
            $("#html-container").html("<i id='html5'></i>");
            $("#html5").addClass("fab fa-html5 fa-3x html-icon animated flipInY");
            $("#html-container").append("<i id='css3'></i>");
            $("#css3").addClass("fab fa-css3-alt fa-3x css-icon animated flipInY");
            $("#html-container").append("<i id='js'></i>");
            $("#js").addClass("fab fa-js fa-3x js-icon animated flipInY");
            $("#html-container").append("<i id='node'></i>");
            $("#node").addClass("fab fa-node fa-3x node-icon animated flipInY");
        }, 2500)

    },
    headerEight: function(){
        
        setTimeout(function(){

            $("#main-header-eight").text("I am proficient in the language of HTML5, CSS3, JS & jQuery and Node.JS");
            $("#main-header-eight").addClass("animated bounceIn");

        }, 2700)
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
            $("#pic-dump3").html("<img src='date.jpg' id='icon3'>");
            $("#icon3").addClass("animated bounceIn");
        }, 2300)
    },

    iconFour: function() {
        setTimeout( function() {
            $("#pic-dump4").html("<img src='simpsons.jpg' id='icon4'>");
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
    
    jQuery.noConflict();
    
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Dex Taux");
    $("#sample-dump").html("<img src='store.png' class='work1'>");
    $("#desc-dump").append("E-commerce app that takes in customer's log-in information, orders and testimonials. The mobile app sorts it's products by price, category and designer.");
    $("#link-dump").html("<button class='btn btn-dark'><a href='https://frozen-atoll-67387.herokuapp.com/' id='link'>Click Me</a></button>");
    });
});

$(function () {
  
    $("#pic-dump2").on("click", function (event) {
      
    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#button-dump").empty();
    
    jQuery.noConflict();
    
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Dream Job Finder");
    $("#sample-dump").html("<img src='job.png' class='work2'>");
    $("#desc-dump").append("Searches multiple job APIs for user input and displays that information in an accessible way. It also searches twitter for the latests tweets about potential employers. It provides a link where you can actually apply. Searches a news API for the latest job related news and displays links to various articles.");
    $("#link-dump").html("<button class='btn btn-dark'><a href='https://martinjurado.github.io/DreamJob-Finder/' id='link'>Click Me</a></button>");
    });
});

$(function () {

    $("#pic-dump3").on("click", function(event) {

    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#button-dump").empty();
    
    jQuery.noConflict();
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Celebrity Dating App");
    $("#sample-dump").html("<img src='friend.gif' class='work3'>");
    $("#desc-dump").append("A Celebrity Dating App with full-stack features that takes in the results of the user, and matches the answer with an existing user. Then, it will display the name and picture of the best-matched user");
    $("#link-dump").html("<button class='btn btn-dark'><a href='https://arcane-retreat-18762.herokuapp.com/' id='link'>Click Me</a></button>");

    });
});

$(function () {

    $("#pic-dump4").on("click", function(event) {

    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#button-dump").empty();
    
    jQuery.noConflict();
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("The Simpsons-themed crystal game.");
    $("#sample-dump").html("<img src='crystal.png' class='work4'>");
    $("#desc-dump").append("There will be four donuts displayed as buttons on the page on the bottom part of the application. The player will be shown a random number at the start of the game. Match the random number as you click on the donuts. This game automatically resets once you win or lose. This game was developed through the use of jQuery and JavaScript.");
    $("#link-dump").html("<button class='btn btn-dark'><a href='https://martinjurado.github.io/Crystal-Game-Week4/' id='link'>Click Me</a></button>");

    });
});

$(function () {

    $("#pic-dump5").on("click", function(event) {

    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#button-dump").empty();
    
    jQuery.noConflict();
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("Friends Trivia Game");
    $("#sample-dump").html("<img src='friends-trivia.png' class='work4'>");
    $("#desc-dump").append("A friends-themed trivia game that allows user to answer questions with a timer.");
    $("#link-dump").html("<button class='btn btn-dark'><a href='https://martinjurado.github.io/TriviaGame-Week5/' id='link'>Click Me</a></button>");

    });
});

$(function () {

    $("#pic-dump6").on("click", function(event) {

    event.preventDefault;
    
    $("#project-modal").empty();
    $("#sample-dump").empty();
    $("#desc-dump").empty();
    $("#button-dump").empty();
    
    jQuery.noConflict();
    $("#portfolio-modal").modal("toggle");
    $("#project-modal").append("");
    $("#sample-dump").html("<img src='stranger.png' class='work5'>");
    $("#desc-dump").append("Stranger Things-themed hangman. Guess the word or be doomed in the upside down.");
    $("#link-dump").html("<button class='btn btn-dark'><a href='https://martinjurado.github.io/WordGuessingGame/' id='link'>Click Me</a></button>");

    });
});



