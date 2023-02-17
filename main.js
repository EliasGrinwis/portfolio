const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul");

let value = "OFF";

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  value = "ON";
  hamburger.style.display = "none";
  nav.style.display = "block";
  document.querySelector(".cross").style.display = "block";
  document.querySelector(".article-index").classList.add("blur");
});

document.querySelector(".cross").addEventListener("click", () => {
  hamburger.style.display = "block";
  nav.style.display = "none";
  document.querySelector(".article-index").classList.remove("blur");
});
