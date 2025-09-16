const openBtn = document.querySelector(".open-btn");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

function openPopup() {
  popup.classList.add("open");
  overlay.classList.add("open");
}

function closePopup() {
  popup.classList.remove("open");
  overlay.classList.remove("open");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);
