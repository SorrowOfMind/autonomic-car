const Sensor = class Sensor {
    constructor(car) {
        this.car = car;
        this.rayCount = 5;
        this.rayLength = 150;
        this.raySpread = Math.PI / 2;
        this.rays = [];
        this.readings = [];
    }
    update(roadBorders) {
        this.castRays();
        this.readings = [];
        for (let i = 0; i < this.rays.length; i++) {
            const result = this.getReading(this.rays[0], roadBorders);
            this.readings.push(result);
        }
    }
    draw(ctx) {
        for (let i = 0; i < this.rays.length; i++) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(this.rays[i][0].x, this.rays[i][0].y);
            ctx.lineTo(this.rays[i][1].x, this.rays[i][1].y);
            ctx.stroke();
        }
    }
    getReading(ray, roadBorders) {
        let touches = [];
        for (let i = 0; i < roadBorders.length; i++) {
            const touch = getIntersection(ray[0], ray[1], roadBorders[i][0], roadBorders[i][1]);
            if (touch) {
                touches.push(touch);
            }
        }
        if (touches.length == 0) {
            return null;
        }
        else {
            const offsets = touches.map(e => e.offset);
            const minOffset = Math.min(...offsets);
            return touches.find(e => e.offset == minOffset);
        }
    }
    castRays() {
        this.rays = [];
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = lerp(this.raySpread * 0.5, -this.raySpread * 0.5, this.rayCount == 1 ? 0.5 : i / (this.rayCount - 1)) + this.car.angle;
            //start point for our array
            const start = { x: this.car.x, y: this.car.y };
            const end = {
                x: this.car.x - Math.sin(rayAngle) * this.rayLength,
                y: this.car.y - Math.cos(rayAngle) * this.rayLength
            };
            this.rays.push([start, end]);
        }
    }
};
//# sourceMappingURL=sensor.js.map