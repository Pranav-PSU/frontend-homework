let interval;
let isIntervalRunning = false;

function randomColorValue(number) {
  return Math.floor(Math.random() * number);
}

function generateRandomColor() {
  const a = 0.4;
  let h = randomColorValue(360);
  let s = randomColorValue(100);
  let l = randomColorValue(100);
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

function startInterval() {
  const intervalInput = document.getElementById("inputSecondsValue");
  const inputSecondsValue = intervalInput.value;

  if (!Number.isNaN(inputSecondsValue) && !(inputSecondsValue <= 0))
    interval = setInterval(changeBackgroundColor, inputSecondsValue * 1000);
  else {
    alert("Please provide a valid integer");
    isIntervalRunning = true;
  }
}

function ChangeButtonText() {
  const toggleBtn = document.getElementById("startButton");
  if (isIntervalRunning) {
    clearInterval(interval);
    toggleBtn.textContent = "Start";
    toggleBtn.classList.remove("stop");
    toggleBtn.classList.add("start");
  } else {
    startInterval();
    toggleBtn.textContent = "Stop";
    toggleBtn.classList.remove("start");
    toggleBtn.classList.add("stop");
  }
  isIntervalRunning = !isIntervalRunning;
}

document
  .getElementById("startButton")
  .addEventListener("click", ChangeButtonText);
