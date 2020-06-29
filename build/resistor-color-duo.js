"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResistorColor {
    constructor(colors) {
        this.colorsArray = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
        this.value = () => {
            return 1;
        };
        this.colors = colors;
    }
}
exports.ResistorColor = ResistorColor;
const register = new ResistorColor(['green', 'blue']);
register.value();
//# sourceMappingURL=resistor-color-duo.js.map