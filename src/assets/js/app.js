const openButton = document.querySelector(".header__button-menu");
const closeButton = document.querySelector(".aside__button-close");
const menu = document.querySelector(".aside");

function openMenu() {
  menu.classList.add("active");
  document.body.classList.add("bg-body");

  const noAside = document.querySelector(".wrapper");
  noAside.style.WebkitUserSelect = "none";
  noAside.style.msUserSelect = "none";
  noAside.style.userSelect = "none";
}

function hideMenu() {
  menu.classList.remove("active");
  document.body.classList.remove("bg-body");
}

window.addEventListener("click", (e) => {
  if (e.target !== openButton.querySelector("img") && e.target !== menu) {
    hideMenu();
  }
});

openButton.addEventListener("click", () => {
  openMenu();
});

closeButton.addEventListener("click", () => {
  hideMenu();
});
