class Canvas implements CanvasInterface {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public width : number;
    public height: number;

    constructor() {
        this.canvas = document.getElementById('cvs') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
        this.width = 200;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
}

let cvs = new Canvas();
let road = new Raod(cvs.width/2, cvs.width * 0.9);
let car = new Car(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
    car.update();
    cvs.canvas.height = window.innerHeight;
    road.draw(cvs.context);
    car.draw(cvs.context);
    requestAnimationFrame(animate);
}
