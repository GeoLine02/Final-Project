const hamburger = document.querySelector(".hamburger");
const u_list = document.querySelector(".u_list");
const emileInput = document.getElementById("emileInput");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  u_list.classList.toggle("active");
});
