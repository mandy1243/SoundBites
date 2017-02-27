// P5 STUFF
var beat01;
var beat02;
var beat03;
var beat04;
var beat05;

function setup() {
  var can = createCanvas(600, 400);
  can.position(windowWidth/4, windowHeight/4);

  // background(0);
  song = loadSound('EmpireBeat01.mp3');
  song02 = loadSound('Brazilion01.mp3');
  song03 = loadSound('EmpireBeat02.mp3');
  song04 = loadSound('EmpireBeat03.mp3');
  song05 = loadSound('MellowBeat01.mp3');
 
  beat01 = new Beat();
  beat02 = new Beat1();
  beat03 = new Beat2();
  beat04 = new Beat3();
  beat05 = new Beat4();

  socket.on('mouse', newSound);

}

function newSound(data){
    console.log("Recieved:" + data.x + ", " + data.y);
    var b = dist(data.x, data.y, 100, 100);
    if (b < 24) {
      console.log("loop was entered.")
      // this.col = color(255, 0, 200);
      if (song.isPlaying() ) { // .isPlaying() returns a boolean
        song.stop();
        this.col = color("#C9F9FF");
        console.log("Button has been clicked.")
    } else {
      song.play();
       this.col = color(255, 0, 200);
      }
    }

    var c = dist(data.x, data.y, 200, 100);
    if (c < 24) {
      // this.col = color(255, 0, 200);
      if (song02.isPlaying() ) { // .isPlaying() returns a boolean
        song02.stop();
        this.col = color(255, 100);
    } else {
      song02.play();
       this.col = color(255, 0, 200);
      }
    }

    var d = dist(data.x, data.y, 300, 100);
    if (d < 24) {
      // this.col = color(255, 0, 200);
      if (song03.isPlaying() ) { // .isPlaying() returns a boolean
        song03.stop();
        this.col = color(255, 100);
    } else {
      song03.play();
       this.col = color(255, 0, 200);
      }
    }

    var g = dist(data.x, data.y, 400, 100);
    if (g < 24) {
      // this.col = color(255, 0, 200);
      if (song04.isPlaying() ) { // .isPlaying() returns a boolean
        song04.stop();
        this.col = color(255, 100);
    } else {
      song04.play();
       this.col = color(255, 0, 200);
    }
  }

    var h = dist(mouseX, mouseY, 500, 100);
    if (h < 24) {
      // this.col = color(255, 0, 200);
      if (song05.isPlaying() ) { // .isPlaying() returns a boolean
        song05.stop();
        this.col = color(255, 100);
    } else {
      song05.play();
       this.col = color(255, 0, 200);
    }
  }
}

function mousePressed() {
  beat01.clicked();
  beat02.clicked();
  beat03.clicked();
  beat04.clicked();
  beat05.clicked(); 

  console.log("Sending:" + " " + mouseX + " " + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);
}

function draw() {
  background(0);
  beat01.display();
  beat02.display();
  beat03.display();
  beat04.display();
  beat05.display();
  
}

// BUTTON CONSTRUCTION
function Beat() {
  this.col = color(255, 100);

  this.display = function(){
    stroke(255);
    fill(this.col);
    ellipse(500, 100, 48, 48);
  }
  this.clicked = function() {
    var d = dist(mouseX, mouseY, 500, 100);
    if (d < 24) {
      // this.col = color(255, 0, 200);
      if (song.isPlaying() ) { // .isPlaying() returns a boolean
        song.stop();
        this.col = color(255, 100);
    } else {
      song.play();
       this.col = color("#9736E8");
    }
    }
  }
}

function Beat1(){
  this.col = color(255, 100);

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(300, 100, 48, 48);
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, 300, 100);
    if (d < 24) {
      // this.col = color(255, 0, 200);
      if (song02.isPlaying() ) { // .isPlaying() returns a boolean
        song02.stop();
        this.col = color(255, 100);
    } else {
      song02.play();
       this.col = color("#FCFF0D");
    }
    }
  }
}

function Beat2(){
  this.col = color(255, 100);
  console.log('this is working');

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(100, 100, 48, 48);
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, 100, 100);
    if (d < 24) {
      // this.col = color(255, 0, 200);
      if (song03.isPlaying() ) { // .isPlaying() returns a boolean
        song03.stop();
        this.col = color(255, 100);
    } else {
      song03.play();
       this.col = color("#B4FF0D");
    }
    }
  }
}

function Beat3(){
  this.col = color(255, 100);
  console.log('this is working');

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(200, 100, 48, 48);
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, 200, 100);
    if (d < 24) {
      // this.col = color(255, 0, 200);
      if (song04.isPlaying() ) { // .isPlaying() returns a boolean
        song04.stop();
        this.col = color(255, 100);
    } else {
      song04.play();
       this.col = color("#FF0000");
    }
    }
  }
}

function Beat4(){
  this.col = color(255, 100);
  console.log('this is working');

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(400, 100, 48, 48);
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, 400, 100);
    if (d < 24) {
      // this.col = color(255, 0, 200);
      if (song05.isPlaying() ) { // .isPlaying() returns a boolean
        song05.stop();
        this.col = color(255, 100);
    } else {
      song05.play();
       this.col = color("#0022E8");
    }
    }
  }
}
