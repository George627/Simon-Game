const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

const clickedButton = $(".btn");

let level = 0;

const nextSequence = () => {

    userClickedPattern.splice(0, userClickedPattern.length);

    level++;

    $("#level-title").html("Level " + level);
    
    const randomNumber = Math.floor(Math.random() * 4);

    const randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);  
}

document.addEventListener('keydown', () => {
    
    if(level === 0){
       nextSequence(); 
    }
    
    
});

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

