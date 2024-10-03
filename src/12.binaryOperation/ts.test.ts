import { grayCode } from "./01.89";

describe("89 测试用例", () => {
    test(`"2 should return [0,1,3,2]`, () => {
        expect(grayCode(2)).toEqual([0, 1, 3, 2]);
    });

    test(`"1 should return [0,1]`, () => {
        expect(grayCode(1)).toEqual([0, 1]);
    });
});
