const openButton = document.querySelector(".header__button-menu");
const closeButton = document.querySelector(".aside__button-close");
const menu = document.querySelector(".aside");

function openMenu() {
  menu.classList.add("active");
}

function hideMenu() {
  menu.classList.remove("active");
}

window.addEventListener("click", (e) => {
  if (e.target === menu) {
    hideMenu();
  }
});

openButton.addEventListener("click", () => {
  openMenu();
});

closeButton.addEventListener("click", () => {
  hideMenu();
});
