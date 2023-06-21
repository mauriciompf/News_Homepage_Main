const button = document.querySelector(".header__button-menu");
const list = document.querySelector(".header__list");

button.addEventListener("click", () => {
  list.classList.toggle("active");
});
