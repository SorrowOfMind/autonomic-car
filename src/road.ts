const Raod: RoadConstructor = class Road implements RaodInterface {
    private x: number;
    private width: number;
    private lanesNum: number;
    private left: number;
    private right: number;
    private top: number;
    private bottom: number;

    static infinity: number = 1000000;

    constructor(x: number, width: number, lanes: number = 3) {
        this.x = x;
        this.width = width;
        this.lanesNum = lanes;

        this.left = x - width/2;
        this.right = x + width/2;

        this.top = -Road.infinity;
        this.bottom = Road.infinity;
    }

    getLaneCenter(laneIdx: number) {
        const laneWidth = this.width/this.lanesNum;
        return this.left + laneWidth/2 + Math.min(laneIdx, this.lanesNum - 1) * laneWidth;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#fff";

        for (let  i = 0; i <= this.lanesNum; i++) {
            //linear interpolation
            const x = lerp(this.left, this.right, i / this.lanesNum); //we need to get values from left to right
            if (i > 0 && i < this.lanesNum) {
                ctx.setLineDash([20, 20]); //20px len and 20 px break
            } else {
                ctx.setLineDash([]);
            }
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

    }
}