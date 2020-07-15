// click events
var btn = document.querySelectorAll(".drum");
for(var i=0;i< btn.length;i++){
    btn[i].addEventListener("click",function(){
        var key = this.innerHTML;
        makeSound(key);    
        animate(key);
    })
}
// keypress events
document.addEventListener("keypress",function(e){
    makeSound(e.key);
    animate(e.key);
})

// sound 
function makeSound(key){
    if(key==="w"){
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
    }
    if(key==="a"){
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
    }
    if(key ==="s"){
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
    }
    if(key==="d"){
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
    }
    if(key==="j"){
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
    }
    if(key==="k"){
        var sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
    }
    if(key==="l"){
        var sound = new Audio("sounds/snare.mp3");
        sound.play();
    }
}

// animation
function animate(key){
    var cls = "."+key ;
    document.querySelector(cls).classList.add("pressed");
    setTimeout(function(){
      document.querySelector(cls).classList.remove("pressed");
    },100);
}