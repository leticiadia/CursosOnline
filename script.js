const menuHamburger = document.querySelector(".navbar-responsive");

const navbar = document.querySelector(".navbar");
const menuOpen = document.getElementById("open");
const menuClose = document.getElementById("close");

menuHamburger.addEventListener("click", () => {
  let isNavbarActive = navbar.classList.toggle("active");

  if (isNavbarActive) {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  } else {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  }
});
