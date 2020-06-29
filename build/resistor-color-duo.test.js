"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resistor_color_duo_1 = require("./resistor-color-duo");
describe("Resistor Colors", () => {
    xtest("Brown and black", () => {
        const resistorColor = new resistor_color_duo_1.ResistorColor(["brown", "black"]);
        expect(resistorColor.value()).toEqual(10);
    });
    xtest("Blue and grey", () => {
        const resistorColor = new resistor_color_duo_1.ResistorColor(["blue", "grey"]);
        expect(resistorColor.value()).toEqual(68);
    });
    xtest("Yellow and violet", () => {
        const resistorColor = new resistor_color_duo_1.ResistorColor(["yellow", "violet"]);
        expect(resistorColor.value()).toEqual(47);
    });
    xtest("Orange and orange", () => {
        const resistorColor = new resistor_color_duo_1.ResistorColor(["orange", "orange"]);
        expect(resistorColor.value()).toEqual(33);
    });
    xtest("Ignore additional colors", () => {
        const resistorColor = new resistor_color_duo_1.ResistorColor(["green", "brown", "orange"]);
        expect(resistorColor.value()).toEqual(51);
    });
    xtest("Throws error when not enough colors", () => {
        expect(() => new resistor_color_duo_1.ResistorColor(["green"])).toThrowError("At least two colors need to be present");
    });
});
//# sourceMappingURL=resistor-color-duo.test.js.map