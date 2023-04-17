window.onload = function () {
    var canvas = document.getElementById("animated_clock");
    var context = canvas.getContext("2d");
    var radius = canvas.height / 2;
    context.translate(radius, radius);
    radius = radius * 0.90;
    setInterval(drawClock, 1000);

    function drawClock() {
        // Draws everything, drawFace has drawNumbers which has drawTime
        drawFace(context, radius);
    }

    function drawFace(context, radius) {
        var grad;
        if (canvas.getAttribute("data-faceImage") != null) {
            var img = new Image();
            img.src = canvas.getAttribute("data-faceImage");
            img.onload = function () {
                context.beginPath();
                context.arc(0, 0, radius, 0, 2 * Math.PI);
                //TODO: FINISH THIS
                // transform image to be centered and scaled to fit the face
                var pattern = context.createPattern(img, 'repeat');
                var patternTransform = context.getTransform();
                pattern.setTransform(patternTransform);
                context.fillStyle = pattern;
                context.fill();
                continueDrawingFace();
            };
        } else {
            context.beginPath();
            context.arc(0, 0, radius, 0, 2 * Math.PI);
            context.fillStyle = canvas.getAttribute("data-faceColor") ?? 'white';
            context.fill();
            continueDrawingFace();
        }

        function continueDrawingFace() {
            grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
            grad.addColorStop(0, '#333');
            grad.addColorStop(0.5, canvas.getAttribute("data-rimColor") ?? 'white');
            grad.addColorStop(1, '#333');
            context.strokeStyle = grad;
            context.lineWidth = radius * 0.1;
            context.stroke();
            context.beginPath();
            context.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
            context.fillStyle = canvas.getAttribute("data-centerColor") ?? canvas.getAttribute("data-handColor") ?? '#333';
            context.fill();
            drawNumbers(context, radius);
        }
    }

    function drawNumbers(context, radius) {
        var ang;
        var num;
        context.font = (canvas.getAttribute("data-fontSize") ?? radius * 0.15) + "px " + (canvas.getAttribute("data-font") ?? "arial");
        context.fillStyle = canvas.getAttribute("data-textColor") ?? 'black';
        context.textBaseline = "middle";
        context.textAlign = "center";
        for (num = 1; num <= 12; num++) {
            ang = num * Math.PI / 6;
            context.rotate(ang);
            context.translate(0, -radius * 0.85);
            context.rotate(-ang);
            context.fillText(num.toString(), 0, 0);
            context.rotate(ang);
            context.translate(0, radius * 0.85);
            context.rotate(-ang);
        }
        drawTime(context, radius);
    }

    function drawTime(context, radius) {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) +
            (minute * Math.PI / (6 * 60)) +
            (second * Math.PI / (360 * 60));
        drawHand(context, hour, radius * 0.5, radius * 0.07);
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        drawHand(context, minute, radius * 0.8, radius * 0.07);
        // second
        second = (second * Math.PI / 30);
        drawHand(context, second, radius * 0.9, radius * 0.02);
    }

    function drawHand(context, pos, length, width) {
        context.beginPath();
        // color
        context.strokeStyle = canvas.getAttribute("data-handColor") ?? 'black';
        context.lineWidth = width;
        context.lineCap = "round";
        context.moveTo(0, 0);
        context.rotate(pos);
        context.lineTo(0, -length);
        context.stroke();
        context.rotate(-pos);
    }

};