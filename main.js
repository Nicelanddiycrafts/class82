var mouseEvent = "empty";
var lastPostionOfX, lastPostionOfY;

canvas = document.getElementById("myCanvas");
y = canvas.getContext("2d");

color = "#dea5a4";
lineWidth = 1;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent = "mousedown") {
        y.beginPath();
        y.strokeStyle = color;
        y.lineWidth = lineWidth;

        y.moveTo(lastPostionOfX, lastPostionOfY);
        y.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        y.stroke();
    }
    lastPostionOfX = current_position_of_mouse_x;
    lastPostionOfY = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    y.clearRect(0, 0, y.canvas.width, y.canvas.height);
}

