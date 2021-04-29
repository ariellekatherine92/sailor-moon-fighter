const scouts = {
    jupiter: { name: 'Sailor Jupiter', img: 'jupiter.jpg' },
    chibiusa: { name: 'Sailor Chibiusa', img: 'chibiusa.jpg' },
    mars: { name: 'Sailor Mars', img: 'mars.png' },
    mercury: { name: 'Sailor Mercury', img: 'mercury.jpg' },
    moon: { name: 'Sailor Moon', img: 'moon.png' },
    neptune: { name: 'Sailor Neptune', img: 'neptune.png' },
    pluto: { name: 'Sailor Pluto', img: 'pluto.jpeg' },
    saturn: { name: 'Sailor Saturn', img: 'saturn.jpeg' },
    uranus: { name: 'Sailor Uranus', img: 'uranus.jpg' },
    venus: { name: 'Sailor Venus', img: 'venus.png' },
};

const scoutsArray = Object.keys(scouts);

const selectScreen = document.getElementById('select-screen');
const fightScreen = document.getElementById('fight-screen');
const selectLeft = document.querySelector('.character-selection .left');
const selectRight = document.querySelector('.character-selection .right');
const prevCharacter = document.querySelector('.characters-wrapper .prev-character');
const currentCharacter = document.querySelector('.characters-wrapper .current-character');
const nextCharacter = document.querySelector('.characters-wrapper .next-character');
const startGame = document.querySelector('header .start-game');

let selected = 'moon';

// Get index of the center selected character
function getSelectedIndex() {
    return scoutsArray.findIndex(scout => scout === selected);
}

// Get previous character in slideshow
function getPrevScout() {
    const selectedIndex = getSelectedIndex();

    if (selectedIndex === 0) {
        return scoutsArray[scoutsArray.length - 1];
    }

    return scoutsArray[selectedIndex - 1];
}

// Get next character in slideshow
function getNextScout() {
    const selectedIndex = getSelectedIndex();

    if (selectedIndex === scoutsArray.length - 1) {
        return scoutsArray[0];
    };

    return scoutsArray[selectedIndex + 1];
}

// Create scout selection images
function setScoutSelections() {
    const prevScout = getPrevScout();
    const nextScout = getNextScout();

    prevCharacter.style.backgroundImage = `url('img/scouts/${scouts[prevScout].img}')`;
    currentCharacter.style.backgroundImage = `url('img/scouts/${scouts[selected].img}')`;
    nextCharacter.style.backgroundImage = `url('img/scouts/${scouts[nextScout].img}')`;
}

setScoutSelections();

// Handle left selection click
selectLeft.addEventListener('click', () => {
    selected = getPrevScout();

    setScoutSelections();
});

// Handle right selection click
selectRight.addEventListener('click', () => {
    selected = getNextScout();

    setScoutSelections();
});

// Start game with selected character
startGame.addEventListener('click', () => {
    selectScreen.style.display = 'none';
    fightScreen.style.display = 'block';

    GameManager.setGameStart(selected);
});