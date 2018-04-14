//  Global Variables
//============================================================================================

var finalCorrect = 0;
var finalIncorrect = 0;
var finalUnanswered = 0;


//  Functions
//============================================================================================

function startGame() {
    var start = $("<button>");
    start.addClass("start");
    start.text("Start");
    $("#start").append(start);
    $("#question").empty();
    $("#answers").empty();
}

function setTimer() {

}

// function changeSlides() {
//     setTimeout(tenSeconds, 1000 * 10);
//     myObj.answerQuestion2();
// }

var myObj = {
    questions : ["What kind of pet does Kevin's older brother, Buzz, have?", "The neighbor that Buzz refers to as a serial killer but ends up helping out Kevin later in the movie is referred to as...", "What is the name of the pizza company that the McCallisters always seem to order from?", "Which character in the movie is a sibling to Kevin in real life?", "Marv refers to him and Harry as the..."],
    answers : [
        ["Dog", "Turtle", "Tarantula", "Lizard"],
        ["answer1", "Old Man Marley", "answer3", "Bob"],
        ["answer1", "answer2", "Little Nero's", "answer4"],
        ["Fuller", "answer2", "answer3", "answer4"],
        ["answer1", "answer2", "answer3", "Wet Bandits"],
    ],
    answerKey : ["Tarantula", "Old Man Marley", "Little Nero's", "Fuller", "Wet Bandits"],
    
    answerQuestion1: function() {

        //  Display the question
        $("#question").text(myObj.questions[0]);

        //  Display the answsers
        for(var i = 0; i < myObj.answers[0].length; i++) {
            var answers1 = $("<button>");
            answers1.addClass("answers");
            answers1.text(myObj.answers[0][i]);
            $("#answers").append(answers1);
        }
    },

    displayOutcome1: function() {

        if (myObj.answers[0][2] === myObj.answerKey[0]) {
            $("#outcome").html("<h1>That is Correct!</h1>");
            finalCorrect++;
        }
        
        // else if (timer < 0) {
        //     $("#outcome").html("<h1>Nope!</h1>");
        //     finalUnanswered++;
        // }

        else {
            $("#outcome").html("<h1>Nope!</h1>");
            finalIncorrect++;
            $("#correctAnswer").html("<h2>The correct answer was Tarantula.</h2>");
        }

        $("#gif").html("<img src='assets/images/tarantula.gif' />");
    }

    // answerQuestion2: function() {

    //     //  Display the question
    //     $("#question").text(myObj.questions[1]);

    //     //  Display the answsers
    //     for(var i = 0; i < myObj.answers[1].length; i++) {
    //         var answers2 = $("<button>");
    //         answers2.addClass("answers");
    //         answers2.text(myObj.answers[1][i]);
    //         $("#answers").append(answers1);
    //     }
    // }
    
    
};
    console.log(myObj.answerQuestion1());
    console.log(myObj.answers[0][2]);
    console.log(myObj.answerKey);
    
    







//  Main Process
//============================================================================================

startGame();

$("#start").click(function() {
    $("#start").empty();
    myObj.answerQuestion1();
});

$("#answers").click(function() {
    $("#question").empty();
    $("#answers").empty();
    myObj.displayOutcome1();
});
