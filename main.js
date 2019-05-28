var screenWidth = 1920;
var screenHeight = 1080;

var deadBlue = "#18517E";
var deadBlue2 = "#C8F0FD";
var litBlue = "#49DAFB";
var nodeBlue = "#062231";


var pressBlue = "#FDFDFD";

var deadRed = "#21100E";
var litRed = "#F3262D";

var outspaceX = 120;
var outspaceY = 120;
var size = 3;

var miniNodes = [];
var vertices = [];



//group1
var c = document.getElementById("myCanvas");
c.addEventListener("click", hover);
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(outspaceX, outspaceY, 25 * size, 1.4, 2.13 * Math.PI);
ctx.moveTo(190, 145);
ctx.lineTo(440, 260);
ctx.strokeStyle = deadRed;
ctx.lineWidth = 9;
//ctx.shadowBlur = 500;
//ctx.shadowColor = deadBlue;
ctx.stroke();

ctx.beginPath();
ctx.arc(screenWidth - outspaceX, outspaceY, 25 * size, .875 * Math.PI, 2.5 * Math.PI);
ctx.stroke();
//end group1


var distanceB = 4;
var XB = 60;
var YB = 50;

ctx.beginPath();
ctx.arc(outspaceX * distanceB, outspaceY + YB, size * 20, 2.3, .27 * Math.PI);
//ctx.strokeStyle = deadBlue;

ctx.stroke();

ctx.beginPath();
ctx.arc(screenWidth - outspaceX * distanceB, outspaceY + YB, size * 20, 2.4, 2.2 * Math.PI);
ctx.stroke();


var XC = 5.5;
var YC = 90;
var sizeC = 19;

ctx.beginPath();
ctx.arc(outspaceX * XC, outspaceY + YC, size * sizeC, 2.763, 2.5 * Math.PI);
ctx.lineTo(outspaceX * XC, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(screenWidth - outspaceX * XC, 400);
ctx.arc(screenWidth - outspaceX * XC, outspaceY + YC, size * sizeC, 1.58, 2.15 * Math.PI);
ctx.stroke();


var XD = 1.5;
var YD = 4;
var sizeD = 23;


ctx.beginPath();
ctx.moveTo(296, 410);
ctx.arc(outspaceX * XD, outspaceY * YD, size * sizeD, 24.5, 4.7);
ctx.moveTo(175, 407);
ctx.lineTo(175, 488);
ctx.stroke();


ctx.beginPath();
ctx.arc(screenWidth - (outspaceX * XD), outspaceY * YD, size * sizeD, Math.PI * 1.5, 3.2 * Math.PI);
ctx.lineTo(screenWidth - 295, 410);
ctx.moveTo(screenWidth - 175, 407);
ctx.lineTo(screenWidth - 175, 488);
ctx.stroke();


//small fill on rightside
ctx.beginPath();
ctx.arc(screenWidth - 440, 270, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = deadRed;
ctx.fill();


//top big node

ctx.beginPath();
ctx.arc(961, 270, 64, 0, 2 * Math.PI);
ctx.stroke();
//ctx.fillStyle = deadRed;
ctx.strokeStyle = deadRed;
ctx.fill();



//////////////////////
//top top circle


ctx.beginPath();
ctx.arc(961, 378, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: 961,
    y: 378
});

//top center
ctx.beginPath();
ctx.arc(961, 490, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: 961,
    y: 490
});

//left bottom
ctx.beginPath();
ctx.arc(873, 633, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: 873,
    y: 633
});


ctx.beginPath();
ctx.arc(screenWidth - 873, 633, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: screenWidth - 873,
    y: 633
});

//left Top
ctx.beginPath();
ctx.arc(873, 541, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: 873,
    y: 541
});

ctx.beginPath();
ctx.arc(screenWidth - 873, screenHeight - 541, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: screenWidth - 873,
    y: screenHeight - 541
});

//bottom center
ctx.beginPath();
ctx.arc(961, 672, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = deadRed;
ctx.fill();
miniNodes.push({
    x: 961,
    y: 672
});


/////////////////////////////////////////lower part

///////////////////////////bottom center

//bottom bottom center
ctx.beginPath();
ctx.arc(961, 822, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: 961,
    y: 822
});

//left bottom
ctx.beginPath();
ctx.arc(873, 783, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: 873,
    y: 783
});

ctx.beginPath();
ctx.arc(screenWidth - 873, 783, 12, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
miniNodes.push({
    x: screenWidth - 873,
    y: 783
});


//bottom circe small lines
ctx.beginPath();
ctx.moveTo(900, 802);
ctx.lineTo(928, 815);
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(screenWidth - 900, 802);
ctx.lineTo(screenWidth - 928, 815);
ctx.lineCap = "round";
ctx.stroke();



//main center cirle lines


//top
ctx.beginPath();
ctx.moveTo(925, 504);
ctx.lineTo(900, 520);
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(screenWidth - 925, 504);
ctx.lineTo(screenWidth - 900, 520);
ctx.lineCap = "round";
ctx.stroke();

//middle

ctx.beginPath();
ctx.moveTo(873, 570);
ctx.lineTo(873, 600);
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(screenWidth - 873, 570);
ctx.lineTo(screenWidth - 873, 600);
ctx.lineCap = "round";
ctx.stroke();


//bottom
ctx.beginPath();
ctx.moveTo(900, 652);
ctx.lineTo(928, 665);
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(screenWidth - 900, 652);
ctx.lineTo(screenWidth - 928, 665);
ctx.lineCap = "round";
ctx.stroke();



//center line in circle
ctx.beginPath();
ctx.moveTo(961, 536);
ctx.lineTo(961, 620);
ctx.lineCap = "round";
ctx.stroke();

//line above cirlce
ctx.beginPath();
ctx.moveTo(961, 410);
ctx.lineTo(961, 456);
ctx.lineCap = "round";
ctx.stroke();




// semi-cirlce
ctx.beginPath();
ctx.arc(960, 268, 36.5 * size, 2 * Math.PI, 2.36 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(960, 268, 36.5 * size, 3 * Math.PI, 1.45 * Math.PI);
ctx.stroke();


// semi-circle


//generate lines

function gernerateLines() {
    //x1 & x5 & x6
    ctx.beginPath();
    ctx.moveTo(190, 145);
    ctx.lineTo(440, 260);
    ctx.moveTo(440, 280);
    ctx.lineTo(390, 320);
    ctx.moveTo(390, 320);
    ctx.lineTo(650, 450);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(1807, 110);
    ctx.lineTo(screenWidth - 440, 260);
    ctx.moveTo(screenWidth - 440, 280);
    ctx.lineTo(screenWidth - 390, 320);
    ctx.moveTo(screenWidth - 390, 320);
    ctx.lineTo(screenWidth - 650, 450);
    ctx.stroke();
    //x1 & x5 & x6

    //x2 & x3
    ctx.beginPath();
    ctx.moveTo(480, 170);
    ctx.lineTo(480, 310);
    ctx.moveTo(480, 310)
    ctx.lineTo(660, 210);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 480, 170);
    ctx.lineTo(screenWidth - 480, 310);
    ctx.moveTo(screenWidth - 480, 310);
    ctx.lineTo(screenWidth - 660, 210);

    ctx.stroke();
    //x2 & x3

    //x3
    ctx.moveTo(480, 307);
    ctx.lineTo(660, 210);
    ctx.moveTo(screenWidth - 480, 307);
    ctx.lineTo(screenWidth - 660, 210);
    //x3

    //x4
    ctx.beginPath();
    ctx.moveTo(665, 265);
    ctx.lineTo(665, 400);
    //    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 665, 265);
    ctx.lineTo(screenWidth - 665, 400);
    //    ctx.stroke();
    //x4

    //x5 & x6
    ctx.moveTo(440, 280);
    ctx.lineTo(390, 320);
    ctx.moveTo(390, 320);
    ctx.lineTo(650, 450);

    ctx.moveTo(screenWidth - 440, 280);
    ctx.lineTo(screenWidth - 390, 320);
    ctx.moveTo(screenWidth - 390, 320);
    ctx.lineTo(screenWidth - 650, 450);
    //x5 & x6

    //x6
    ctx.moveTo(390, 316.5);
    ctx.lineTo(650, 450);
    ctx.moveTo(screenWidth - 390, 316.5);
    ctx.lineTo(screenWidth - 650, 450);
    //x6

    //x7 & x11
    ctx.beginPath();
    ctx.moveTo(205, 366);
    ctx.lineTo(500, 500);
    ctx.moveTo(500, 500);
    ctx.lineTo(500, 445);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 205, 366);
    ctx.lineTo(screenWidth - 500, 500);
    ctx.moveTo(screenWidth - 500, 500);
    ctx.lineTo(screenWidth - 500, 445);
    ctx.stroke();
    //x7 & x11

    //x8
    ctx.beginPath();
    ctx.moveTo(350, 433);
    ctx.lineTo(350, 324);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 350, 433);
    ctx.lineTo(screenWidth - 350, 324);
    ctx.stroke();
    //x8

    //x9
    ctx.beginPath();
    ctx.moveTo(175, 407);
    ctx.lineTo(180, 488);
    //    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 175, 407);
    ctx.lineTo(screenWidth - 175, 488);
    //    ctx.stroke();
    //x9

    //x10
    ctx.beginPath();
    ctx.moveTo(232.5, 445);
    ctx.lineTo(295, 410);
    //    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 232.5, 445);
    ctx.lineTo(screenWidth - 295, 410);
    //    ctx.stroke();
    //x10

    //x11
    ctx.moveTo(495, 500);
    ctx.lineTo(490, 438);
    ctx.moveTo(screenWidth - 495, 500);
    ctx.lineTo(screenWidth - 495, 438);
    //x11

    //x12
    ctx.beginPath();
    ctx.moveTo(410, 395);
    ctx.lineTo(850, 622);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 410, 395);
    ctx.lineTo(screenWidth - 850, 622);
    ctx.stroke();
    //x12


    //x13
    ctx.beginPath();
    ctx.moveTo(380, 574);
    ctx.lineTo(412, 593);
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 380, 574);
    ctx.lineTo(screenWidth - 412, 593);
    ctx.lineCap = "round";
    ctx.stroke();
    //x13

    //x14
    ctx.beginPath();
    ctx.moveTo(425, 600);
    ctx.lineTo(780, 786);
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 425, 600);
    ctx.lineTo(screenWidth - 780, 786);
    ctx.lineCap = "round";
    ctx.stroke();

    vertices.push({
        x: 780,
        y: 786
    });
    vertices.push({
        x: 425,
        y: 600
    });
    vertices.push({
        x: 412,
        y: 593
    });
    vertices.push({
        x: 380,
        y: 574
    });



    //x14

    //x15
    ctx.beginPath();
    ctx.moveTo(416, 690);
    ctx.lineTo(454, 711);
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 416, 690);
    ctx.lineTo(screenWidth - 454, 711);
    ctx.lineCap = "round";
    ctx.stroke();
    //x15

    //x16
    ctx.beginPath();
    ctx.moveTo(466, 718);
    ctx.lineTo(774, 870);
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 466, 718);
    ctx.lineTo(screenWidth - 774, 870);
    ctx.lineCap = "round";
    ctx.stroke();
    //x16


    //x17
    ctx.beginPath();
    ctx.moveTo(470, 815);
    ctx.lineTo(774, 960);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(screenWidth - 470, 815);
    ctx.lineTo(screenWidth - 774, 960);
    ctx.lineCap = "round";
    ctx.stroke();
    //x17


}

function smallNodes() {

    //1
    ctx.beginPath();
    ctx.arc(480, 170, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(screenWidth - 480, 170, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    miniNodes.push({
        x: 480,
        y: 170
    });
    miniNodes.push({
        x: screenWidth - 480,
        y: 170
    });

    //2

    ctx.beginPath();
    ctx.arc(445.5, 270, 10, 4.3, 2.6 * Math.PI);
    ctx.stroke();

    miniNodes.push({
        x: screenWidth - 440,
        y: 270
    });
    //
    //    ctx.beginPath();
    //    ctx.arc(screenWidth - 660, 208, 10, 0, 2 * Math.PI);
    //    ctx.stroke();
    //    ctx.fillStyle = "skyblue";
    //    ctx.fill();

    //3

    ctx.beginPath();
    ctx.arc(205, 366, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(screenWidth - 205, 366, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    miniNodes.push({
        x: 205,
        y: 366
    });
    miniNodes.push({
        x: screenWidth - 205,
        y: 366
    });


    //4

    ctx.beginPath();
    ctx.arc(350, 324, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(screenWidth - 350, 324, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    miniNodes.push({
        x: 350,
        y: 324
    });
    miniNodes.push({
        x: screenWidth - 350,
        y: 324
    });



    //5
    ctx.beginPath();
    ctx.arc(410, 395, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(screenWidth - 410, 395, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    miniNodes.push({
        x: 410,
        y: 395
    });
    miniNodes.push({
        x: screenWidth - 410,
        y: 395
    });

    //6
    ctx.beginPath();
    ctx.arc(650, 450, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(screenWidth - 650, 450, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    miniNodes.push({
        x: 650,
        y: 450
    });
    miniNodes.push({
        x: screenWidth - 650,
        y: 450
    });


}

gernerateLines();
smallNodes();




var animationDuration = 1;

var count = 1;
var draw = setInterval(function () {


    //    var pt0 = miniNodes[0].y;
    //    console.log(pt0);
    for (var i = 0, k = 0; i < miniNodes.length; k++, i++) {
        var pointX = miniNodes[i].x;
        var pointY = miniNodes[i].y;
        ctx.beginPath();

        var randomNum = Math.floor(Math.random() * 25) + 1;

        if (randomNum % 2) {
            ctx.arc(pointX, pointY, 10, 0, 2 * Math.PI);
        }

        ctx.stroke();
        if (count % 2) {
            ctx.fillStyle = deadRed;
            ctx.strokeStyle = deadRed;
        } else {


            ctx.fillStyle = litRed;
            ctx.strokeStyle = litRed;

            //                        ctx.shadowBlur = 10;
            //            ctx.shadowColor = litBlue;

        }
        ctx.fill();


    }
    count++;
    var temp = setInterval(function () {

        points = calcWaypoints(vertices);
        animate(points);
        //        ctx.beginPath();
        //                ctx.moveTo(vertices[k % 2].x, vertices[k %2].y);
        //                ctx.lineTo(vertices[(k+1)%2].x, vertices[(k+1)%2].y);
        //                ctx.stroke();
        //                requestAnimationFrame(temp);



    }, 500)

}, animationDuration * 1000)




var t = 1;
ctx.lineWidth = 10;
ctx.strokeStyle = litRed;
var points = [];

//// extend the line from start to finish with animation
//// calc waypoints traveling along vertices
function calcWaypoints(vertices) {
    var waypoints = [];
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j++) {
            var x = pt0.x + dx * j / 100;
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}

function animate() {
    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    }
    // draw a line segment from the last waypoint
    // to the current waypoint
    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    t++;
}




function pick(event) {

    var rgba = "#000";
    c.style.background = rgba;
    c.textContent = rgba;
}

//c.addEventListener('loading', wayAnimation);


function hover(e) {
    var x = e.offsetX;
    var y = e.offsetY;

    console.log(e);
    //    
    //    points = calcWaypoints(vertices);
    //    animate(points)




}
