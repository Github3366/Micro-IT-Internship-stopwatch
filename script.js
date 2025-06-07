// Clock
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', { hour12: false });
  document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;

function formatTime(timeInSeconds) {
  const hrs = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(timeInSeconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateStopwatch() {
  stopwatchTime++;
  document.getElementById('stopwatch').textContent = formatTime(stopwatchTime);
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;

  const beep = document.getElementById('beep-sound');
  if (beep) beep.play();
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  document.getElementById('stopwatch').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  const lapTime = formatTime(stopwatchTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(lapItem);
}
