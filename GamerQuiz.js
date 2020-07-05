alert("Let's see how Epic of a Gamer you really are!");

var questions = [{
        prompt: "What year was the PS4 released?\n(a) 2014\n(b) 2016 \n(c) 2013 \n(d) 2015",
        answer: "c",
    },
    {
        prompt: "What does Pokemon stand for?\n(a) Pockey Masters\n(b) Pocket Monsters\n(c) Portable Monsters \n(d) Pockey Monkeys",
        answer: "b",
    },
    {
        prompt: "Nintendo originally began as a company selling what?\n(a) Toys\n(b) Hotels\n(c) Cards \n(d) Paintings",
        answer: "c",
    },
    {
        prompt: "Mario's original name was: \n(a) Mr Plumber\n(b) Robert \n(c) Marco \n(d) Jumpman",
        answer: "d",
    },
    {
        prompt: "MegaMan's name in Japan is: \n(a) Mr. Robot, \n(b) Jumpman \n(c) Rockman \n(d) Mr. Mega",
        answer: "c",
    },
    {
        prompt: "Both Half-Life and Portal were created by: \n(a) Activision \n(b) Valve \n(c) Bethesda \n(d) Electronic Arts",
        answer: "b",
    },
    {
        prompt: "Who created the Super Smash Brothers series? \n (a) Shigeru Miyamoto \n (b) Satoru Iwata \n (c) Masahiro Sakurai \n (d) Hideki Kamiya",
        answer: "c",
    },
    {
        prompt: "The franchise Dark Souls was directly inspired by which series: \n(a) Castlevania \n(b) Legend of Zelda \n(c) The Elder Scrolls \n(d) Monster Hunter",
        answer: "b",
    },
    {
        prompt: "In the Halo series what is the name of the alien race who is the antagonist in the trilogy: \n(a) Forerunners \n(b) Flood \n(c) Covenant \n(d) Brutes",
        answer: "c",
    },
    {
        prompt: "Sega's most recent console is: \n(a) 32x \n(b) Genesis \n(c) Saturn \n(d) Dreamcast ",
        answer: "d",
    },
];

var totalScore = 0;

for (var i = 0; i < questions.length; i++) {
    var userResponse = window.prompt(questions[i].prompt);

    if (userResponse == questions[i].answer) {
        totalScore++;
        alert("You got it nice!");
    } else {
        alert("Incorrect!");
    }
}

alert(
    "Your total score on this quiz was " + totalScore + " out of " +
    questions.length + " questions."
);

document.write("<h1>Thanks for playing the Epic Gamer Quiz!</h1> \n");

if (totalScore >= questions.length) {
    document.write(
        "<h1>Wow you managed to get a perfect high score on the Epic Gamer Quiz, heck yeah Gamer!</h1>"
    );
} else if (totalScore == 0) {
    document.write(
        "<h1>You also didn't get any Epic Gamer Questions correct, time to grind!</h1>"
    );
} else {
    document.write("<h1>Nice looks like you are quite an Epic Gamer</h1>");
}