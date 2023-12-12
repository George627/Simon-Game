const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const nextSequence = () => {
    
    const randomNumber = Math.floor(Math.random() * 4);

    const randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    $("sounds/" + randomChosenColor + ".mp3").play(); 

}

