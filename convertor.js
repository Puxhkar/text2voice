 document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById("textToConvert");
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener('click', function () {
        const speechSynth = window.speechSynthesis;
        const enteredText = text.value.trim();
        const error = document.querySelector('.error-para');

        if (!enteredText) {
            error.textContent = "Nothing to Convert! Enter text in the text area.";
            return;
        }

        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        convertBtn.textContent = "Sound is Playing...";
        
        newUtter.onend = () => {
            convertBtn.textContent = "Play Converted Sound";
        document.getElementById("muteBtn").addEventListener("click", function() {
    const music = document.getElementById("bgMusic");
    if (music.muted) {
        music.muted = false;
        this.textContent = "🔊 Mute";
    } else {
        music.muted = true;
        this.textContent = "🔇 Unmute";
    }
});

        };
    });
});
