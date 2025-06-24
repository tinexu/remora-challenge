let treats = 0;
let treatsPerClick = 1;
let autoFeeder = false;

const treatDisplay = document.getElementById("treats");
const moodDisplay = document.getElementById("mood");
const feedButton = document.getElementById("feed_button");
const autoFeedButton = document.getElementById("autofeed_button");
const goldenBoneButton = document.getElementById("golden_bone_button");

const dogImg = document.getElementById("dog-image");

const dogThoughts = [
    "I love snacks!",
    "Squirrel??",
    "You're the best hooman",
    "Bark bark bark!",
    "I'll do another trick!",
    "Zoomies!!!",
    "More treats, please!",
    "Is it dinner time yet???"
];
const thoughtsDisplay = document.getElementById("thoughts");
let clickCount = 0;

function updateDisplay() {
    treatDisplay.textContent = `Treats: ${treats}`;
    updateMood();
}

function updateMood() {
    if (treats >= 15) {
        moodDisplay.textContent = "Mood: Excited! 🤪🐾"
        dogImg.src = "excited.png";
    }
    else if (treats >= 10) {
        moodDisplay.textContent = "Mood: Happy! 💗🦴"
        dogImg.src = "happy.png";
    }
    else if (treats >= 5) {
        moodDisplay.textContent = "Mood: Satisfied! 😊🦮"
        dogImg.src = "satisfied.png";
    }
    else {
        moodDisplay.textContent = "Mood: Hungry! 😡🐶"
        dogImg.src = "angry.png";
    }
}

feedButton.addEventListener("click", () => {
    treats += treatsPerClick;
    clickCount++;

    if (clickCount % 2 == 0) {
        const random = dogThoughts[Math.floor(Math.random() * dogThoughts.length)]
        thoughtsDisplay.textContent = random;
    }

    updateDisplay();
});

autoFeedButton.addEventListener("click", () => {
    if ((treats >= 100) && (!autoFeeder)) {
        treats -= 100;
        autoFeeder = true;
        setInterval(() => {
            treats += 1;
            updateDisplay();
        }, 500)
        autoFeeder.disabled = true;
        updateDisplay();
    }
});

goldenBoneButton.addEventListener("click", () => {
    if (treats >= 300) {
        treats -= 300;
        treatsPerClick *= 3;
        goldenBoneButton.disabled = true;
        updateDisplay();
    }
});

updateDisplay();