const button1 = document.querySelector(".button-1");
const button3 = document.querySelector(".button-3");
const button4 = document.querySelector(".button-4");
const nav = document.querySelector("nav");

button1.addEventListener("mouseenter", () => {
  button1.classList.add("hovered");
  button1.style.transition = "background-color 1s linear";
});

button1.addEventListener("mouseleave", () => {
  button1.classList.remove("hovered");
  button1.style.transition = "background-color 1s linear";
});

button1.addEventListener("focus", () => {
  button1.classList.add("focused");
  button1.style.transition = "background-color 10s linear";
});

button1.addEventListener("blur", () => {
  button1.classList.remove("focused");
  button1.style.transition = "background-color 10s linear";
});

button3.addEventListener("click", () => {
  button3.classList.add("disabled");
});

button4.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});
