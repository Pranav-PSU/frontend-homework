let colorInterval;
let isIntervalRunning = true;
const startButton = document.querySelector('#startButton');
const intervalInput = document.querySelector('#inputSecondsValue');
const bodyClass = document.querySelector('#bodyClass');

function randomColorValue(number) {
  return Math.floor(Math.random() * number);
}

function generateRandomColor() {
  const aColorValue = 0.4;
  const hColorValue = randomColorValue(360);
  const sColorValue = randomColorValue(100);
  const lColorValue = randomColorValue(100);
  return `hsla(${hColorValue}, ${sColorValue}%, ${lColorValue}%, ${aColorValue})`;
}

function changeBackgroundColor() {
  bodyClass.style.backgroundColor = generateRandomColor();
}

function startChangingBackground() {
  const inputSecondsValue = intervalInput.value;

  if (!Number.isNaN(inputSecondsValue) && !(inputSecondsValue <= 0)) {
    colorInterval = setInterval(
      changeBackgroundColor,
      inputSecondsValue * 1000,
    );
  } else {
    alert('Please provide a valid integer');
    isIntervalRunning = true;
  }
}

function changeButtonText() {
  if (!isIntervalRunning) {
    clearInterval(colorInterval);
    startButton.textContent = 'Start';
    startButton.classList.remove('stop');
    startButton.classList.add('start');
  } else {
    startChangingBackground();
    startButton.textContent = 'Stop';
    startButton.classList.remove('start');
    startButton.classList.add('stop');
  }
  isIntervalRunning = !isIntervalRunning;
}

startButton.addEventListener('click', changeButtonText);
