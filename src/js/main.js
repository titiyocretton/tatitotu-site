var left = document.querySelector(".button-left");
var right = document.querySelector(".button-right");
var change = document.querySelector(".button-radio");

var optionImpression = document.querySelector(".cta-option-dropdown");
var hiddenOptionImpression = document.querySelector(".hidden-option");
var arrowOption = document.querySelector(".dropdown-arrow-option");

var startExerce = document.querySelector(".button-exerce");
var exercice = document.querySelector(".lightbox");
var crossExercice = document.querySelector(".exercice-cross");

var crossVerbLabel = document.querySelector(".verb-close");
var verbLabel = document.querySelector(".verb-label");

var clickRight = function () {
  left.classList.remove("button-active");
  right.classList.add("button-active");
};

var clickLeft = function () {
  left.classList.add("button-active");
  right.classList.remove("button-active");
};

var impression = function () {
  hiddenOptionImpression.classList.toggle("option-desactive");
  arrowOption.classList.toggle("dropdown-arrow-active");
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

var closeVerbLabel = function () {
  verbLabel.classList.add("verb-hidden");
};

crossVerbLabel.addEventListener("click", closeVerbLabel);
