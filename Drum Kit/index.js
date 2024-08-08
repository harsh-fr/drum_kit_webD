var n = document.querySelectorAll(".drum").length;

for(var i = 0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var  butt = this.innerHTML;
        makeSound(butt);
        btnAnimation(butt);
        
    });
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound(butt){
    switch(butt){
        case "w": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "a": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "s": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d": 
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        case "j": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "k": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    }
}

function btnAnimation(key){
    var src = "."+key;
    var active = document.querySelector(src);
    active.classList.add("pressed");
    setTimeout( function(){
        active.classList.remove("pressed");
    }, 100);
}