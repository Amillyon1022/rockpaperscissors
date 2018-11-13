// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
$("#userChoice").text($("#input").val());

var randomNumber= Math.random();

if(randomNumber<.333){
    $("#computerChoice").html("rock")
}

else if(randomNumber>.333){
    $("#computerChoice").html("paper")
}

});







// DOCUMENT READY FUNCTION BELOW

