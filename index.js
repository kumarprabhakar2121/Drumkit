
//var audioArr=['sounds/crash.mp3',"sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];
for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",btnclicked);

    function btnclicked()
    {
        // alert("i got clicked");
        // var audio = new Audio('sounds/crash.mp3');
        // audio.play();
        var btnInnerHTML=this.innerHTML;
        
        makeSound(btnInnerHTML);
        buttonAnimation(btnInnerHTML);
    }
}


    document.addEventListener("keydown",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

function makeSound(key){
    switch (key) 
        {
            case "w":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            case "s":
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
            case "d":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
            case "j":
                var snare=new Audio('sounds/snare.mp3');
                snare.play();
            break;
            case "k":
                var crash=new Audio('sounds/crash.mp3');
                crash.play();
            break;
            case "l":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;            
        }
}

function buttonAnimation(currentKey){

var activeBtn = document.querySelector("."+currentKey);
activeBtn.classList.toggle("pressed");
setTimeout(function(){
    activeBtn.classList.toggle("pressed");
},100);
}
