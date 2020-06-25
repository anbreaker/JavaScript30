const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(secondHand, minHand, hourHand) {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  console.log(`${hour}:${mins}:${seconds}`);

  showTime(hour, mins, seconds);
  return hour, mins, seconds;
}

function showTime(hour, mins, seconds) {
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  document.getElementById('timeNow').innerHTML = `${hour}:${mins}:${seconds}`;
}

setInterval(() => {
  setDate(secondHand, minHand, hourHand);
}, 1000);
