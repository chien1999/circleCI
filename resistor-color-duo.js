"use strict";
exports.__esModule = true;
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        var _this = this;
        this.colorsArray = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
        this.value = function () {
            // @ts-ignore
            var number = _this.colorsArray.indexOf(_this.colors[0]);
            var numberSecond = _this.colorsArray.indexOf(_this.colors[1]);
            return number * 10 + numberSecond;
        };
        if (colors.length < 2) {
            throw new Error('At least two colors need to be present');
        }
        this.colors = colors;
    }
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
var register = new ResistorColor(['green', 'blue']);
register.value();
