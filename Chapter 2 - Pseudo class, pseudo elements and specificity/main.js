const triggerButton = document.querySelector("#js-trigger-dialog");
const dialog = document.querySelector("dialog");
const dialogButton = dialog.querySelector("button");

triggerButton.addEventListener("click", () => {
  dialog.showModal();
});

dialogButton.addEventListener("click", () => {
  dialog.close();
});
