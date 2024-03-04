
var socket;
let contents = "";
let pin = false;

function setup() {
 
  createCanvas(400, 400);
  background(0);
  socket = io.connect('http://localhost:3000');
  // We make a named event called 'key' and write an
  // anonymous callback function

  socket.on('mouse', function(pata) {
    console.log("Got: " + pata.t );
    // Draw a blue circle
    fill(0,0,255);
    text(pata.t,random(0,100),random(0,100))
  }
);

}

function draw() {
  fill(255,255,255)
  text(contents, 200,200);
}





function keyPressed(){
  contents = contents + key;
  sendText(contents);
  
}



function sendText(info){
  console.log("send:" + info + ".")

  var pata = {
    t: info
  }

  socket.emit('mouse',pata);
}