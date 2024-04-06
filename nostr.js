if ('speechSynthesis' in window) {
  const utterance = new SpeechSynthesisUtterance('Hello, world!');
  utterance.onstart = function(event) {
    console.log('Speech synthesis started');
  };
  utterance.onend = function(event) {
    console.log('Speech synthesis ended');
  };
  window.speechSynthesis.speak(utterance);
} else {
  console.log('Speech synthesis not supported in this browser.');
}
