//The buttonColor array holds the color that will be used in the game.
const buttonColors = ["red", "blue", "green", "yellow"];

//The gamePattern array keeps track of the games colors.
const gamePattern = [];

//The userClickedPattern keeps track of the buttons that the user clicks.
const userClickedPattern = [];

//Grabs all buttons and placed them under clickedButton variable.
const clickedButton = $(".btn");

//Keeps track of the level that the user is on.
let level = 0;

//A function that gives the game the next random color.
const nextSequence = () => {

    //Clears the userClickedPattern array to compare user's new answer.
    userClickedPattern.splice(0, userClickedPattern.length);

    //Increment the level by 1.
    level++;

    //HTML that displays the current level that the user is on.
    $("#level-title").html("Level " + level);

    //Generates a random number betweem 0-3.
    const randomNumber = Math.floor(Math.random() * 4);

    /*That random number would then be used to select a color in the buttonColors array.
    0 = red,
    1 = blue, 
    2 = green, 
    3 = yellow
    */
    const randomChosenColor = buttonColors[randomNumber];

    //The random color would then be added to the gamePattern array.
    gamePattern.push(randomChosenColor);

    //The color chosen will do a animation if selected.
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    //The color will play the corresponding sound of the button randomly selected.
    playSound(randomChosenColor);  
}

/*An add event listener that checks if any key is pressed on the key board.
If the level is 0, then the game will start by running the nextSequence function.*/
document.addEventListener('keydown', () => {
    if(level === 0){
       nextSequence(); 
    }
});

/*A for-loop that adds a event listener to each button. If a button is clicked, the function 
will run as follows.*/
for(let i = 0; i < clickedButton.length; i++){
    clickedButton[i].addEventListener("click", function() {
        const userChosenColor = this.id;

        playSound(userChosenColor);

        animatePress(userChosenColor);

        userClickedPattern.push(userChosenColor);

        checkAnswer(userClickedPattern.length-1);
    });
}

function playSound(name){
    const audio = new Audio("sounds/" + name + ".mp3");
    
    audio.play(); 
}

function animatePress(currentColor) {
    const color = $("." + currentColor)[0];

    color.classList.add("pressed");

    setTimeout(() => {color.classList.remove("pressed")}, 100);
}

function checkAnswer(currentLevel){
  
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout('nextSequence()', 1000)
        }
    } 

    else{
        gameRestart();
    }
}

function gameRestart(){
    const wrong = new Audio("sounds/wrong.mp3");

    wrong.play();

    $("body").addClass("game-over");

    setTimeout(() => {$("body").removeClass("game-over")}, 200);

    $("#level-title").html("Game Over, Press any key to Restart.");

    level = 0;

    gamePattern.splice(0, gamePattern.length);
}

