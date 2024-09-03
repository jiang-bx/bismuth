import { guessNumber } from "./01.374";

describe("374 测试用例", () => {
    test(`"10 should return 6`, () => {
        expect(guessNumber(10)).toBe(6);
    });

    test(`"1 should return 1`, () => {
        expect(guessNumber(1)).toBe(1);
    });

    test(`"2 should return 1`, () => {
        expect(guessNumber(2)).toBe(1);
    });
});
