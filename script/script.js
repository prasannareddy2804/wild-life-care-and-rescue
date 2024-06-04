"use strict";

const model = document.querySelector(".model");
const layout = document.querySelector(".overlay");

const openBtn = document.querySelector(".show-btn");
const closeBtn = document.querySelector(".close-btn");

const closeBtnEle = function () {
  model.classList.add("hidden");
  layout.classList.add("hidden");
};

openBtn.addEventListener("click", function () {
  model.classList.remove("hidden");
  layout.classList.remove("hidden");
});

closeBtn.addEventListener("click", closeBtnEle);
layout.addEventListener("click", closeBtnEle);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeBtnEle();
  }
});
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
