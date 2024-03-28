var left = document.querySelector(".button-left");
var right = document.querySelector(".button-right");
var change = document.querySelector(".button-radio");

var optionImpression = document.querySelector(".cta-option-dropdown");
var hiddenOptionImpression = document.querySelector(".hidden-option");

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
