x = 0;
y = 0;

draw_apple = "";

var apple = img="apple.png";

var speak_data = "";

var to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

screen_width = window.innerWidth;
screen_height = window.innerHeight;

function preload()
{
  function loadImage()
  {
    loadImage.console();
  }
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(consent);
    if(Number.isInteger(to_number));

    draw_apple =="set";

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
  }
}

function draw() {
  if(draw_apple == "not set")
  {
    document.getElementById("status").innerHTML = to_number + " apple not drawn. ";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function createCanvas()
{
  screen_width; 150;
  screen_height; 150;
  
  canvas.position(0, 150);
}