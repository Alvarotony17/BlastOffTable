document.body.style.backgroundColor = "#fff";
var screenWidth = 1920;
var screenHeight = 1080;

var outspaceX = 120;
var outspaceY = 120;
var size = 3;

//group1
var c = document.getElementById("myCanvas");
c.addEventListener("click", hover);
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(outspaceX, outspaceY, 25 * size, 1.4, 2.13 * Math.PI);
ctx.strokeStyle = "white";
ctx.lineWidth = 9;
ctx.shadowBlur = 10;
ctx.shadowColor = "skyblue";
ctx.stroke();

var c2 = document.getElementById("myCanvas");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.arc(screenWidth - outspaceX, outspaceY, 25 * size, .875 * Math.PI, 2.5 * Math.PI);
ctx2.stroke();
//end group1


var distanceB = 4;
var XB = 60;
var YB = 50;

var c3 = document.getElementById("myCanvas");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(outspaceX * distanceB, outspaceY + YB, size * 20, 2.3, .27 * Math.PI);
ctx3.strokeStyle = "white";
ctx3.stroke();

var c4 = document.getElementById("myCanvas");
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.arc(screenWidth - outspaceX * distanceB, outspaceY + YB, size * 20, 2.4, 2.2 * Math.PI);
ctx4.strokeStyle = "white";
ctx4.lineWidth = 9;
ctx4.shadowBlur = 10;
ctx4.shadowColor = "white";
ctx4.stroke();



var XC = 5.5;
var YC = 90;
var sizeC = 19;

var c3 = document.getElementById("myCanvas");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(outspaceX * XC, outspaceY + YC, size * sizeC, 2.763, 2.5 * Math.PI);
ctx3.strokeStyle = "skyblue";
ctx3.lineWidth = 9;
ctx3.shadowBlur = 10;
ctx3.shadowColor = "white";
ctx3.stroke();

var c4 = document.getElementById("myCanvas");
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.arc(screenWidth - outspaceX * XC, outspaceY + YC, size * sizeC, 1.58, 2.15 * Math.PI);
ctx4.strokeStyle = "skyblue";
ctx4.lineWidth = 9;
ctx4.shadowBlur = 10;
ctx4.shadowColor = "white";
ctx4.stroke();





var XD = 1.5;
var YD = 4;
var sizeD = 23;

var c3 = document.getElementById("myCanvas");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(outspaceX * XD, outspaceY * YD, size * sizeD, 24.5, 4.7);
ctx3.strokeStyle = "skyblue";
ctx3.lineWidth = 9;
ctx3.shadowBlur = 10;
ctx3.shadowColor = "white";
ctx3.stroke();

var c4 = document.getElementById("myCanvas");
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.arc(screenWidth - (outspaceX * XD), outspaceY * YD, size * sizeD, Math.PI * 1.5, 3.2 * Math.PI);
ctx4.strokeStyle = "skyblue";
ctx4.lineWidth = 9;
ctx4.shadowBlur = 10;
ctx4.shadowColor = "white";
ctx4.stroke();



//a
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(190, 145);
ctx.lineTo(440, 260);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(1807, 110);
ctx.lineTo(screenWidth - 440, 260);
ctx.stroke();
//a



//b
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(480, 170);
ctx.lineTo(480, 310);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 480, 170);
ctx.lineTo(screenWidth - 480, 310);
ctx.stroke();
//b

//c
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(480, 307);
ctx.lineTo(660, 210);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 480, 307);
ctx.lineTo(screenWidth - 660, 210);
ctx.stroke();
//c


//d
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(665, 265);
ctx.lineTo(665, 400);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 665, 265);
ctx.lineTo(screenWidth - 665, 400);
ctx.stroke();
//d


//e
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(175, 407);
ctx.lineTo(180, 488);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 175, 407);
ctx.lineTo(screenWidth - 175, 488);
ctx.stroke();
//e

//f
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(232.5, 445);
ctx.lineTo(295, 410);
ctx.stroke();


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 232.5, 445);
ctx.lineTo(screenWidth - 295, 410);
ctx.stroke();
//f

//g
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(205, 366);
ctx.lineTo(500, 500);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 205, 366);
ctx.lineTo(screenWidth - 500, 500);
ctx.stroke();
//g

//h
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(495, 500);
ctx.lineTo(490, 438);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 495, 500);
ctx.lineTo(screenWidth - 495, 438);
ctx.stroke();
//h

//i
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(410, 395);
ctx.lineTo(850, 622);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 410, 395);
ctx.lineTo(screenWidth - 850, 622);
ctx.stroke();

//i

//j
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(350, 433);
ctx.lineTo(350, 324);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 350, 433);
ctx.lineTo(screenWidth - 350, 324);
ctx.stroke();
//j

//l
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(440, 280);
ctx.lineTo(390, 320);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 440, 280);
ctx.lineTo(screenWidth - 390, 320);
ctx.stroke();

//l

//m
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(390, 316.5);
ctx.lineTo(650, 450);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 390, 316.5);
ctx.lineTo(screenWidth - 650, 450);
ctx.stroke();

//m

//n
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(425, 600);
ctx.lineTo(780, 786);
ctx.lineCap = "round";

ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 425, 600);
ctx.lineTo(screenWidth - 780, 786);
ctx.lineCap = "round";

ctx.stroke();


//n

//o

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(466, 718);
ctx.lineTo(774, 870);
ctx.lineCap = "round";

ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 466, 718);
ctx.lineTo(screenWidth - 774, 870);
ctx.lineCap = "round";

ctx.stroke();


//o


//p
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(470, 815);
ctx.lineTo(774, 960);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 470, 815);
ctx.lineTo(screenWidth - 774, 960);
ctx.lineCap = "round";

ctx.stroke();


//p



//q //small lines////
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(380, 574);
ctx.lineTo(412, 593);
ctx.lineCap = "round";
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 380, 574);
ctx.lineTo(screenWidth - 412, 593);
ctx.lineCap = "round";
ctx.stroke();


//q

//r

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(416, 690);
ctx.lineTo(454, 711);
ctx.lineCap = "round";
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 416, 690);
ctx.lineTo(screenWidth - 454, 711);
ctx.lineCap = "round";
ctx.stroke();

//r


//r

//s



/////



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(650, 450, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 650, 450, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();






var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(350, 324, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 350, 324, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();





var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(480, 170, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 480, 170, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();






var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(205, 366, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 205, 366, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();







var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(410, 395, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 410, 395, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(660, 208, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 660, 208, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 440, 270, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();






//top big node

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(961, 270, 64, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "navyblue";
ctx.fill();


//top top circle
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(961, 378, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();


//top center
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(961, 490, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

//left bottom
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(873, 633, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 873, 633, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();



//left Top
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(873, 541, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 873, screenHeight - 541, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

//bottom center
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(961, 672, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();


/////////////////////////////lower part

//bottom center
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(961, 822, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

//left bottom
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(873, 783, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(screenWidth - 873, 783, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();

//bottom circe small lines

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(900, 802);
ctx.lineTo(928, 815);
ctx.lineCap = "round";
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 900, 802);
ctx.lineTo(screenWidth - 928, 815);
ctx.lineCap = "round";
ctx.stroke();





//cirle lines


//top
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(925, 504);
ctx.lineTo(900, 520);
ctx.lineCap = "round";
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 925, 504);
ctx.lineTo(screenWidth - 900, 520);
ctx.lineCap = "round";
ctx.stroke();

//middle

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(873, 570);
ctx.lineTo(873, 600);
ctx.lineCap = "round";
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 873, 570);
ctx.lineTo(screenWidth - 873, 600);
ctx.lineCap = "round";
ctx.stroke();


//bottom

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(900, 652);
ctx.lineTo(928, 665);
ctx.lineCap = "round";
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(screenWidth - 900, 652);
ctx.lineTo(screenWidth - 928, 665);
ctx.lineCap = "round";
ctx.stroke();



//center line in circle
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(961, 536);
ctx.lineTo(961, 620);
ctx.lineCap = "round";
ctx.stroke();

//line above cirlce
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(961, 410);
ctx.lineTo(961, 456);
ctx.lineCap = "round";
ctx.stroke();




// semi-cirlce


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(960,268, 36.5 * size, 2 * Math.PI, 2.36 * Math.PI);
ctx.stroke();


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(960,268, 36.5 * size, 3 * Math.PI, 1.45* Math.PI);
ctx.stroke();


// semi-circle



function pick(event) {

  var rgba = "#000";
  c.style.background =  rgba;
  c.textContent = rgba;
}

c.addEventListener('mousemove', pick);


function hover(e) {
    var x = e.offsetX;
    var y = e.offsetY;

    console.log(e);

}
//
//context.beginPath();
//        context.moveTo(0,0);
//        context.lineTo(300,0);
//        context.stroke();
//        context.rotate(Math.PI/3);
//        context.beginPath();
//        context.moveTo(0,0);
//        context.lineTo(300,0);
//        context.stroke();
//        context.rotate(Math.PI/3);
//        context.beginPath();
//        context.moveTo(0,0);
//        context.lineTo(300,0);
//        context.stroke();

//var c6 = document.getElementById("myCanvas");
//var c2 = c6.getContext('2d');
//c2.fillStyle = '#f00';
//c2.beginPath();
//c2.moveTo(300,);
//c2.lineTo(100,50);
//c2.lineTo(50, 100);
//c2.lineTo(0, 90);
//c2.closePath();
//c2.fill();
//c2.stroke();

//
//var c = document.getElementById("myCanvas");
//var c = c.getContext("2d");
//c.beginPath();
//c.moveTo(500, 300);
//c.lineTo(300, 75);
//c.setLineDash([50,1]);
//c.stroke();
// CANVAS MATHS
var x = screenWidth / 2,
    y = screenHeight / 2,
    radius = 120,
    circum = Math.PI * 2,
    start = Math.PI / -2, // Start position (top)
    finish = 77, // Finish (in %)
    curr = 0; // Current position (in %)

// CANVAS ANIMATION

// Enables browser-decided smooth animation (60fps)
var raf =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
window.requestAnimationFrame = raf;


function animate(draw_to) {
     // Clear off the canvas
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  // Start over
  ctx.beginPath();
  // arc(x, y, radius, startAngle, endAngle, anticlockwise)
  // Re-draw from the very beginning each time so there isn't tiny line spaces between each section (the browser paint rendering will probably be smoother too)
  ctx.arc(x, y, radius, start, draw_to, false);
  // Draw
  ctx.stroke();
  // Increment percent
  curr++;
  // Animate until end
  if (curr < finish + 1) {
    // Recursive repeat this function until the end is reached
    requestAnimationFrame(function () {
      animate(circum * curr / 100 + start);
    });
  }
    
    console.log("methodCalled")
}



//animate();




