//This variable sets the user's value to rock. This value can be changed manually when testing in the console. 



//Task3: To be completed after this game functions in the console. 
    // Set userChoice  to "null" and create a click handler that changes the value based on the item the user clicks on the HTML page.
var computerChoice = generateComputerChoice();  
$(document).ready(function() {
    var userChoice; 
    $("button").click(function() {
        userChoice = $(this).text().trim();
        console.log(userChoice);
        console.log(pickWinner(userChoice, computerChoice));
    });

// Task1: Task 1 randomly choose between 'rock', 'paper', or 'scissors' and assignd the selection of the computer to the variable computerChoice
    function generateComputerChoice() {
      
        // Step 1: Create an array with three elements (rock, paper and scissors).
        var choices= ["rock", "paper", "scissors"];
    
        // Step 2: Use the JavaScript Math function to generate a random whole number between 0 and 2.
       function getRandomnumber() {
         var min = 0
         var max = choices.length -1
         return Math.floor(Math.random() * (max - min + 1)) + min;
       }
      
        //Step 3: Use this randomly generated number to pull a value from the array (eg myArray[ranomNum])
        //return this new value
        return choices[getRandomnumber()]
    }
    
  

// Task2: This function compares the userChoice and the computerChoice to decide who won
function pickWinner(userChoice, computerChoice) {
  console.log("user = " + userChoice);
  console.log("computer = " + computerChoice);
    // Step 1: Create an "if/else if/else" statement that compares the userChoice and computerChoice under any possible game outcome.
    
    if (userChoice ==="rock" && computerChoice === "paper") { 
        alert("computer wins")
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        alert("computer wins")
    } 
    else if (userChoice === "scissors" && computerChoice === "rock") {
        alert("computer wins")
    }
    else if (userChoice === computerChoice) {
        alert("it's a tie")
    }
    else if (userChoice === "rock" && computerChoice === "scissors")  {
        alert ("user wins")
     }
    else if (userChoice === "paper" && computerChoice ==="rock"){
        alert ("user wins")
     } 
     else (userChoice === "scissors" && computerChoice === "paper")
        alert ("user wins")
     
    // Step 2: Depending on who is the winner of the game console.log either "user wins", "computer wins" or "draw"

}
  // This function call will run the comparison bewteen computer and user.
 pickWinner(userChoice, computerChoice);

});