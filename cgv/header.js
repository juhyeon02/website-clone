// navbar

const nav = document.querySelector("#navbar");
const navheight = nav.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navheight) {
    nav.classList.add("active", "fix");
  } else {
    nav.classList.remove("active", "fix");
  }
});
