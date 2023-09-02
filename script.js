// DOM elements
const heroPage = document.querySelector("#hero");
const heroPlay = document.querySelector("#play-butt");

const gamePage = document.querySelector("#game");
const input = document.querySelector("#input");
const guess = document.querySelector("#submit");

const previousGuess = document.querySelector("#previous-guess");
const attemptLeft = document.querySelector("#attempts-left");

const winPage = document.querySelector("#win");
const winPlay = document.querySelector("#play-butt-happy");

const loosePage = document.querySelector("#loose");
const loosePlay = document.querySelector("#play-butt-sad");

// Variables
const randomNumber = parseInt(Math.random() * 100 + 1);
let count = 1;

// Event listeners
heroPlay.addEventListener('click', () => {
    newGame();
});

// Function definitions
function newGame() {
    heroPage.style.display = "none";
    winPage.style.display = "none";
    loosePage.style.display = "none";
    gamePage.style.display = "block";

    count=1;
    randomNumber=parseInt(Math.random() * 100 + 1);

    
    // For example, you might want to reset the number of attempts, clear previous guesses, generate a new random number, etc.
}

function validation() {
    // Implement your validation logic here if needed.
}

function check() {
    // Implement your logic to check the user's guess against the random number here.
    // Update UI elements like previous guesses, attempts left, and game status.
    // You may also want to call the win() or loose() functions based on the result.
}

function win() {
    // Implement what happens when the player wins the game.
    // Show the winPage, update UI, etc.
}

function loose() {
    // Implement what happens when the player loses the game.
    // Show the loosePage, update UI, etc.
}

guess.addEventListener('click', () => {
    check();
});





















// // hero page
// const heroPage=document.querySelector("#hero")
// const heroPlay=document.querySelector("play-butt")


// // game page
// const gamePage=document.querySelector("#game")
// const input=document.querySelector("#input")
// const guess=document.querySelector("#submit")


// const previousGuess=document.querySelector("#previous-guess")
// const attemptLeft=document.querySelector("#input")


// //  Win page
// const winPage=document.querySelector("#win")
// const winplay=document.querySelector("#play-butt-happy")

// // loose page
// const loosePage=document.querySelector("#loose")
// const looseplay=document.querySelector("#play-butt-sad")

// // run
// const randomNumber=parseInt(Math.random()*100+1)
// // console.log(randomNumber);

// let count = 1;


// heroPlay.addEventListener('click',()=>{
//     newGame();
// })







// // function defination
// function newGame(){
//     heroPage.style.display="none";
//     winPage.style.display="none";
//     loosePage.style.display="none";
//     gamePage.style.display="";

//     guess.addEventListener('click',(e)=>{
//         e.
//     })


// }

// function validation(){

// }

// function check(){
    
// }

// function win(){
    
// }

// function loose(){
    
// }


