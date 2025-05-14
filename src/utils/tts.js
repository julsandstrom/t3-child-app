export function speakAnimalName(name) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(name);
    utterance.lang = "sv-SE"; // Svenska
    speechSynthesis.speak(utterance);
  } else {
    alert("Din webbläsare stödjer inte talsyntes.");
  }
}
