var _a;
var Road = (_a = /** @class */ (function () {
        function Road(x, width, lanes) {
            if (lanes === void 0) { lanes = 3; }
            this.x = x;
            this.width = width;
            this.lanesNum = lanes;
            this.left = x - width / 2;
            this.right = x + width / 2;
            this.top = -Road.infinity;
            this.bottom = Road.infinity;
            var topLeft = { x: this.left, y: this.top };
            var topRight = { x: this.right, y: this.top };
            var bottomLeft = { x: this.left, y: this.bottom };
            var bottomRight = { x: this.right, y: this.bottom };
            this.borders = [
                [topLeft, bottomLeft],
                [topRight, bottomRight]
            ];
        }
        Road.prototype.getLaneCenter = function (laneIdx) {
            var laneWidth = this.width / this.lanesNum;
            return this.left + laneWidth / 2 + Math.min(laneIdx, this.lanesNum - 1) * laneWidth;
        };
        Road.prototype.draw = function (ctx) {
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#fff";
            for (var i = 1; i <= this.lanesNum - 1; i++) {
                //linear interpolation
                var x = lerp(this.left, this.right, i / this.lanesNum); //we need to get values from left to right
                ctx.setLineDash([20, 20]); //20px len and 20 px break
                ctx.beginPath();
                ctx.moveTo(x, this.top);
                ctx.lineTo(x, this.bottom);
                ctx.stroke();
            }
            ctx.setLineDash([]);
            this.borders.forEach(function (border) {
                ctx.beginPath();
                ctx.moveTo(border[0].x, border[0].y);
                ctx.lineTo(border[1].x, border[1].y);
                ctx.stroke();
            });
        };
        return Road;
    }()),
    _a.infinity = 1000000,
    _a);
//# sourceMappingURL=road.js.map