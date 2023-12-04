import { coinChange } from "./01.322";

describe("322 测试用例", () => {
    test(`coins = [1, 2, 5], amount = 11 should return 3`, () => {
        expect(coinChange([1, 2, 5], 11)).toBe(3);
    });

    test(`coins = [2], amount = 3 should return -1`, () => {
        expect(coinChange([2], 3)).toBe(-1);
    });

    test(`coins = [1], amount = 0 should return 0`, () => {
        expect(coinChange([1], 0)).toBe(0);
    });
});
