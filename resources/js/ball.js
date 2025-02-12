var canvas = document.querySelector("canvas");
 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 40;

var l = canvas.getContext('2d');

// x and y are the co-ordinates of the circle

// vx and vy are the respective speeds

var x = Math.floor(innerWidth- 300);
var y = Math.floor(innerHeight -500);
var vx = 5;
var vy = 5;
var radius = 220;

// This function will do the animation
function move() {
    requestAnimationFrame(move);

    // It clears the specified pixels within
    // the given rectangle
    l.clearRect(0, 0, innerWidth, innerHeight);

    // Creating a circle
    l.beginPath();
    l.strokeStyle = "black";
    l.arc(x, y, radius, 0, Math.PI * 2, false);
    l.stroke();

    // Conditions sso that the ball bounces
    // from the edges
    if (radius + x > innerWidth)
        vx = 0 - vx;

    if (x - radius < 0)
        vx = 0 - vx;

    if (y + radius > innerHeight)
        vy = 0 - vy;

    if (y - radius < 0)
        vy = 0 - vy;

    x = x + vx;
    y = y + vy;

}
setTimeout(function(){
    move();
},1500)