const Road: RoadConstructor = class Road implements RoadInterface {
    private x: number;
    private width: number;
    private lanesNum: number;
    private left: number;
    private right: number;
    private top: number;
    private bottom: number;
    private borders: Array<coordType[]>;

    static infinity: number = 1000000;

    constructor(x: number, width: number, lanes: number = 3) {
        this.x = x;
        this.width = width;
        this.lanesNum = lanes;

        this.left = x - width/2;
        this.right = x + width/2;

        this.top = -Road.infinity;
        this.bottom = Road.infinity;

        const topLeft = {x: this.left, y: this.top};
        const topRight = {x: this.right, y: this.top};
        const bottomLeft = {x: this.left, y: this.bottom};
        const bottomRight = {x: this.right, y: this.bottom};

        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];
    }

    getLaneCenter(laneIdx: number) {
        const laneWidth = this.width/this.lanesNum;
        return this.left + laneWidth/2 + Math.min(laneIdx, this.lanesNum - 1) * laneWidth;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#fff";

        for (let i = 1; i <= this.lanesNum - 1; i++) {
            //linear interpolation
            const x = lerp(this.left, this.right, i / this.lanesNum); //we need to get values from left to right

            ctx.setLineDash([20, 20]); //20px len and 20 px break
           
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();

        });
    }
}