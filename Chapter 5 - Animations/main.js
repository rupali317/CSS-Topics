const button3 = document.querySelector(".button-3");
const button4 = document.querySelector(".button-4");
const nav = document.querySelector("nav");

button3.addEventListener("click", () => {
  button3.classList.add("disabled");
});

button4.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});
