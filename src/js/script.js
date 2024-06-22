const navBar = document.querySelector(".links--mb");
const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  navBar.classList.toggle("hidden");
  navBar.classList.toggle("-translate-x-full ");
});
