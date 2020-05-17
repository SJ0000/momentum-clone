const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

const DIVIDE_DAYS = ["Morning", "Afternoon", "Evening", "Night"];
// 06 ~ 11
// 12 ~ 17
// 18 ~ 20
// 21 ~ 23 || 00 ~ 05
function getNowDevidedDay() {
  const date = new Date();
  const hours = date.getHours();

  if (6 <= hours && hours <= 11) {
    return DIVIDE_DAYS[0];
  } else if (12 <= hours && hours <= 17) {
    return DIVIDE_DAYS[1];
  } else if (18 <= hours && hours <= 20) {
    return DIVIDE_DAYS[2];
  } else {
    return DIVIDE_DAYS[3];
  }
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Good ${getNowDevidedDay()}, ${text}!`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  localStorage.setItem(USER_LS, currentValue);
  paintGreeting(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
