let treats = 0;
let treatsPerClick = 1;
let autoFeeder = false;

const treatDisplay = document.getElementById("treats");
const moodDisplay = document.getElementById("modd");
const feedButton = document.getElementById("feed_button");
const autoFeedButton = document.getElementById("autofeed_button");
const goldenBoneButton = document.getElementById("golden_bone_button");

function updateDisplay() {
    treatDisplay.textContent = `Treats: ${treats}`;
    updateMood();
}

function updateMood() {
    if (treats >= 200) {
        moodDisplay.textContent = "Mood: Excited! 🤪🐾"
    }
    else if (treats >= 150) {
        moodDisplay.textContent = "Mood: Happy! 💗🦴"
    }
    else if (treats >= 100) {
        moodDisplay.textContent = "Mood: Satisfied! 😊🦮"
    }
    else {
        moodDisplay.textContent = "Mood: Hungry! 😡🐶"
    }
}

feedButton.addEventListener("click", () => {
    treats += treatsPerClick;
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