const navToggle = document.getElementById("nav-toggle");
const floatedNavbar = document.getElementById("floated-navbar");

navToggle.addEventListener("click", (e) => {
  floatedNavbar.classList.toggle("nav-appear");
});
