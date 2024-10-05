import { grayCode } from "./01.89";
import { singleNumber } from "./02.136";
import { singleNumber137 } from "./03.137";

describe("89 测试用例", () => {
    test(`"2 should return [0,1,3,2]`, () => {
        expect(grayCode(2)).toEqual([0, 1, 3, 2]);
    });

    test(`"1 should return [0,1]`, () => {
        expect(grayCode(1)).toEqual([0, 1]);
    });
});

describe("136 测试用例", () => {
    test(`[2,2,1] should return 1`, () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });

    test(`[4,1,2,1,2] should return 4`, () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });

    test(`[1] should return 1`, () => {
        expect(singleNumber([1])).toBe(1);
    });
});

describe("137 测试用例", () => {
    test(`[2,2,3,2] should return 3`, () => {
        expect(singleNumber137([2, 2, 3, 2])).toBe(3);
    });

    test(`[0,1,0,1,0,1,99] should return 99`, () => {
        expect(singleNumber137([0, 1, 0, 1, 0, 1, 99])).toBe(99);
    });
});
