let array = ["❤️", "😀", "🦆"];
let resultContainer=document.getElementById("resultContainer");
//select a random element from an array[]
// const randomChoice=(array)=>{
//   let randomNumber=Math.floor(Math.random()*(array.length));
//   return array[randomNumber]
// }
// console.log(randomChoice(array));

//if else if else
//rainy->1 sunny->-1 overcast ->0
const weatherScore = (weather) => {
  let score;
  if (weather == 'rainy') {
    score = 1;
  } else if (weather == 'sunny') {
    score = -1;
  } else {
    score = 0;
  }

  return score;
}
// console.log(weatherScore('rainy'));


/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

let totalScore = {
  computerScore: 0,
  playerScore: 0,
}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

function getComputerChoice() {
  let array = ['Rock', 'Paper', 'Scissors']
  let randomNumber = Math.floor(Math.random() * (array.length))
  console.log({ computerChoice: array[randomNumber] })
  return array[randomNumber];
}



// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  console.log('getResult call')
  let score;
  // return the result of score based on if you won, drew, or lost
  if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Rock' && computerChoice == 'Paper')) {
    score = 1;

    totalScore.playerScore += 1;
    totalScore.computerScore -= 1;
    // All situations where human wins, set `score` to 1


  } else if (playerChoice == computerChoice) {
    score = 0;
    // All situations where human draws, set `score` to 0
  } else {
    score = -1;

    totalScore.playerScore -= 1;
    totalScore.computerScore += 1;

    // Otherwise human loses (aka set score to -1)
  }
  // make sure to use else ifs here
  return score

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  console.log('Show result call')
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  let resultDiv = document.getElementById('result');
  let playerScoreDiv = document.getElementById('player-score');
  let computerChoiceDiv = document.getElementById('hands');
  playerScoreDiv.innerText = `Player Score ${totalScore.playerScore},Computer Score ${totalScore.computerScore}`;
  computerChoiceDiv.innerText = `👨🏻‍🦰${playerChoice} vs 🤖${computerChoice}`;
  if (score == 1) {
    resultDiv.innerText = 'You Won🏆!';
  } else if (score == 0) {
    resultDiv.innerText = 'You Draw the Match 📍';
  } else {
    resultDiv.innerText = 'You Lose!😔'
  }
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  let computerChoice = getComputerChoice();
  console.log({ computerChoice })
  let result = getResult(playerChoice, computerChoice);
  showResult(result, playerChoice, computerChoice);
  console.log({ result })


}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **

function playGame() {
  console.log('Play game call')

  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  let choices = document.querySelectorAll('.rpsButton');

  // 1. loop through the buttons using a forEach loop
  choices.forEach(choice => {
    choice.onclick = () => {
      // 2. Add a 'click' event listener to each button
      onClickRPS(choice.value);
      resultContainer.style.display="inline-flex";
      // 3. Call the onClickRPS function every time someone clicks
      // 4. Make sure to pass the currently selected rps button as an argument
    }
  })
  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButtonDiv = document.getElementById('endGameButton');
  endGameButtonDiv.onclick = () => endGame();
}


// ** endGame function clears all the text on the DOM **
function endGame() {
  let resultDiv = document.getElementById('result');
  resultDiv.innerText = '';
  let playerScoreDiv = document.getElementById('player-score');
  let computerChoiceDiv = document.getElementById('hands');
  playerScoreDiv.innerText = "";
  computerChoiceDiv.innerText = "";
  totalScore.computerScore = 0;
  totalScore.playerScore = 0;
  console.log('end game call')
}

playGame()