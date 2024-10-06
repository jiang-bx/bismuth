import { grayCode } from "./01.89";
import { singleNumber } from "./02.136";
import { singleNumber137 } from "./03.137";
import { singleNumber260 } from "./04.260";

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

describe("260 测试用例", () => {
    test(`[1,2,1,3,2,5] should return [3, 5]`, () => {
        expect(singleNumber260([1, 2, 1, 3, 2, 5])).toEqual([3, 5]);
    });

    test(`[-1,0] should return [-1,0]`, () => {
        expect(singleNumber260([-1, 0])).toEqual([-1, 0]);
    });

    test(`[0,1] should return [1,0]`, () => {
        expect(singleNumber260([0, 1])).toEqual([1, 0]);
    });
});
