$(document).ready(function () {

    var trivia = [{
        question: "Which is the official distilled spirit of the United States?",
        choices: ["Rum", "Gin", "Bourbon", "Brandy"],
        answerIndex: 2,
        answerInfo: "Bourbon Whiskey, named after Bourbon County, Kentucky, is the official distilled spirit of the United States."
    }, {
        question: "What is the strongest any alcohol can be?",
        choices: ["60 proof", "70 proof", "120 proof", "190 proof"],
        answerIndex: 3,
        answerInfo: "190 proof is about 95% alcohol. At higher proof, the alcohol draws moisture from the air and self-dilutes."
    }, {
        question: "In the 1800s, which alcohol was used to clean hair?",
        choices: ["Tequila", "Gin", "Rum", "Whiskey"],
        answerIndex: 2,
        answerInfo: "In the 1800s, people cleaned their hair with rum to maintain its health; they also applied brandy to strengthen the roots."
    }, {
        question: "What is a martini mixed with tequila instead of dry gin called?",
        choices: ["Tequini", "Long Island Iced Tea", "Mexquini", "Dirty Martini"],
        answerIndex: 0,
        answerInfo: "It's a Tequini!"
    }, {
        question: "Vodka is Russian for what?",
        choices: ["Spirit", "Little Water", "Alcohol", "God of Love"],
        answerIndex: 2,
        answerInfo: "Vodka is Russian for grain spirits that haven’t been flavored. It means \"little water.\""
    }, {
        question: "What is the biggest driving factor in the cost of alcohol?",
        choices: ["Taxes", "Production", "Marketing", "Distribution"],
        answerIndex: 0,
        answerInfo: "Heavy taxes more than double the price of a typical bottle of whiskey, rum or other distilled spirits."
    }, {
        question: "When first made, distilled spirits are which color?",
        choices: ["Red", "Pink", "Clear (no color)", "Brown"],
        answerIndex: 2,
        answerInfo: "When first made, distilled spirits are completely clear. They get their colors from the aging process in oak barrels."
    }, {
        question: "Which U.S. president’s wife started her happy hour at 3:00 pm?",
        choices: ["Mary Todd Lincoln", "Martha Washington", "Pat Nixon", "Michelle Obama"],
        answerIndex: 1,
        answerInfo: "George Washington’s wife, Martha Washington."
    }, {
        question: "Which alcohol is considered a diuretic?",
        choices: ["Gin", "Vodka", "Rum", "Scotch"],
        answerIndex: 0,
        answerInfo: "Gin is a mild diuretic which helps the body get rid of excessive fluid, water retention."
    }, {
        question: "How many milliliters of pure alcohol make up one alcoholic unit?",
        choices: ["5ml", "10ml", "50ml", "25ml"],
        answerIndex: 1,
        answerInfo: "10ml"
    }, {
        question: "Which of these drinks contains more alcohol units?",
        choices: ["Pint of Stout", "Pint of Lager", "Pint of Ale", "Large Glass of Wine"],
        answerIndex: 3,
        answerInfo: "A large glass of wine (~250ml) contains 3.3 units. A pint of ale contains 3 units and a pint of lager has 2."
    }, {
        question: "Which one of these wine grapes is white?",
        choices: ["Riesling", "Syrah", "Cabernet Sauvignon", "Malbec"],
        answerIndex: 0,
        answerInfo: "Riesling is a white grape."
    }, {
        question: "Which of these is NOT a brand of rum?",
        choices: ["Bacardi", "Malibu", "Tanqueray", "Appleton"],
        answerIndex: 2,
        answerInfo: "Tanqueray is a brand of Gin."
    }, {
        question: "What is the volume of a standard bottle of wine?",
        choices: ["0.5 liters", "1 liter", "0.75 liters", "0.85 liters"],
        answerIndex: 2,
        answerInfo: "A standard bottle of wine is 0.75 liters or 750 milliliters."
    }, {
        question: "Which two types of alcohol are used to make Sex on the Beach?",
        choices: ["Vodka and Peach Schnapps", "Gin and Vermouth", "Rum and Grand Marnrier", "Vodka and Brandy"],
        answerIndex: 0,
        answerInfo: "\"Sex on the Beach\" is a cocktail containing vodka, peach schnapps, orange juice and cranberry juice."
    }, {
        question: "Which alcohol was exempt from Prohibition laws when prescribed by a doctor or sold in pharmaceutical stores?",
        choices: ["Gin", "Whiskey", "Scotch", "Rum"],
        answerIndex: 1,
        answerInfo: "During the Prohibition era, the U.S. government's ban on alcohol sales did not include whiskey prescribed by a doctor and sold in pharmacies. This exemption was one of the chief reasons behind the exponential growth of the Walgreens pharmacy chain, which stocked whiskey and grew from 20 stores at the start of Prohibition to almost 400 stores in 1930."
    }, {
        question: "What is the average number of grapes required to produce one bottle of wine?",
        choices: ["300", "600", "1200", "900"],
        answerIndex: 1,
        answerInfo: "On average, it takes about 600 grapes to make a bottle of wine."
    }, {
        question: "A bottle of champagne contains approximately how many bubbles?",
        choices: ["10,000", "49,000,000", "16,000,000", "100,000"],
        answerIndex: 1,
        answerInfo: "According to Beekmanwine.com, scientist Bill Lembeck calculated about 49 million. Who has time to count all these bubbles, right?"
    }, {
        question: "Which U.S. General drank alcohol on the job while leading his troops?",
        choices: ["Ulysses S. Grant", "George Washington", "Dwight Eisenhower", "Robert E. Lee"],
        answerIndex: 0,
        answerInfo: "President Lincoln learned that General Grant drank whiskey while leading his troops. Lincoln reportedly ordered \"Find out the name of the brand so I can give it to my other generals.\""
    }, {
        question: "Prior to 2009, which country permitted drunk driving as a legal excuse for car accidents?",
        choices: ["Colombia", "Brazil", "Chile", "Uruguay"],
        answerIndex: 3,
        answerInfo: "Prior to 2009 drunk driving was considered a legal excuse for a car accident in Uruguay."
    }, {
        question: "How much beer is consumed annually in the U.S.?",
        choices: ["10.5 million", "1.2 billion", "500,000", "6.3 billion"],
        answerIndex: 3,
        answerInfo: "6.3 billion gallons of beer are consumed annually in the US.  New Hampshire comes in first with 43 gallons per person; Utah is last with 19 gallons per person."
    }];

    var correctAnswers = null;
    var incorrectAnswers = null;
    var intervalId = null;
    var messages = {
        correct: ["Correct!", "Bingo!", "You got it!", "Sweet, right answer!", "Right on!", "You're good at this!", "Impressive!", "Nice!", "Correctomundo!", "Yes, sir!"],
        incorrect: ["Oops, wrong answer!", "Nope, that's not it.", "Sorry, that's incorrect", "Incorrecto!", "Um, yeah, that's not the right answer.", "No, señor. Estás equivocado."],
        timeOver: "Time is up!",
        gameOver: ["Awesome, you're done!", "Great job, you're finished!", "All done! Excellent!", "Trivia complete! Well done!"]
    };
    var seconds = null;
    var triviaIndex = null;
    var userChoice = null;

    // Start Page Function
    function renderStartPage() {

        var button = $("<button>");
        var rules = "This is a fun liquor trivia game for all you responsible drinkers! <p>There are a total of 21 questions. Go ahead, give it a shot!</p> <p>Press the big <strong>START</strong> button up above to play.</p> Cheers!"

        button.addClass("startButton").text("START");
        $("#start").append(button);
        $("#intro").addClass("intro").text("Welcome!");
        $("#rules").addClass("rules").html(rules);

    };

    // Trivia Page Function
    function renderTriviaPage() {

        clearPage(); // Clears all elements

        seconds = 15;

        $("#triviaTime").addClass("time");
        $("#question").addClass("question");
        $("#choices").addClass("choices")
        $("#triviaTime").html("Time Remaining: " + seconds + " seconds");
        $("#question").html((triviaIndex + 1) + ") " + trivia[triviaIndex].question);

        for (let i = 0; i < 4; i++) {

            var button = $("<button>");
            var div = $("<div>");

            button.addClass("buttons");
            button.val(i);
            button.text(trivia[triviaIndex].choices[i]);
            div.append(button);

            $("#choices").append(div);

        };

        // Testing
        console.log("[Before Timer] triviaIndex = " + triviaIndex);

        runTimer(); // Sets off 15 second timer

        $(".buttons").on("click", function() {
            
            userChoice = $(this).val();

            // Testing
            console.log("UserChoice = " + userChoice);

            clearInterval(intervalId);
            renderAnswerPage();

        });

    };

    function renderAnswerPage() {

        clearPage(); // Clears all elements

        var answer = trivia[triviaIndex].answerIndex;

        // Testing
        console.log("[AnswerPage] Answer = " + answer);

        $("#triviaTime").addClass("time");
        $("#message").addClass("message");
        $("#correctAnswer").addClass("answerInfo");
        $("#answerInfo").addClass("answerInfo");
        $("#triviaTime").html("Time Remaining: " + seconds);;

        if (userChoice == trivia[triviaIndex].answerIndex) {
            correctAnswers++;
            var correctMessage = messages.correct[Math.floor(Math.random() * messages.correct.length)];
            $("#message").text(correctMessage);
            $("#answerInfo").text(trivia[triviaIndex].answerInfo);
        }
        else {
            incorrectAnswers++;
            var incorrectMessage = messages.incorrect[Math.floor(Math.random() * messages.incorrect.length)];
            $("#message").text(incorrectMessage);
            $("#correctAnswer").html('The correct answer was: <strong>' + trivia[triviaIndex].choices[answer] + '</strong>');
            $("#answerInfo").html('<strong>' + trivia[triviaIndex].answerInfo + '</strong>');
        }

        if (triviaIndex == (triviaIndex.length - 1)) {
            setTimeout(renderConclusionPage, 3000);
        }
        else {
            userChoice = null;
            triviaIndex++;
            setTimeout(renderTriviaPage, 3000);
        }
    };

    function renderConclusionPage() {

        clearPage(); // Clears all elements

        var button = $("<button>");
        var correct = '<p>Correct Answers: <strong>' + correctAnswers + '</strong></p>';
        var farewell = messages.gameOver[Math.floor(Math.random() * messages.gameOver.length)];
        var incorrect = '<p>Incorrect Answers: <strong>' + incorrectAnswers + '</strong></p>';
        var totalAnswered = correctAnswers + incorrectAnswers;
        var unanswered = '<p>Unanswered: <strong>' + (21 - totalAnswered) + '</strong></p>';
        var results = correct + incorrect + unanswered; 


        button.addClass("startButton").text("START OVER?");
        $("#finalMessage").addClass("message").text(farewell);
        $("#results").addClass("answerInfo");
        $("#results").append(results);
        $("#restart").html(button);

    };

    function clearPage() {

        $("#start").empty();
        $("#intro").empty();
        $("#rules").empty();
        $(".rules").empty();
        $("#triviaTime").empty();
        $("#question").empty();
        $("#choices").empty();
        $("#message").empty();
        $("#correctAnswer").empty();
        $("#answerInfo").empty();
        $("#finalMessage").empty();
        $("#results").empty();
        $("#restart").empty();

    };

    function runTimer() {

        clearInterval(intervalId);
        seconds = 15;
        intervalId = setInterval(displayTimer, 1000);
    };

    function displayTimer() {

        $("#triviaTime").addClass("time");
        $("#triviaTime").html("Time Remaining: " + seconds);
        seconds--;

        if (seconds === 0) {
            number = 15; // Timer reset
            renderAnswerPage();
        }
      }
  
    renderStartPage();

    $(document).on("click", ".startButton", function() {

        correctAnswers = 0;
        incorrectAnswers = 0;
        triviaIndex = 0;

        console.log("[Start] TriviaIndex: " + triviaIndex);

        renderTriviaPage();

    });

    $(document).on("click", ".buttons", function() {

        renderAnswerPage();
    });

});
