import { guessNumWrap } from "./01.374";
import { searchInsert } from "./02.35";

describe("374 测试用例", () => {
    test(`"10 should return 6`, () => {
        expect(guessNumWrap(10, 6)).toBe(6);
    });

    test(`"1 should return 1`, () => {
        expect(guessNumWrap(1, 1)).toBe(1);
    });

    test(`"2 should return 1`, () => {
        expect(guessNumWrap(2, 1)).toBe(1);
    });
});

describe("35 测试用例", () => {
    test(`[1,3,5,6], 5 should return 2`, () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });

    test(`[1,3,5,6], 2 should return 1`, () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    });

    test(`[1,3,5,6], 7 should return 4`, () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });
});
