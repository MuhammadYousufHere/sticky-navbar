const nav = document.querySelector("nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  // console.log(window.scrollY, nav.offsetHeight)
  //  }

  if (window.scrollY > nav.offsetHeight + 153) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
function myMenu() {
  document.querySelector(".menu").classList.toggle("change");
  document.querySelector("nav").classList.toggle("new-nav");
  document.querySelector(".menu-bkg").classList.toggle("menu-bkg-change");
  document.querySelector("ul").classList.toggle("change-ul");
}
