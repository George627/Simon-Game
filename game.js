const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

const clickedButton = $(".btn");

const nextSequence = () => {
    
    const randomNumber = Math.floor(Math.random() * 4);

    const randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    const audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    
    audio.play(); 
}

for(let i = 0; i < clickedButton.length; i++){
    clickedButton[i].addEventListener("click", function() {
        const userChosenColor = this.id;

        userClickedPattern.push(userChosenColor);
    
        console.log(userClickedPattern);
    });
}

