const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

const clickedButton = $(".btn");

const nextSequence = () => {
    
    const randomNumber = Math.floor(Math.random() * 4);

    const randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);  
}

for(let i = 0; i < clickedButton.length; i++){
    clickedButton[i].addEventListener("click", () => {
        const userChosenColor = this.id;

        playSound(userChosenColor);

        userClickedPattern.push(userChosenColor);
    
        console.log(userClickedPattern);
    });
}

function playSound(name){
    const audio = new Audio("sounds/" + name + ".mp3");
    
    audio.play(); 
}

