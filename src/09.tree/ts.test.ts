import { CreateTree, IsSameTree } from "./01.100";

describe("100 测试用例", () => {
    test(`p = [1,2,3], q = [1,2,3] should return true`, () => {
        const p = CreateTree([1, 2, 3]);
        const q = CreateTree([1, 2, 3]);
        expect(IsSameTree(p, q)).toBe(true);
    });

    test(`p = [1,2], q = [1,null,2] should return false`, () => {
        const p = CreateTree([1, 2]);
        const q = CreateTree([1, -Infinity, 2]);
        expect(IsSameTree(p, q)).toBe(false);
    });

    test(`p = [1,2,1], q = [1,1,2] should return false`, () => {
        const p = CreateTree([1, 2, 1]);
        const q = CreateTree([1, 1, 2]);
        expect(IsSameTree(p, q)).toBe(false);
    });
});
