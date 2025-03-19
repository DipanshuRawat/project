document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('text-to-speech');
    const speakBtn = document.getElementById('speak-btn');
    const stopBtn = document.getElementById('stop-btn');
    let utterance = null;

    speakBtn.addEventListener('click', function () {
        const text = textarea.value.trim();
        if (text !== "") {
            if (utterance) {
                window.speechSynthesis.cancel();
            }
            utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    });

    stopBtn.addEventListener('click', function () {
        if (utterance) {
            window.speechSynthesis.cancel();
        }
    });
});