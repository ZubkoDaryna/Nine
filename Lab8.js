document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // Визначення геометричних фігур
    var circle1 = { x: 285, y: 154, radius: 45, color: "indigo", strokeColor: "red", strokeWidth: 2, speed: 2 };
    var circle2 = { x: 377, y: 154, radius: 45, color: "indigo", strokeColor: "red", strokeWidth: 2, speed: 2 };
    var ellipse = { x: 331, y: 246, radiusX: 90, radiusY: 45, color: "lightgreen", strokeColor: "red", strokeWidth: 2 };
    var blueRect1 = { x: 200, y: 250, width: 40, height: 40, color: "blue" };
    var blueRect2 = { x: 421, y: 250, width: 40, height: 40, color: "blue" };
    var movingRect = { x: 281, y: 292, width: 100, height: 50, color: "skyblue" };
    var blueRect3 = { x: 200, y: 110, width: 40, height: 40, color: "blue" };
    var blueRect4 = { x: 422, y: 110, width: 40, height: 40, color: "blue" };
    var pinkRect1 = { x: 240, y: 68, width: 40, height: 40, color: "pink", strokeColor: "red", strokeWidth: 2 };
    var pinkRect2 = { x: 380, y: 68, width: 40, height: 40, color: "pink", strokeColor: "red", strokeWidth: 2 };

    // Малювання фігур
    function drawFigures() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawCircle(circle1);
        drawCircle(circle2);
        drawEllipse(ellipse);
        drawRect(blueRect1);
        drawRect(blueRect2);
        drawRect(movingRect);
        drawRect(blueRect3);
        drawRect(blueRect4);
        drawRect(pinkRect1);
        drawRect(pinkRect2);

        drawCoordinateAxes();
    }

    // Малювання круга
    function drawCircle(circle) {
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        context.fillStyle = circle.color;
        context.fill();
        context.lineWidth = circle.strokeWidth;
        context.strokeStyle = circle.strokeColor;
        context.stroke();
    }

    // Малювання еліпса
    function drawEllipse(ellipse) {
        context.beginPath();
        context.ellipse(ellipse.x, ellipse.y, ellipse.radiusX, ellipse.radiusY, 0, 0, 2 * Math.PI);
        context.fillStyle = ellipse.color;
        context.fill();
        context.lineWidth = ellipse.strokeWidth;
        context.strokeStyle = ellipse.strokeColor;
        context.stroke();
    }

    // Малювання прямокутника
    function drawRect(rect) {
        context.fillStyle = rect.color;
        context.fillRect(rect.x, rect.y, rect.width, rect.height);
        if (rect.strokeColor && rect.strokeWidth) {
            context.lineWidth = rect.strokeWidth;
            context.strokeStyle = rect.strokeColor;
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);//контур
        }
    }

    // Малювання координатних прямих
    function drawCoordinateAxes() {
        context.beginPath();
        context.moveTo(10, 200);
        context.lineTo(580, 200);
        context.moveTo(580, 200);
        context.lineTo(570, 195);
        context.moveTo(580, 200);
        context.lineTo(570, 205);

        context.moveTo(200, 20);
        context.lineTo(200, 390);
        context.moveTo(200, 20);
        context.lineTo(205, 25);
        context.moveTo(200, 20);
        context.lineTo(195, 25);

        context.lineWidth = 3;
        context.strokeStyle = "red";
        context.stroke();

        context.font = "12px Arial";
        context.fillText("0", 205, 215);
        context.fillText("X", 580, 210);
        context.fillText("Y", 180, 25);
    }

    // Анімація руху кругів
    function animateCircles() {
        circle1.x += circle1.speed;  //збільшує координату x для першого круга 
        circle2.x -= circle2.speed;

        drawFigures();

        requestAnimationFrame(animateCircles);
    }

    drawFigures();
    animateCircles();

    canvas.addEventListener("click", function () {
        circle1.speed *= -1;
        circle2.speed *= -1;
    });

    canvas.addEventListener("click", function (event) {
        var mouseX = event.clientX - canvas.getBoundingClientRect().left;
        var mouseY = event.clientY - canvas.getBoundingClientRect().top;

        // перевірка, чи клікнуто на прямокутник
        if (
            mouseX >= movingRect.x &&
            mouseX <= movingRect.x + movingRect.width &&
            mouseY >= movingRect.y &&
            mouseY <= movingRect.y + movingRect.height
        ) {
            movingRect.width += 20;
            movingRect.height += 20;
            drawFigures(); // перемалювати всі фігури
        }
    });

    function animateEllipse() {
        ellipse.color = getRandomColor(); // зміна кольору

        drawEllipse(ellipse);

        requestAnimationFrame(animateEllipse);
    }
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    animateEllipse();
});