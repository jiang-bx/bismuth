import { countKConstraintSubstrings } from "./Q1";
import { maxEnergyBoost } from "./Q2";

describe("Q1 测试用例", () => {
    test(`s = "10101", k = 1 should return 12`, () => {
        expect(countKConstraintSubstrings("10101", 1)).toBe(12);
    });

    test(`s = "1010101", k = 2 should return 25`, () => {
        expect(countKConstraintSubstrings("1010101", 2)).toBe(25);
    });

    test(`s = "11111", k = 1 should return 15`, () => {
        expect(countKConstraintSubstrings("11111", 1)).toBe(15);
    });
});

describe("Q2 测试用例", () => {
    test(`[1,3,1], [3,1,1] should return 5`, () => {
        expect(maxEnergyBoost([1, 3, 1], [3, 1, 1])).toBe(5);
    });

    test(`[4,1,1], [1,1,3] should return 7`, () => {
        expect(maxEnergyBoost([4, 1, 1], [1, 1, 3])).toBe(7);
    });
});
