let currentDiv = 0;
const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");

function showDiv(index) {
  items[currentDiv].classList.remove("active");
  dots[currentDiv].classList.remove("active");
  currentDiv = index;
  items[currentDiv].classList.add("active");
  dots[currentDiv].classList.add("active");
}

// Initially show the first div
showDiv(currentDiv);
