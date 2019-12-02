function makeClass(phrase) {
    // объявляем класс и возвращаем его
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}

// Создаём новый класс
let User = makeClass("Привет");

User().sayHi(); // Привет
//-------------------------------------------

var example = document.getElementById("example"),
    ctx     = example.getContext('2d');
example.height = 480;
example.width  = 640;
ctx.beginPath();ctx.rotate(-0.1);
ctx.arc(80, 100, 56, 3/4 * Math.PI, 1/4 * Math.PI, true);
ctx.fill(); // *14
ctx.moveTo(40, 140);
ctx.lineTo(20, 40);
ctx.lineTo(60, 100);
ctx.lineTo(80, 20);
ctx.lineTo(100, 100);
ctx.lineTo(140, 40);
ctx.lineTo(120, 140);
ctx.fillStyle = "Blue";ctx.fill();
ctx.stroke(); // *22
ctx.beginPath();ctx.arc(80, 120, 20, 0*Math.PI,  2*Math.PI);
ctx.fillStyle = "Orange";ctx.fill();
ctx.lineWidth = 1;ctx.strokeStyle = "Green";ctx.fill();
ctx.stroke();
// alert ("Привет,");
