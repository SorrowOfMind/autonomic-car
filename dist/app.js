var Canvas = /** @class */ (function () {
    function Canvas() {
        this.canvas = document.getElementById('cvs');
        this.context = this.canvas.getContext("2d");
        this.width = 200;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    return Canvas;
}());
var cvs = new Canvas();
var road = new Road(cvs.width / 2, cvs.width * 0.9);
var car = new Car(road.getLaneCenter(1), 100, 30, 50);
animate();
function animate() {
    car.update();
    cvs.canvas.height = window.innerHeight;
    cvs.context.save();
    cvs.context.translate(0, -car.y + cvs.canvas.height * 0.7);
    road.draw(cvs.context);
    car.draw(cvs.context);
    cvs.context.restore();
    requestAnimationFrame(animate);
}
//# sourceMappingURL=app.js.map