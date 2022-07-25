interface CanvasInterface {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width : number;
    height: number;
}

interface CarInterface {
    x: number;
    y: number;
    width: number;
    height: number;
    controls: ControlsInterface;
    angle: number;
    draw(ctx: CanvasRenderingContext2D): void;
    update(roadBorders: Array<CoordType[]>): void;
    move(): void
}

interface CarConstructor {
    new (x: number, y: number, width: number, height: number);
}

interface ControlsInterface {
    forward: boolean;
    right: boolean;
    left: boolean;
    reverse: boolean;
}

interface RoadConstructor {
    new (x: number, width: number, lanes?: number);
}

interface RoadInterface {
    // x: number;
    // width: number;
    // lanesNum: number;
    draw(ctx: CanvasRenderingContext2D): void
    getLaneCenter(laneIdx: number): number;
}

type CoordType = {
    x: number,
    y: number
}

type Segment = [CoordType, CoordType];

type Intersection = {
    x: number,
    y: number,
    offset: number
}

interface SensorConstructor {
    new (car: CarInterface);
}

interface SensorInterface {
    car: CarInterface
    rayCount: number;
    rayLength: number;
    raySpread: number;

    update: (roadBorders: Array<CoordType[]>) => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
}