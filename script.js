let nav = document.getElementById("nav");
nav.style.height = "0rem";
const menuIcon = document.getElementById("menu-icon").addEventListener("click", () => {
  if (nav.style.height == "0rem") {
    console.log("object");
    nav.style.height = "calc(100vh - 4rem)";
    nav.style.transition = ".5s";
  }
  else {
    nav.style.height = "0rem";
    nav.style.transition = ".5s";
  }
})