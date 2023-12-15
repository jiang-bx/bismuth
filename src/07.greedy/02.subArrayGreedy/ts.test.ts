import { maxSubArray } from "./01.53";

describe("420 测试用例", () => {
    test(`[-2,1,-3,4,-1,2,1,-5,4] should return 6`, () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    test(`[1] should return 1`, () => {
        expect(maxSubArray([1])).toBe(1);
    });

    test(`[5,4,-1,7,8] should return 23`, () => {
        expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    });
});
