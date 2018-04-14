//  Global Variables
//============================================================================================

var finalCorrect = 0;
var finalIncorrect = 0;
var finalUnanswered = 0;


//  Functions
//============================================================================================

function startGame() {
    $("#start").html("<button>");
    $("button").addClass("start-button");
    $("button").text("Start");
    
}


var myObj = {
    questions : ["What kind of pet does Kevin's older brother, Buzz, have?", "The neighbor that Buzz refers to as a serial killer but ends up helping out Kevin later in the movie is referred to as...", "What is the name of the pizza company that the McCallisters always seem to order from?", "Which character in the movie is a sibling to Kevin in real life?", "Marv refers to him and Harry as the..."],
    answers : [
        ["Dog", "Turtle", "Tarantula", "Lizard"],
        ["answer1", "Old Man Marley", "answer3", "Bob"],
        ["answer1", "answer2", "Little Nero's", "answer4"],
        ["Fuller", "answer2", "answer3", "answer4"],
        ["answer1", "answer2", "answer3", "Wet Bandits"],
    ],
    answerKey : [2,1,2,0,3],
    
    answerQuestion1: function() {
        //  Display the question
        $("#question").text(myObj.questions[0]);

        for(var i = 0; i < myObj.answers[0].length; i++) {
            var answers1 = $("<button>").text(myObj.answers[0][i]);
            $("#answers").append(answers1);
        }
    }
    
};
    console.log(myObj.answerQuestion1());


//     //  Display the answer choices
//     $("#answers").html("<button>");
//     $("button").addClass("a-button");
//     $("button").html(myObj.answers[0][0]);

//     $("#answers").append("<button>");
//     $("button").html(myObj.answers[0][1]);
    
//     $("#answers").append("<button>");
//     $("button").html(myObj.answers[0][2]);
   
//     $("#answers").append("<button>");
//     $("button").html(myObj.answers[0][3]);
// }







//  Main Process
//============================================================================================

startGame();

$("button").click(function() {
    $("#start").hide();
    myObj.answerQuestion1();
});
// answerQuestion1();