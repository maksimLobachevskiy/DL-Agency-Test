"use strict"

const images = document.querySelectorAll(".present-list__item");
const listImg = document.querySelectorAll(".img-min");
const imgMax = document.querySelector(".img-max");
const activePresent = document.querySelectorAll(".present__info");

function clearActiveImg() {
  for (let value of images) {
    value.classList.remove("active")
  }
}

function clearActiveDesc(e) {
  for (let value of activePresent) {
    value.classList.remove("active")
    if (value.dataset.img === e.target.dataset.img) {
      value.classList.add("active");
    }
  }
}

listImg.forEach(img => {
  img.addEventListener("click", (e) => {
    clearActiveImg();
    clearActiveDesc(e)
    e.target.parentNode.classList.add("active")
  })
})

const burger = document.querySelector(".burger-wrapper");
const circle = document.querySelector(".burger-menu__circle");
const burgerBtn = document.querySelector(".burger-menu__btn");
const sideNav = document.querySelector(".sidenav");
burger.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  circle.classList.toggle("open");
  sideNav.classList.toggle("active");
  burgerBtn.classList.toggle("active");
})
const optionLabel = document.querySelectorAll(".form-gender__options label");

function selectOption() {
  for (let value of optionLabel) {
    value.addEventListener("click", (e) => {
      document.querySelector(".form-gender summary").innerHTML = value.innerHTML;
      document.querySelector(".form-gender").removeAttribute("open");

    })
  }
}


selectOption();

const updateTime = function () {
  newMessage.style.display = "block"
}
setTimeout(updateTime, 3000);
clearTimeout(updateTime);