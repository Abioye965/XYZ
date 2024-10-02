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
