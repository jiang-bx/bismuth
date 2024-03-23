import { CreateTree, IsSameTree } from "./01.100";
import { countNodes } from "./02.222";
import { isSymmetric } from "./03.101";
import { invertTree } from "./04.226";
import { pathSum } from "./05.437";

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

describe("222 测试用例", () => {
    test(`[1,2,3,4,5,6] should return 6`, () => {
        const p = CreateTree([1, 2, 3, 4, 5, 6]);
        expect(countNodes(p)).toBe(6);
    });

    test(`[] should return 0`, () => {
        const p = CreateTree([]);
        expect(countNodes(p)).toBe(0);
    });

    test(`[1] should return 1`, () => {
        const p = CreateTree([1]);
        expect(countNodes(p)).toBe(1);
    });
});

describe("101 测试用例", () => {
    test(`[1,2,2,3,4,4,3] should return true`, () => {
        const p = CreateTree([1, 2, 2, 3, 4, 4, 3]);
        expect(isSymmetric(p)).toBe(true);
    });

    test(`[1,2,2,-Infinity,3,-Infinity,3] should return false`, () => {
        const p = CreateTree([1, 2, 2, -Infinity, 3, -Infinity, 3]);
        expect(isSymmetric(p)).toBe(false);
    });
});

describe("226 测试用例", () => {
    test(`[4,2,7,1,3,6,9] should return [4,7,2,9,6,3,1]`, () => {
        const p = CreateTree([4, 2, 7, 1, 3, 6, 9]);
        const p2 = CreateTree([4, 7, 2, 9, 6, 3, 1]);
        expect(IsSameTree(invertTree(p), p2)).toBe(true);
    });

    test(`[2,1,3] should return [2,3,1]`, () => {
        const p = CreateTree([2, 1, 3]);
        const p2 = CreateTree([2, 3, 1]);
        expect(IsSameTree(invertTree(p), p2)).toBe(true);
    });

    test(`[] should return []`, () => {
        const p = CreateTree([]);
        const p2 = CreateTree([]);
        expect(IsSameTree(invertTree(p), p2)).toBe(true);
    });
});

describe("437 测试用例", () => {
    test(`[10,5,-3,3,2,null,11,3,-2,null,1], 8 should return 3`, () => {
        const p = CreateTree([
            10,
            5,
            -3,
            3,
            2,
            -Infinity,
            11,
            3,
            -2,
            -Infinity,
            1,
        ]);
        expect(pathSum(p, 8)).toBe(3);
    });

    test(`[ 5,4,8,11,-Infinity,13,4,7,2,-Infinity,-Infinity,5,1], 22 should return 3`, () => {
        const p = CreateTree([
            5,
            4,
            8,
            11,
            -Infinity,
            13,
            4,
            7,
            2,
            -Infinity,
            -Infinity,
            5,
            1,
        ]);
        expect(pathSum(p, 22)).toBe(3);
    });
});
