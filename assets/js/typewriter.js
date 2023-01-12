
const phrases = [
    'A Junior Full-Stack Developer',
    'A Computer Science Student',
    'Based On The East Coast',
];
const element = document.getElementById('typewriter');

let sleepTime = 100;
let index = 0;
let word;

const writeLoop = async () => {
    while (true) {
        word = phrases[index];
        
        await sleep(sleepTime * 5);

        for (let i = 0; i < word.length; i++) {
            element.innerText = word.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 15)
        
        for (let i = word.length; i > 0; i--) {
            element.innerText = word.substring(0, i - 1);
            await sleep(sleepTime / 2);
        }

        if (index === phrases.length - 1) {
            index = 0;
        }
        else {
            index ++;
        }

        await sleep(sleepTime * 5);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

writeLoop();