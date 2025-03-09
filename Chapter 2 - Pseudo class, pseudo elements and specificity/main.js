const triggerButton = document.querySelector("#js-trigger-button");
const dialog = document.querySelector("dialog");
const dialogButton = dialog.querySelector("button");

// dialog.classList.add("invisible");

triggerButton.addEventListener("click", () => {
  //   dialog.classList.remove("invisible");
  dialog.showModal();
});

dialogButton.addEventListener("click", () => {
  //   dialog.classList.add("invisible");
  dialog.close();
});
