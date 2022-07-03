var Sensor = /** @class */ (function () {
    function Sensor(car) {
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 100;
        this.raySpread = Math.PI / 4;
        this.rays = [];
    }
    Sensor.prototype.update = function () {
        this.rays = [];
        for (var i = 0; i < this.rayCount; i++) {
            var rayAngle = lerp(this.raySpread * 0.5, -this.raySpread * 0.5, i / (this.rayCount - 1));
            //start point for our array
            var start = { x: this.car.x, y: this.car.y };
            var end = {
                x: this.car.x - Math.sin(rayAngle) * this.rayLength,
                y: this.car.y - Math.cos(rayAngle) * this.rayLength
            };
        }
    };
    return Sensor;
}());
//# sourceMappingURL=sensor.js.map