import { nonSpecialCount } from "./Q2";
import { numberOfSubstrings } from "./Q3";
import { canReachCorner } from "./Q4.TODO";

describe("Q2 测试用例", () => {
    test(`5, 7 should return 3`, () => {
        expect(nonSpecialCount(5, 7)).toBe(3);
    });

    test(`4, 16 should return 11`, () => {
        expect(nonSpecialCount(4, 16)).toBe(11);
    });

    test(`3693, 85366 should return 81630`, () => {
        expect(nonSpecialCount(3693, 85366)).toBe(81630);
    });
    
});

describe("Q3 测试用例", () => {
    test(`00011 should return 5`, () => {
        expect(numberOfSubstrings("00011")).toBe(5);
    });

    test(`101101 should return 16`, () => {
        expect(numberOfSubstrings("101101")).toBe(16);
    });
});

describe("Q4 测试用例", () => {
    test(`5, 8, [[4, 7, 1]] should return 4,7,1`, () => {
        expect(canReachCorner(5, 8, [[4, 7, 1]])).toBe(false);
    });
});
