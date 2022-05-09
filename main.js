// change header background

const header = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scroll-header", window.scrollY > 70);
});

const menu = document.querySelector(".menu__mobile");
const menuToggler = document.querySelector(".menu__toggler");

// Open Menu
function toggleClass() {
  menu.classList.toggle("show-menu");
  menuToggler.classList.toggle("show-menu");
}

menuToggler.addEventListener("click", toggleClass);

// hide menu when clicked on menu links

let navLinks = document.querySelectorAll(".nav__link");

function hideMenu() {
  menu.classList.remove("show-menu");
  menuToggler.classList.remove("show-menu");
}

navLinks.forEach((link) => link.addEventListener("click", hideMenu));

let collapseBars = document.querySelectorAll(".collapse");
const collapseText = document.querySelectorAll(".collapse__text");

for (let i = 0; i < collapseBars.length; i++) {
  collapseBars[i].addEventListener("click", () => {
    collapseText[i].classList.toggle("show");
  });
}


