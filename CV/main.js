const btnToggler = document.querySelector(".btn-toggler");
const links = document.querySelector(".links");

btnToggler.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
