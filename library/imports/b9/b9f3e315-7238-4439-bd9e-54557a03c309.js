"use strict";
cc._RF.push(module, 'b9f3eMVcjhEOb2eVFV6A8MJ', 'movePlayer');
// script/game/player/movePlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MovePlayer = /** @class */ (function (_super) {
    __extends(MovePlayer, _super);
    function MovePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MovePlayer.prototype.start = function () {
        this.openTouch();
    };
    MovePlayer.prototype.openTouch = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    MovePlayer.prototype.closeTouch = function () {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    MovePlayer.prototype.onTouchMove = function (event) {
        var delta = event.getDelta();
        this.node.x += delta.x;
        this.node.y += delta.y;
    };
    MovePlayer.prototype.update = function (dt) {
        if (this.node.x > 360)
            this.node.x = 360;
        if (this.node.x < -360)
            this.node.x = -360;
        if (this.node.y > 640)
            this.node.y = 640;
        if (this.node.y < -640)
            this.node.y = -640;
    };
    MovePlayer = __decorate([
        ccclass
    ], MovePlayer);
    return MovePlayer;
}(cc.Component));
exports.default = MovePlayer;

cc._RF.pop();