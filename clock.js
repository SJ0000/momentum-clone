const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("span");

function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours < 10 ? (hours = "0" + hours) : "";
  minutes < 10 ? (minutes = "0" + minutes) : "";
  seconds < 10 ? (seconds = "0" + seconds) : "";

  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
