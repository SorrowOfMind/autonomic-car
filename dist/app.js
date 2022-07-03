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
var road = new Raod(cvs.width / 2, cvs.width * 0.9);
var car = new Car(road.getLaneCenter(1), 100, 30, 50);
animate();
function animate() {
    car.update();
    cvs.canvas.height = window.innerHeight;
    road.draw(cvs.context);
    car.draw(cvs.context);
    requestAnimationFrame(animate);
}
//# sourceMappingURL=app.js.map