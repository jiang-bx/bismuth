import { CreateTree, IsSameTree } from "./01.100";
import { countNodes } from "./02.222";
import { isSymmetric } from "./03.101";
import { invertTree } from "./04.226";
import { pathSum } from "./05.437";
import { findTilt } from "./06.563";
import { mergeTrees } from "./07.617";
import { findFrequentTreeSum } from "./08.508";
import { isSubtree } from "./09.572";
import { diameterOfBinaryTree } from "./10.543";
import { constructMaximumBinaryTree } from "./11.654";

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

    test(`[ 5,4,8,11,-Infinity,13,4,7,2,-Infinity,-Infinity,-Infinity,
        -Infinity,5,1], 22 should return 3`, () => {
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
            -Infinity,
            -Infinity,
            5,
            1,
        ]);
        expect(pathSum(p, 22)).toBe(3);
    });
});

describe("563 测试用例", () => {
    test(`[1,2,3] should return 1`, () => {
        const p = CreateTree([1, 2, 3]);
        expect(findTilt(p)).toBe(1);
    });

    test(`[4,2,9,3,5,-Infinity,7] should return 15`, () => {
        const p = CreateTree([4, 2, 9, 3, 5, -Infinity, 7]);
        expect(findTilt(p)).toBe(15);
    });

    test(`[21,7,14,1,1,2,2,3,3] should return 9`, () => {
        const p = CreateTree([21, 7, 14, 1, 1, 2, 2, 3, 3]);
        expect(findTilt(p)).toBe(9);
    });
});

describe("617 测试用例", () => {
    test(`[1,3,2,5] should return [3,4,5,5,4,null,7]`, () => {
        const p1 = CreateTree([1, 3, 2, 5]);
        const p2 = CreateTree([2, 1, 3, -Infinity, 4, -Infinity, 7]);
        const r1 = CreateTree([3, 4, 5, 5, 4, -Infinity, 7]);
        expect(IsSameTree(mergeTrees(p1, p2), r1)).toBe(true);
    });

    test(`[1] should return [2,2]`, () => {
        const p1 = CreateTree([1]);
        const p2 = CreateTree([1, 2]);
        const r1 = CreateTree([2, 2]);
        expect(IsSameTree(mergeTrees(p1, p2), r1)).toBe(true);
    });
});

describe("508 测试用例", () => {
    test(`[5,2,-3] should return [2,-3,4]`, () => {
        const p1 = CreateTree([5, 2, -3]);
        expect(findFrequentTreeSum(p1)).toEqual([2, -3, 4]);
    });

    test(`[5,2,-5] should return [2]`, () => {
        const p1 = CreateTree([5, 2, -5]);
        expect(findFrequentTreeSum(p1)).toEqual([2]);
    });
});

describe("572 测试用例", () => {
    test(`[3,4,5,1,2], [4,1,2] should return true`, () => {
        const p1 = CreateTree([3, 4, 5, 1, 2]);
        const p2 = CreateTree([4, 1, 2]);
        expect(isSubtree(p1, p2)).toEqual(true);
    });

    test(`[3,4,5,1,2,null,null,null,null,0], [4,1,2] should return false`, () => {
        const p1 = CreateTree([
            3,
            4,
            5,
            1,
            2,
            -Infinity,
            -Infinity,
            -Infinity,
            -Infinity,
            0,
        ]);
        const p2 = CreateTree([4, 1, 2]);
        expect(isSubtree(p1, p2)).toEqual(false);
    });

    test(`[1, 1], [1] should return true`, () => {
        const p1 = CreateTree([1, 1]);
        const p2 = CreateTree([1]);
        expect(isSubtree(p1, p2)).toEqual(true);
    });
});

describe("543 测试用例", () => {
    test(`[1,2,3,4,5] should return 3`, () => {
        const p1 = CreateTree([1, 2, 3, 4, 5]);
        expect(diameterOfBinaryTree(p1)).toBe(3);
    });

    test(`[1,2] should return 1`, () => {
        const p1 = CreateTree([1, 2]);
        expect(diameterOfBinaryTree(p1)).toBe(1);
    });
});

describe("654 测试用例", () => {
    test(`[3,2,1,6,0,5] should return [6,3,5,null,2,0,null,null,1]`, () => {
        const p1 = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
        const p2 = CreateTree([
            6,
            3,
            5,
            -Infinity,
            2,
            0,
            -Infinity,
            -Infinity,
            1,
        ]);
        expect(IsSameTree(p1, p2)).toBe(true);
    });

    test(`[3,2,1] should return [3,null,2,null,1]`, () => {
        const p1 = constructMaximumBinaryTree([3, 2, 1]);
        const p2 = CreateTree([3, -Infinity, 2, -Infinity, 1]);
        expect(IsSameTree(p1, p2)).toBe(true);
    });
});
