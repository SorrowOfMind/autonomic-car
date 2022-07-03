const Sensor: SensorConstructor = class Sensor implements SensorInterface {
    public car: CarInterface;
    public rayCount: number;
    public rayLength: number;
    public raySpread: number;
    public rays: [];

    constructor(car: CarInterface) {
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 100;
        this.raySpread = Math.PI / 4;

        this.rays = [];
    }

    update() {
        this.rays = [];
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle: number = lerp(
                this.raySpread * 0.5,
                -this.raySpread * 0.5,
                i / (this.rayCount - 1)
            );

            //start point for our array
            const start: coordType = {x: this.car.x, y: this.car.y};
            const end: coordType = {
                x: this.car.x - Math.sin(rayAngle) * this.rayLength,
                y: this.car.y - Math.cos(rayAngle) * this.rayLength
            }
        }
    }
}