//  Global Variables
//============================================================================================

var time = 30;
var intervalId;

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
    $("#timeRemaining").empty();
}

function setTimer() {
    reset();
    intervalId = setInterval(count, 1000);
    $("#timeRemaining").html("<h1>Time Remaining: " + time + "</h1>");
}

function count() {
    time--;
    var converted = timeConverter(time);
    $("#timeRemaining").text(converted);
    clearInterval(intervalId);
}
  
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

function reset() {
time = 30;
}

var myObj = {
    questions : ["What kind of pet does Kevin's older brother, Buzz, have?", "The neighbor that Buzz refers to as a serial killer but ends up helping out Kevin later in the movie is referred to as...", "What is the name of the pizza company that the McCallisters always seem to order from?", "Which character in the movie is a sibling to Kevin in real life?", "Marv refers to him and Harry as the..."],
    answers : [
        ["Dog", "Turtle", "Tarantula", "Lizard"],
        ["Mr. Wilson", "Old Man Marley", "Steve", "Bob"],
        ["Papa Johns", "NY Pizza", "Little Nero's", "Little Caesars"],
        ["Fuller", "Buzz", "Megan", "Linnie"],
        ["Dumb and Dumber", "Sneaky Bandits", "Regulators", "Wet Bandits"],
    ],
    answerKey : ["Tarantula", "Old Man Marley", "Little Nero's", "Fuller", "Wet Bandits"],
    
    answerQuestion1: function() {

        // Set the timer
        setTimer();

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
        
        else if (time = 0) {
            $("#outcome").html("<h1>Time Up!</h1>");
            $("#correctAnswer").html("<h2>The correct answer was Tarantula.</h2>");
            finalUnanswered++;
        }

        else {
            $("#outcome").html("<h1>Nope!</h1>");
            finalIncorrect++;
            $("#correctAnswer").html("<h2>The correct answer was Tarantula.</h2>");
        }

        //  Clear the timer
        $("#timeRemaining").empty();

        //  Display the image
        $("#gif").html("<img src='assets/images/tarantula.gif' class='gif' />");

        //  Change to next question
        setTimeout(this.answerQuestion2, 1000 * 5);

    },

    answerQuestion2: function() {

        $("#outcome").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();

        // Set the timer
        setTimer();
        
        //  Display the question
        $("#question").text(myObj.questions[1]);

        //  Display the answsers
        for(var i = 0; i < myObj.answers[1].length; i++) {
            answers1 = $("<button>");
            answers1.addClass("answers");
            answers1.text(myObj.answers[1][i]);
            $("#answers2").append(answers1);
        }
    },

    displayOutcome2: function() {

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
            $("#correctAnswer").html("<h2>The correct answer was Old Man Marley.</h2>");
        }

        //  Clear the timer
        $("#timeRemaining").empty();

        //  Display the image
        $("#gif").html("<img src='assets/images/marley.gif' class='gif' />");

        //  Change to next question
        setTimeout(this.answerQuestion3, 1000 * 5);
    },
    
    answerQuestion3: function() {

        $("#outcome").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
        
        // Set the timer
        setTimer();

        //  Display the question
        $("#question").text(myObj.questions[2]);

        //  Display the answsers
        for(var i = 0; i < myObj.answers[2].length; i++) {
            answers1 = $("<button>");
            answers1.addClass("answers");
            answers1.text(myObj.answers[2][i]);
            $("#answers3").append(answers1);
        }
    },

    displayOutcome3: function() {

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
            $("#correctAnswer").html("<h2>The correct answer was Little Nero's.</h2>");
        }

        //  Clear the timer
        $("#timeRemaining").empty();

        //  Display the image
        $("#gif").html("<img src='assets/images/pizza.gif' class='gif' />");

        //  Change to next question
        setTimeout(this.answerQuestion4, 1000 * 5);
    },

    answerQuestion4: function() {

        $("#outcome").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
        
        // Set the timer
        setTimer();

        //  Display the question
        $("#question").text(myObj.questions[3]);

        //  Display the answsers
        for(var i = 0; i < myObj.answers[3].length; i++) {
            answers1 = $("<button>");
            answers1.addClass("answers");
            answers1.text(myObj.answers[3][i]);
            $("#answers4").append(answers1);
        }
    },

    displayOutcome4: function() {

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
            $("#correctAnswer").html("<h2>The correct answer was Fuller.</h2>");
        }

        //  Clear the timer
        $("#timeRemaining").empty();

        //  Display the image
        $("#gif").html("<img src='assets/images/fuller.gif' class='gif' />");

        //  Change to next question
        setTimeout(this.answerQuestion5, 1000 * 5);
    },

    answerQuestion5: function() {

        $("#outcome").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
        
        // Set the timer
        setTimer();

        //  Display the question
        $("#question").text(myObj.questions[4]);

        //  Display the answsers
        for(var i = 0; i < myObj.answers[4].length; i++) {
            answers1 = $("<button>");
            answers1.addClass("answers");
            answers1.text(myObj.answers[4][i]);
            $("#answers5").append(answers1);
        }
    },

    displayOutcome5: function() {

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
            $("#correctAnswer").html("<h2>The correct answer was the Wet Bandits.</h2>");
        }

        //  Clear the timer
        $("#timeRemaining").empty();

        //  Display the image
        $("#gif").html("<img src='assets/images/wetbandits.gif' class='gif' />");

        //  Change to final score
        setTimeout(this.displayFinalScore, 1000 * 5);
    },

    displayFinalScore: function() {

        //  Clear the previous data
        $("#outcome").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
        
        //  Display the results
        $("#allDone").html("<h1>All done, here's how you did!</h1>");
        $("#finalCorrect").html("<h2>Correct Answers: " + finalCorrect + "</h2>");
        $("#finalIncorrect").html("<h2>Incorrect Answers: " + finalIncorrect + "</h2>");
        $("#finalUnanswered").html("<h2>Unanswered: " + finalUnanswered + "</h2>");

        //  Restart the game
        var startover = $("<button>");
        startover.addClass("startOver");
        startover.text("Start Over?");
        $("#startOver").append(startover);
    }
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
    setTimer();
});

$("#answers").click(function() {
    $("#question").empty();
    $("#answers").empty();
    myObj.displayOutcome1();
});

$("#answers2").click(function() {
    $("#question").empty();
    $("#answers2").empty();
    myObj.displayOutcome2();
});

$("#answers3").click(function() {
    $("#question").empty();
    $("#answers3").empty();
    myObj.displayOutcome3();
});

$("#answers4").click(function() {
    $("#question").empty();
    $("#answers4").empty();
    myObj.displayOutcome4();
});

$("#answers5").click(function() {
    $("#question").empty();
    $("#answers5").empty();
    myObj.displayOutcome5();
});

$("#startOver").click(function() {
    $("#startOver").empty();
    $("#allDone").empty();
    $("#finalCorrect").empty();
    $("#finalIncorrect").empty();
    $("#finalUnanswered").empty();
    myObj.answerQuestion1();
});