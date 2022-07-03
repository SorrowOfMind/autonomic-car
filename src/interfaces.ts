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
    draw(ctx: CanvasRenderingContext2D): void;
    update(): void;
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

interface RaodInterface {
    // x: number;
    // width: number;
    // lanesNum: number;
    draw(ctx: CanvasRenderingContext2D): void
    getLaneCenter(laneIdx: number): number;
}