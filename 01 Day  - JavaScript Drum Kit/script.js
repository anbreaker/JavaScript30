window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return; // Stop function from running all together

  audio.currentTime = 0; // Rewind to the start
  audio.play();
  console.log(key);
  key.classList.add('playing');

  setTimeout(() => {}, 0.6);
});

// https://courses.wesbos.com/account/access/5ef37440055a68151fb7cf67/view/194130650

// Minut 12
