// document.querySelector("button").addEventListener("click", handleClick);
// here we are not using paranthesis after handleClick function,
// cause if we do it will call itself as the normall fucntions do ,
// and it will give result without even listening .addEventListener.addEventListener
// to check this just un comment the below Code .
// document.querySelector("button").addEventListener("click",handleClick());

// for hover effect take this example
// ocument.querySelectorAll(".drum")[i].addEventListener("mouseover", handleClick);

// for (var i=0;i<document.querySelectorAll(".drum").length;i++)
// document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// function handleClick(){
//     var audio=new Audio("sounds/kick-bass.mp3");
//     audio.play();
// }

// for (var i=0;i<document.querySelectorAll(".drum").length;i++)
// document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// function handleClick(){
//     var buttonInnerHTML=this.innerHTML;
//     switch (buttonInnerHTML) {
//         case q:
//             var audio=new Audio("sounds/"+buttonInnerHTML+".mp3");
//     audio.play();
//             break;

//         default:
//             console.log(buttonInnerHTML);
//     }

// }

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  switch (buttonInnerHTML) {
    case "q":
      var crashh = new Audio("sounds/crash.mp3");
      crashh.play();
      break;
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "e":
      var snaree = new Audio("sounds/snare.mp3");
      snaree.play();
      break;
    case "r":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "t":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "y":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "u":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
