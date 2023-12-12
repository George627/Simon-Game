const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const clickedButton = $(".btn");

const nextSequence = () => {
    
    const randomNumber = Math.floor(Math.random() * 4);

    const randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    const audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    
    audio.play(); 
}

clickedButton.addEventListener("click", () => {
    const userChosenColor = this;

    console.log(userChosenColor);
})

