let priceToggleSwitch = document.getElementById("priceswitch");
let firstPrice = document.getElementById("price");
let secondPrice = document.getElementById("second-price");
let thirdPrice = document.getElementById("third-price");

function togglebutton() {
  if (priceToggleSwitch.checked == true) {
    firstPrice.innerHTML = "$ 199 <span>/ year</span>";
  } else {
    firstPrice.innerHTML = "$ 19 <span>/ month</span>";
  }

  if (priceToggleSwitch.checked == true) {
    secondPrice.innerHTML = "$ 399 <span>/ year</span>";
  } else {
    secondPrice.innerHTML = "$ 39 <span>/ month</span>";
  }

  if (priceToggleSwitch.checked == true) {
    thirdPrice.innerHTML = "$ 599 <span>/ year</span>";
  } else {
    thirdPrice.innerHTML = "$ 59 <span>/ month</span>";
  }
}
let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");
monthly.addEventListener("click", function () {
  priceToggleSwitch.checked = false;
  firstPrice.innerHTML = "$ 19 <span>/ month</span>";
  secondPrice.innerHTML = "$ 39 <span>/ month</span>";
  thirdPrice.innerHTML = "$ 59 <span>/ month</span>";
});
yearly.addEventListener("click", function () {
  priceToggleSwitch.checked = true;
  firstPrice.innerHTML = "$ 199 <span>/ year</span>";
  secondPrice.innerHTML = "$ 399 <span>/ year</span>";
  thirdPrice.innerHTML = "$ 599 <span>/ year</span>";
});
let hamBurger = document.getElementById("hamburger");
let cancel = document.getElementById("cancel");
cancel.style.display = "none";
function menuToggle() {
  if (hamBurger.style.display === "none") {
    hamBurger.style.display = "block";
    cancel.style.display = "none";
  } else {
    hamBurger.style.display = "none";
    cancel.style.display = "block";
  }
}
