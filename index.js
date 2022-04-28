const input = document.querySelector("#input");
const select = document.querySelector("#select");
const button = document.querySelector("#convertBtn");
const outputGram = document.querySelector("#outputGram");
const outputNew = document.querySelector("#outputNew");
const theme = document.querySelector(".theme");
const card = document.querySelector(".card");
let logicValue;

button.addEventListener("click", convertFromGram);
theme.addEventListener("click", themeChange);

let setTheme;
const moon = `<i class='bx bxs-moon'></i>`;
const sun = `<i class='bx bx-sun'></i>`;

window.addEventListener("load", loadWindow);

function loadWindow() {
  setTheme = localStorage.getItem("theme") || "dark";
  themeChange();
}

function convertFromGram() {
  outputGram.innerHTML = input.value;
  if (select.value == "mg") {
    logicValue = input.value / 100;
  }

  if (select.value == "kg") {
    logicValue = input.value / 1000;
  }

  if (select.value == "t") {
    logicValue = input.value / 10000;
  }
  outputNew.innerHTML = logicValue + select.value;
}

function changeThemeInnerHTML() {
  if (setTheme == "dark") {
    setTheme = "light";
    theme.innerHTML = sun;
  } else {
    setTheme = "dark";
    theme.innerHTML = moon;
  }
}

function themeChange() {
  card.classList.remove(card.classList[1]);
  card.classList.add(setTheme);
  localStorage.setItem("theme", setTheme);
  changeThemeInnerHTML();
}
