for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i]
     .addEventListener("click",function handclick(){
        var buttonClicked=this.innerHTML;
        keyPressed(buttonClicked);
    });

}
    document.addEventListener("keypress",function(event){
        keyPressed(event.key);
    })
    function keyPressed(key){
        switch(key)
        {
            case "w":
            var audio=new Audio('SOUNDS/tom-1.mp3');
            audio.play();
            break;
            case "a":
            var audio=new Audio('SOUNDS/tom-2.mp3');
            audio.play();
            break;
            case "s":
            var audio=new Audio('SOUNDS/tom-3.mp3');
            audio.play();
            break;
            case "d":
            var audio=new Audio('SOUNDS/tom-4.mp3');
            audio.play();
            break;
            case "j":
            var audio=new Audio('SOUNDS/crash.mp3');
            audio.play();
            break;
            case "k":
            var audio=new Audio('SOUNDS/kick-bass.mp3');
            audio.play();
            break;
            case "l":
            var audio=new Audio('SOUNDS/pnd.mp3');
            audio.play();
            break;
        }
 
    }
        