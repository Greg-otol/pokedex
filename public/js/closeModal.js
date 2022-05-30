const closeModal = document.querySelector("#space-modal");
const modal = document.querySelector(".modal-container");

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});