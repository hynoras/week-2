let counterElement = document.getElementById("counter");
let controlElement = document.getElementById("btnControl");
let counter = 0;
let intervalId = 0;

function increaseCounter () {
  counter ++;
  counterElement.innerText = counter;
}

function control () {
  if (controlElement.innerText === 'Start') {
    controlElement.innerText = 'Pause';
    counter = 0;
    intervalId = setInterval(increaseCounter, 300);
  } else {
    controlElement.innerText = 'Start';
    clearInterval(intervalId);
  }
}