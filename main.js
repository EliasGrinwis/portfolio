const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul");

let value = "OFF";

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  value = "ON";
  hamburger.style.display = "none";

  nav.style.display = "block";

  ul.classList.add("flex-direction");
  document.querySelector(".cross").style.display = "block";
});

document.querySelector(".cross").addEventListener("click", () => {
  nav.style.display = "none";
  hamburger.style.display = "block";
  ul.classList.remove("flex-direction");
});
