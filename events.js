var keys ={
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

console.log(keys);

document.addEventListener("keyup", drawingKeys);
var cuadro = document.getElementById("drawingArea");
var paper = cuadro.getContext("2d");
var x = 150;
var y = 150;

draw("red", x - 1, y - 1, x + 1, y + 1, paper);

function draw(color, xinicial, yinicial, xfinal, yfinal, canvas)
{
    canvas.beginPath();
    canvas.strokeStyle = color; 
    canvas.lineWidth = 3;
    canvas.moveTo(xinicial, yinicial);
    canvas.lineTo(xfinal, yfinal);
    canvas.stroke();
    canvas.closePath();
}

function drawingKeys(event){
    var color  = "blue";
    var movement = 10;
    switch(event.keyCode){
        case keys.DOWN:
            draw(color, x, y, x, y + movement, paper);
            y = y + movement;
        break;
        case keys.UP:
            draw(color, x, y, x, y - movement, paper);
            y = y - movement;
        break;
        case keys.LEFT:
            draw(color, x, y, x - movement, y, paper);
            x = x - movement;
        break;
        case keys.RIGHT:
            draw(color, x, y, x + movement, y, paper);
            x = x + movement;
        break;
    }
}
