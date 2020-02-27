let state = 0;
let symbols = "*&^%$#@!?+";
let winner= 0;

// set up button click handlers
let goBtn = document.getElementById("goBtn");
goBtn.addEventListener("click", nextState);
let nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextState);
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetState);

// UI elements that need to be updated and set hidden/visible
let mainText = document.getElementById("mainText");
let paragraph = document.getElementById("paragraph");
let paragraphTwo = document.getElementById("paragraphTwo");



//functions that move state to next/previous/reset
function nextState() {
    state++;
    build();
}

function previousState() {
    state--;
    build();
}

function resetState() {
    state = 0;
    build();
} 

// set random symbol and number strings

function randomSym() {
    winner = symbols.charAt(Math.floor(Math.random() * symbols.length));
    return winner;
}
/*Function to create an array with a string of numbers 
that pushes a random symbols to each number except for multiples of 9, which
is called (winner).    */
function numbers() {
    randomSym();
    var numArray = [];
    let string = "";
    for (let i = 0; i < 100 ; i++) {
        if (i % 9 == 0) {
            numArray.push(winner); // pushing winner symbol to multiples of 9

            /*numbers array and symbols are pushed onto one array
             with random symbols for all numbers except for 
            multiples of 9. */
        } else numArray.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
        numArray[i] = i + " : " + numArray[i];  //adds colon between number and symbol
        string += numArray[i] + " <br>"; /*adds break so numbers and symbols arent
        in a line but down a row. */
    }

    return string;
}

function build() {
    switch (state) {
        case 0:
            mainText.textContent = "I can read your mind";
            goBtn.style.display = "block";
            nextBtn.style.display = "none";
            paragraph.textContent = "";
            paragraphTwo.textContent = "";
            resetBtn.style.display = "none";

            break;

        case 1:
            mainText.textContent = "Pick a number from 01 - 99";

            goBtn.style.display = "none";

            nextBtn.style.display = "block";

            nextBtn.textContent = "Next";

            paragraph.textContent = "when you have your number";

            paragraphTwo.textContent = "click next";

            resetBtn.style.display = "block";

            break;

        case 2:
            mainText.textContent = " Add both digits together to get a new number";

            nextBtn.style.display = "block";

            paragraph.textContent = "Example: 14 = 1 + 4 = 5.";

            paragraphTwo.textContent = "Click next to proceed!";

            goBtn.style.display = "none";

            resetBtn.style.display = "block";

            break;

        case 3:
            mainText.textContent = "Subtract your number from the original number";

            nextBtn.style.display = "block";

            paragraph.textContent = "Example: 14 - 5 = 9";

            paragraphTwo.textContent = "Click next to proceed";

            goBtn.style.display = "none";

            resetBtn.style.display = "block";

            break;

        case 4:
            
            mainText.innerHTML = numbers(); /*calling function of array of numbers and
             symbols */

            paragraph.textContent = "Find your new number next to the symbol.";

            paragraphTwo.textContent = "";

            goBtn.style.display = "none";

            nextBtn.style.display = "block";

            nextBtn.textContent = "Reveal";

            resetBtn.style.display = "block";

            break;

        case 5:
            mainText.textContent = winner; //calling in winning symbol

            paragraph.textContent = "Your symbol is: " + winner + ".";

            goBtn.style.display = "none";

            nextBtn.style.display = "none";

            resetBtn.style.display = "block";

            
            paragraphTwo.textContent = "";

            break;

       
    }
}

build();
