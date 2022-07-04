// const mobileMenu = document.querySelector(".mobilemenu");
// const menuButton = document.querySelector(".menubutton");

// menuButton.addEventListener("click", function () {
//   mobileMenu.classList.toggle("dropdown-open");
// });

const asideSection = document.querySelector("aside");
const mainSection = document.querySelector("main");
const formDiv = document.querySelector(".containment");

const signInbtn = document.getElementById("sign-in-btn");
const signUpbtn = document.getElementById("sign-up-btn");

signInbtn.addEventListener("click", function () {
  mainSection.classList.add("slideright");
  asideSection.classList.add("slideleft");
  asideSection.classList.add("md:rounded-l-md");
  asideSection.classList.remove("md:rounded-r-md");
});

signUpbtn.addEventListener("click", function () {
  mainSection.classList.remove("slideright");
  asideSection.classList.remove("slideleft");
  asideSection.classList.remove("md:rounded-l-md");
  asideSection.classList.add("md:rounded-r-md");
});
