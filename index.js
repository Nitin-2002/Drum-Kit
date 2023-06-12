// document.querySelector("button").addEventListener("click",btclick)
// function btclick(){
//     alert("click")
// }
for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function()
    { this.style.color="white";
    var bt=this.innerHTML;
    playsound(bt)
    animate(bt)
}
)
}
 function playsound(bt) {
   
    switch(bt){
        case"w":
        var audio1=new Audio("sounds/crash.mp3")
        audio1.play();
        break;
    
        case"a":
        var audio2=new Audio("sounds/kick-bass.mp3")
        audio2.play();
        break;
    
    
        case"d":
        var audio3=new Audio("sounds/snare.mp3")
        audio3.play();
        break;
    
    
        case"j":
        var audio4=new Audio("sounds/tom-1.mp3")
        audio4.play();
        break;
    
    
        case"k":
        var audio5=new Audio("sounds/tom-2.mp3")
        audio5.play();
        break;
    
    
        case"l":
        var audio6=new Audio("sounds/tom-3.mp3")
        audio6.play();
        break;
    
    
     default:
        var audio=new Audio("sounds/tom-4.mp3")
        audio.play();
        
 }
 }
 document.addEventListener("keypress",function(event){
   var x=event.key
   playsound(x);
   animate(x);
 })

document.getElementById("title").addEventListener("dblclick",function(){
     this.textContent="Proceed Below";
})
function animate(btn){
    var activebtn=document.querySelector("."+btn)
      activebtn.classList.toggle("pressed");
    //   setTimeout(function(){activebtn.classList.remove("pressed")},100);
}  
// function boy(name,age,gender){
//     th
// is.name=name;
//     this.age=age;
//     this.gender=gender
// }
// var boi=new boy("hggh",21,"m")