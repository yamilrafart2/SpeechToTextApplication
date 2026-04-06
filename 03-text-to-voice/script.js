function textToAudio() {

    let msg = document.querySelector(".container__textarea").value;
    let speech = new SpeechSynthesisUtterance(msg);

    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);

}