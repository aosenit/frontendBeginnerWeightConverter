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
  if (card.classList.contains("light")) {
    theme.innerHTML = "L";
  } else {
    theme.innerHTML = "D";
  }
}

changeThemeInnerHTML();

function themeChange() {
  card.classList.toggle("light");
  changeThemeInnerHTML();
}
