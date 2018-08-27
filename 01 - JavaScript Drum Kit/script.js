// Drumkit code
const codes = {
    '65': 'A',
    '83': 'S',
    '68': 'D',
    '70': 'F',
    '71': 'G',
    '72': 'H',
    '74': 'J',
    '75': 'K',
    '76': 'L'
}

const findAudio = (id) => document.querySelector(`audio[data-key="${id}"]`);
const findScreenKey = (id) => document.querySelector(`div[data-key="${id}"]`);

const getKeyCode = (event) => event.keyCode;

const addHighlightOnInstrument = (key) => {
    const button = findScreenKey(key);
    button.classList.add('key--playing');
};

const removeHighlightOnInstrument = (key) => {
    const button = findScreenKey(key);
    button.classList.remove('key--playing');
};

const playSound = (sound) => {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

document.addEventListener('keydown', (event) => {
    const key = getKeyCode(event);
    if (codes[key] !== undefined) {
        addHighlightOnInstrument(key);
    }
});

document.addEventListener('keyup', (event) => {
    const key = getKeyCode(event);
    if (codes[key] !== undefined) {
        const sound = findAudio(key);
        playSound(sound);
        removeHighlightOnInstrument(key);
    }
});
