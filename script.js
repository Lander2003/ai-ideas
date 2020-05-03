const textInput = document.getElementById("text");
const play = document.getElementById("play-text");

play.addEventListener("click", function(){
 if(textInput.value){
  playText(textInput.value);
} else {
  playText("Stop playing and empty field idiot");
}
});

function playText(text){
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
}
