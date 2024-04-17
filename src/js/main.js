var left = document.querySelector(".button-left");
var right = document.querySelector(".button-right");
var change = document.querySelector(".button-radio");

var optionImpression = document.querySelector(".cta-option-dropdown");
var hiddenOptionImpression = document.querySelector(".hidden-option");

var startExerce = document.querySelector(".button-exerce");
var exercice = document.querySelector(".lightbox");
var crossExercice = document.querySelector(".exercice-cross");

var clickRight = function () {
  left.classList.remove("active");
  right.classList.add("active");
};

var clickLeft = function () {
  left.classList.add("active");
  right.classList.remove("active");
};

var impression = function () {
  hiddenOptionImpression.classList.toggle("option-desactive");
};

right.addEventListener("click", clickRight);
left.addEventListener("click", clickLeft);

optionImpression.addEventListener("click", impression);

var exerceVisible = function () {
  exercice.classList.remove("lightbox-hidden");
};

startExerce.addEventListener("click", exerceVisible);

var exerceHidden = function () {
  exercice.classList.add("lightbox-hidden");
};

crossExercice.addEventListener("click", exerceHidden);
