function stroke(color) {
    ctx.strokeStyle = color;
}

function fill(color) {
    ctx.fillStyle = color;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function font(fontSetting) {
    ctx.font = fontSetting;
}

function rect(x, y, w, h, mode) {
    if (mode == "fill") {
        ctx.fillRect(x, y, w, h)
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

//Draw a line segmnet from (x, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1,); //Endpoint 1
    ctx.lineTo(x2, y2);  //Endpoint 2
    ctx.stroke();
}

//draw a circle with center (x,y) and a radius of r
function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    if (mode == 'fill') {
        ctx.fill();
    } else if (mode == "stroke") {
        ctx.stroke();
    }
}

function triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1,); //vertex 1
    ctx.lineTo(x2, y2);  //vertex 2
    ctx.lineTo(x3, y3)  //vertex 3
    if (mode == "fill") {
        ctx.fill();
        ctx.closePath();
    } else if (mode == "stroke") {
        ctx.closePath();
        ctx.stroke();
    }
}

function text(message, x, y, mode) {
    if (mode == "fill") {
        ctx.fillText(message, x, y);
    } else if (mode == "stroke") {
        ctx.strokeText(message, x, y);
    }
}

function ellipse(x, y, xRadius, yRadius, rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI)
    if (mode == "fill") {
        ctx.fill();
    } else if (mode == "stroke") {
        ctx.stroke();
    }
}

function triangleMan(colorx, colory, x, y, width, word, colortext) {
    //colorx is body color y is eye and arms, x and y are where he is on the cnv, word is the thing below him (what he is saying), and colortext is the color the text is
    lineWidth(width);
    stroke(colory)
    line(x + 115, y + 200, x + 190, y + 185);
    line(x, y + 170, x + 57, y + 200);
    fill(colorx);
    triangle(x + 79, y + 100, x + 40, y + 250, x + 140, y + 250, "fill");
    fill(colory);
    circle(x + 85, y + 170, 10, "fill");
    font("21px Arail");
    fill(colortext);
    text(word, x + 51, y + 280, "fill");

}


function platform(colorT, colorB, x, y, w, h) {
    //pick your rectangel dimensons and color and the bottom one will follow the top one
    fill(colorT);
    rect(x, y, w, h, "fill");
    fill(colorB);
    rect(x, y + h, w, h, "fill");
}


function drawAll() {
    //drawing one (triangle man)
    triangleMan("yellow", "black", 500, 40, 3, "HELLO!", "green");
    triangleMan("pink", "purple", 40, 0, 3, "IM PINK WOW", "magenta");
    //drawing two (paltform)
    platform('red', "#f8f8ff", 50, 450, 150, 50);
    platform('blue', "darkblue", 450, 450, 150, 50);

    console.log("Wow, I'm an artist!");
}

