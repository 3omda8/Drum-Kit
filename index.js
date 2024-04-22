for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var letter = this.innerHTML;
    makeSound(letter);
    buttonAnimation(letter);
  });

  document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "ص":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "ش":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "س":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "ي":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "ت":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "ن":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "م":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(press);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
