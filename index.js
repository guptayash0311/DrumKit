

//Detecting Button Press

var NoOfButtons = document.querySelectorAll("button").length;
for (var i = 0; i < NoOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    // alert("Clicked");
}
function handleClick() {
    var ClickedButton = this.innerHTML;
    makesound(ClickedButton);
    ButtonAnimation(ClickedButton);
}

//Detecting Key Press
document.addEventListener("keypress",function(event){
    makesound(event.key);
    ButtonAnimation(event.key);
});

// Makesound
function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function ButtonAnimation(currentkey)
{
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function (){
        activebutton.classList.remove("pressed")
    },100)
}