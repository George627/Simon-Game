const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

const clickedButton = $(".btn");

let level = 0;

const nextSequence = () => {

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
        const userChosenColor = this;

        playSound(userChosenColor.id);

        animatePress(userChosenColor.id);

        userClickedPattern.push(userChosenColor);
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

