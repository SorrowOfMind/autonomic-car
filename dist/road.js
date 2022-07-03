var _a;
var Raod = (_a = /** @class */ (function () {
        function Road(x, width, lanes) {
            if (lanes === void 0) { lanes = 3; }
            this.x = x;
            this.width = width;
            this.lanesNum = lanes;
            this.left = x - width / 2;
            this.right = x + width / 2;
            this.top = -Road.infinity;
            this.bottom = Road.infinity;
        }
        Road.prototype.getLaneCenter = function (laneIdx) {
            var laneWidth = this.width / this.lanesNum;
            return this.left + laneWidth / 2 + Math.min(laneIdx, this.lanesNum - 1) * laneWidth;
        };
        Road.prototype.draw = function (ctx) {
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#fff";
            for (var i = 0; i <= this.lanesNum; i++) {
                //linear interpolation
                var x = lerp(this.left, this.right, i / this.lanesNum); //we need to get values from left to right
                if (i > 0 && i < this.lanesNum) {
                    ctx.setLineDash([20, 20]); //20px len and 20 px break
                }
                else {
                    ctx.setLineDash([]);
                }
                ctx.beginPath();
                ctx.moveTo(x, this.top);
                ctx.lineTo(x, this.bottom);
                ctx.stroke();
            }
        };
        return Road;
    }()),
    _a.infinity = 1000000,
    _a);
//# sourceMappingURL=road.js.map