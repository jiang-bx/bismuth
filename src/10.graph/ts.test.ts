import { arrayNesting } from "./01.565";

describe("565 测试用例", () => {
    test(`[5,4,0,3,1,6,2] should return 4`, () => {
        expect(arrayNesting([5, 4, 0, 3, 1, 6, 2])).toBe(4);
    });
});
