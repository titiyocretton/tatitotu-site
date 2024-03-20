var left = document.querySelector(".button-left");
var right = document.querySelector(".button-right");
var change = document.querySelector(".button-radio");
var pain = document.querySelector("p");

var clickRight = function () {
  left.classList.remove("active");
  right.classList.add("active");
};

var clickLeft = function () {
  left.classList.add("active");
  right.classList.remove("active");
};

right.addEventListener("click", clickRight);
left.addEventListener("click", clickLeft);
