document.addEventListener("DOMContentLoaded", function () {

    // ======================================================
    // VOCABULARY
    // ======================================================

    const levels = [

        {
            name: "Level 1",

            words: [

                {
                    word: "art",
                    definition: "A school subject where you learn to draw, paint, or make creative things.",
                    image: "images/art.png"
                },

                {
                    word: "emperor",
                    definition: "A male ruler of an empire.",
                    image: "images/emperor.png"
                },

                {
                    word: "wrap",
                    definition: "To cover something or someone with paper, cloth, or another material.",
                    image: "images/wrap.png"
                },

                {
                    word: "desert",
                    definition: "Dry land with very little rain and few plants.",
                    image: "images/desert.png"
                },

                {
                    word: "first",
                    definition: "Coming before all others; number 1.",
                    image: "images/first.png"
                },

                {
                    word: "soldier",
                    definition: "A person who serves in the army.",
                    image: "images/soldier.png"
                },

                {
                    word: "barbecue",
                    definition: "To cook food over a fire or grill.",
                    image: "images/barbecue.png"
                },

                {
                    word: "money",
                    definition: "Something we use to buy things and pay for what we need.",
                    image: "images/money.png"
                },

                {
                    word: "think",
                    definition: "To use your mind to form ideas or make decisions.",
                    image: "images/think.png"
                },

                {
                    word: "teach",
                    definition: "To help someone learn something.",
                    image: "images/teach.png"
                }

            ]
        },


        {
            name: "Level 2",

            words: [

                {
                    word: "nuts",
                    definition: "Hard fruits with a shell that you can eat, like almonds or peanuts.",
                    image: "images/nuts.png"
                },

                {
                    word: "pavement",
                    definition: "The hard path by the side of the road where people walk.",
                    image: "images/pavement.png"
                },

                {
                    word: "exciting",
                    definition: "Something that makes you feel happy, thrilled, or full of energy.",
                    image: "images/exciting.png"
                },

                {
                    word: "python",
                    definition: "A very large snake that lives in forests or jungles.",
                    image: "images/python.png"
                },

                {
                    word: "help",
                    definition: "To make something easier for someone or do something for them.",
                    image: "images/help.png"
                },

                {
                    word: "tent",
                    definition: "A portable shelter made of cloth, used for sleeping outdoors.",
                    image: "images/tent.png"
                },

                {
                    word: "hurt",
                    definition: "To feel pain or to cause pain to someone.",
                    image: "images/hurt.png"
                },

                {
                    word: "glass",
                    definition: "A hard, clear material used to make windows, cups, or bottles.",
                    image: "images/glass.png"
                },

                {
                    word: "snail",
                    definition: "A small animal with a soft body and a hard shell that moves slowly.",
                    image: "images/snail.png"
                },

                {
                    word: "brain",
                    definition: "The organ in your head that helps you think, learn, and remember.",
                    image: "images/brain.png"
                }

            ]
        }

    ];


    // ======================================================
    // GAME VARIABLES
    // ======================================================

    let currentLevel = 0;
    let currentWord = 0;
    let score = 0;
    let lives = 3;
    let shuffledWords = [];
    let level2Unlocked = false;


    // ======================================================
    // CONNECT TO HTML
    // ======================================================

    const homePage = document.getElementById("homePage");
    const gamePage = document.getElementById("gamePage");

    const level1Btn = document.getElementById("level1Btn");
    const level2Btn = document.getElementById("level2Btn");
    const backBtn = document.getElementById("backBtn");

    const levelDisplay = document.getElementById("levelTitle");
    const progress = document.getElementById("progress");

    const picture = document.getElementById("picture");
    const definition = document.getElementById("definition");
    const hint = document.getElementById("hint");

    const answer = document.getElementById("answer");
    const submitBtn = document.getElementById("submitBtn");
    const listenBtn = document.getElementById("listenBtn");

    const scoreDisplay = document.getElementById("score");
    const livesDisplay = document.getElementById("lives");
    const message = document.getElementById("message");


    // ======================================================
    // CHECK THAT HTML ELEMENTS WERE FOUND
    // ======================================================

    console.log("🌈 Word Adventure loaded!");

    console.log("Level 1 button:", level1Btn);
    console.log("Level 2 button:", level2Btn);
    console.log("Game page:", gamePage);


    // If Level 1 button cannot be found, stop and show error

    if (!level1Btn) {

        console.error(
            "ERROR: level1Btn was not found in index.html"
        );

        return;
    }


    // ======================================================
    // SHUFFLE
    // ======================================================

    function shuffle(array) {

        let result = [...array];

        for (
            let i = result.length - 1;
            i > 0;
            i--
        ) {

            let random =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                result[i],
                result[random]
            ] = [
                result[random],
                result[i]
            ];

        }

        return result;
    }


    // ======================================================
    // UPDATE LIVES
    // ======================================================

    function updateLives() {

        let hearts = "";

        for (
            let i = 0;
            i < lives;
            i++
        ) {

            hearts += "❤️ ";

        }

        for (
            let i = lives;
            i < 3;
            i++
        ) {

            hearts += "🤍 ";

        }

        livesDisplay.innerHTML = hearts;
    }


    // ======================================================
    // CREATE HINT
    // ======================================================

    function createHint(word) {

        let result =
            word[0].toUpperCase();

        for (
            let i = 1;
            i < word.length;
            i++
        ) {

            result += " _";

        }

        return result;
    }


    // ======================================================
    // START GAME
    // ======================================================

    function startGame() {

        console.log(
            "🎮 Starting " +
            levels[currentLevel].name
        );


        homePage.classList.add("hidden");

        gamePage.classList.remove("hidden");


        shuffledWords =
            shuffle(
                levels[currentLevel].words
            );


        currentWord = 0;

        lives = 3;

        updateLives();

        loadQuestion();
    }


    // ======================================================
    // LOAD QUESTION
    // ======================================================

    function loadQuestion() {

        const item =
            shuffledWords[currentWord];


        if (!item) {

            console.error(
                "No vocabulary item found."
            );

            return;
        }


        levelDisplay.innerHTML =
            levels[currentLevel].name;


        progress.innerHTML =
            "Question " +
            (currentWord + 1) +
            " / " +
            shuffledWords.length;


        picture.src =
            item.image;

        picture.alt =
            item.word;


        definition.innerHTML =
            item.definition;


        hint.innerHTML =
            createHint(item.word);


        answer.value = "";

        message.innerHTML = "";


        // Automatically put cursor in answer box

        answer.focus();

    }


    // ======================================================
    // LEVEL 1 BUTTON
    // ======================================================

    level1Btn.addEventListener(
        "click",
        function () {

            console.log(
                "⭐ LEVEL 1 BUTTON CLICKED!"
            );


            currentLevel = 0;

            score = 0;

            scoreDisplay.innerHTML =
                "⭐ Score: 0";


            startGame();

        }
    );


    // ======================================================
    // LEVEL 2 BUTTON
    // ======================================================

    level2Btn.addEventListener(
        "click",
        function () {

            if (!level2Unlocked) {

                console.log(
                    "🔒 Level 2 is still locked."
                );

                return;
            }


            console.log(
                "🔓 LEVEL 2 BUTTON CLICKED!"
            );


            currentLevel = 1;

            startGame();

        }
    );


    // ======================================================
    // BACK BUTTON
    // ======================================================

    backBtn.addEventListener(
        "click",
        function () {

            gamePage.classList.add("hidden");

            homePage.classList.remove("hidden");

        }
    );


    // ======================================================
    // CHECK ANSWER
    // ======================================================

    function checkAnswer() {

        const userAnswer =
            answer.value
            .toLowerCase()
            .trim();


        if (userAnswer === "") {

            message.innerHTML =
                "✏️ Please type an answer!";

            answer.focus();

            return;
        }


        const correctAnswer =
            shuffledWords[currentWord].word;


        // =========================
        // CORRECT
        // =========================

        if (
            userAnswer === correctAnswer
        ) {

            score += 10;


            scoreDisplay.innerHTML =
                "⭐ Score: " + score;


            message.innerHTML =
                "✅ Correct! +10 marks";


            currentWord++;


            // Finished current level

            if (
                currentWord >=
                shuffledWords.length
            ) {

                if (currentLevel === 0) {

                    unlockLevel2();

                }

                else {

                    setTimeout(
                        showWin,
                        1000
                    );

                }

            }

            else {

                setTimeout(
                    loadQuestion,
                    1000
                );

            }

        }


        // =========================
        // WRONG
        // =========================

        else {

            lives--;

            updateLives();


            message.innerHTML =
                "❌ Not quite! Try again.";


            answer.value = "";


            // No lives remaining

            if (lives <= 0) {

                message.innerHTML =
                    "💡 The answer is: " +
                    correctAnswer;


                currentWord++;


                lives = 3;

                updateLives();


                if (
                    currentWord >=
                    shuffledWords.length
                ) {

                    if (currentLevel === 0) {

                        unlockLevel2();

                    }

                    else {

                        setTimeout(
                            showWin,
                            2000
                        );

                    }

                }

                else {

                    setTimeout(
                        loadQuestion,
                        2000
                    );

                }

            }

            else {

                answer.focus();

            }

        }

    }


    // ======================================================
    // UNLOCK LEVEL 2
    // ======================================================

    function unlockLevel2() {

        level2Unlocked = true;


        level2Btn.disabled = false;


        level2Btn.classList.remove(
            "locked"
        );


        level2Btn.innerHTML =
            "🔓 Level 2";


        message.innerHTML = `

            🎉 Level 1 Complete! 🎉

            <br><br>

            <span style="font-size:20px;">
                Amazing work!
            </span>

            <br>

            <span style="font-size:20px;">
                You earned ⭐ ${score} marks!
            </span>

            <br>

            <span style="font-size:20px;">
                🔓 Level 2 is now unlocked!
            </span>

        `;


        // Return to map after 2.5 seconds

        setTimeout(
            function () {

                gamePage.classList.add(
                    "hidden"
                );

                homePage.classList.remove(
                    "hidden"
                );

            },
            2500
        );

    }


    // ======================================================
    // SUBMIT BUTTON
    // ======================================================

    submitBtn.addEventListener(
        "click",
        checkAnswer
    );


    // ======================================================
    // ENTER KEY
    // ======================================================

    answer.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                checkAnswer();

            }

        }
    );


    // ======================================================
    // LISTEN BUTTON
    // ======================================================

    listenBtn.addEventListener(
        "click",
        function () {

            const item =
                shuffledWords[currentWord];


            if (!item) {

                return;
            }


            const speech =
                new SpeechSynthesisUtterance(
                    item.word
                );


            speech.lang =
                "en-GB";


            speech.rate =
                0.8;


            speech.pitch =
                1;


            window.speechSynthesis.cancel();


            window.speechSynthesis.speak(
                speech
            );

        }
    );


    // ======================================================
    // FINAL WIN SCREEN
    // ======================================================

    function showWin() {

        document.body.innerHTML = `

            <div class="gameBox">

                <h1>
                    🏆 Congratulations! 🏆
                </h1>

                <h2>
                    You completed Word Adventure!
                </h2>

                <h2>
                    Final Score: ⭐ ${score}
                </h2>

                <p style="
                    font-size:24px;
                    color:#27ae60;
                    font-weight:bold;
                ">
                    🌟 Amazing work! 🌟
                </p>

                <button
                    onclick="location.reload()"
                    style="
                        background:#2ecc71;
                        color:white;
                        padding:15px 30px;
                        font-size:20px;
                        border-radius:25px;
                        border:none;
                        cursor:pointer;
                    "
                >
                    🔄 Play Again
                </button>

            </div>

        `;

    }


    // ======================================================
    // KEEP LEVEL 2 LOCKED AT START
    // ======================================================

    level2Btn.disabled = true;

    level2Btn.innerHTML =
        "🔒 Level 2";


    // ======================================================
    // READY
    // ======================================================

    console.log(
        "✅ Word Adventure is ready!"
    );

});