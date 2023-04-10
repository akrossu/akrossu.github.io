const phrases = [
  'A Junior Full-Stack Developer',
  'A Computer Science Student',
  'Based On The East Coast',
];
const element = document.getElementById('typewriter');

let sleepTime = 50;
let index = 0;
let word;

const writeLoop = async () => {
  // Sleeps on initial load
  await sleep(sleepTime * 10);

  while (true) {
    word = phrases[index];

    for (let i = 0; i < word.length; i++) {
      element.innerText = word.substring(0, i + 1);
      // Speed of typed chars
      await sleep(sleepTime);
    }

    // While full await
    await sleep(sleepTime * 30)

    for (let i = word.length; i > 0; i--) {
      element.innerText = word.substring(0, i - 1);
      // Speed of deleted chars
      await sleep(sleepTime / 1.5);
    }

    if (index === phrases.length - 1) {
      index = 0;
    } else {
      index++;
    }

    // While empty await 
    await sleep(sleepTime * 12);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

writeLoop();