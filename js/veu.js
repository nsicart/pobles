function reprodueixVeu() {
    const text = document.getElementById("infoText").textContent;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "ca-ES";
    window.speechSynthesis.speak(speech);
}
