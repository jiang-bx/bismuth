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
import { longestUnivaluePath } from "./12.687";
import { isScramble } from "./13.87";
import { levelOrder } from "./14.102";
import { CreateEmployee, getImportance } from "./15.690";
import { widthOfBinaryTree } from "./16.662";
import { findSecondMinimumValue } from "./17.671";
import { findBottomLeftValue } from "./18.513";
import { largestValues } from "./19.515";

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
            -Infinity,
            -Infinity,
            1,
        ]);
        expect(IsSameTree(p1, p2)).toBe(true);
    });

    test(`[3,2,1] should return [3,null,2,null,1]`, () => {
        const p1 = constructMaximumBinaryTree([3, 2, 1]);
        const p2 = CreateTree([
            3,
            -Infinity,
            2,
            -Infinity,
            -Infinity,
            -Infinity,
            1,
        ]);
        expect(IsSameTree(p1, p2)).toBe(true);
    });
});

describe("687 测试用例", () => {
    test(`[5,4,5,1,1,5] should return 2`, () => {
        const p1 = CreateTree([5, 4, 5, 1, 1, -Infinity, 5]);
        expect(longestUnivaluePath(p1)).toBe(2);
    });

    test(`[1,4,5,4,4,5] should return 2`, () => {
        const p1 = CreateTree([1, 4, 5, 4, 4, -Infinity, 5]);
        expect(longestUnivaluePath(p1)).toBe(2);
    });

    test(`[1, 2, 3] should return 0`, () => {
        const p1 = CreateTree([1]);
        expect(longestUnivaluePath(p1)).toBe(0);
    });
});

describe("87 测试用例", () => {
    test(`s1 = "great", s2 = "rgeat" should return true`, () => {
        expect(isScramble("great", "rgeat")).toBe(true);
    });

    test(`s1 = "abcde", s2 = "caebd" should return false`, () => {
        expect(isScramble("abcde", "caebd")).toBe(false);
    });

    test(`s1 = "a", s2 = "a" should return true`, () => {
        expect(isScramble("a", "a")).toBe(true);
    });

    test(`s1 = "ab", s2 = "ba" should return true`, () => {
        expect(isScramble("ab", "ba")).toBe(true);
    });
});

describe("102 测试用例", () => {
    test(`[3,9,20,-Infinity,-Infinity,15,7] should return [[3],[9,20],[15,7]]`, () => {
        const p1 = CreateTree([3, 9, 20, -Infinity, -Infinity, 15, 7]);
        expect(levelOrder(p1)).toEqual([[3], [9, 20], [15, 7]]);
    });

    test(`[1] should return [[1]]`, () => {
        const p1 = CreateTree([1]);
        expect(levelOrder(p1)).toEqual([[1]]);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        expect(levelOrder(p1)).toEqual([]);
    });
});

describe("690 测试用例", () => {
    test(`[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1 should return [[3],[9,20],[15,7]]`, () => {
        const p1 = CreateEmployee([
            [1, 5, [2, 3]],
            [2, 3, []],
            [3, 3, []],
        ]);
        expect(getImportance(p1, 1)).toBe(11);
    });
});

describe("662 测试用例", () => {
    test(`[1,3,2,5,3,-Infinity,9] should return 4`, () => {
        const p1 = CreateTree([1, 3, 2, 5, 3, -Infinity, 9]);
        expect(widthOfBinaryTree(p1)).toBe(4);
    });
});

describe("671 测试用例", () => {
    test(`[2, 2, 5, -Infinity, -Infinity, 5, 7] should return 5`, () => {
        const p1 = CreateTree([2, 2, 5, -Infinity, -Infinity, 5, 7]);
        expect(findSecondMinimumValue(p1)).toBe(5);
    });

    test(`[2,2,2] should return -1`, () => {
        const p1 = CreateTree([2, 2, 2]);
        expect(findSecondMinimumValue(p1)).toBe(-1);
    });

    test(`[1,1,3,1,1,3,4,3,1] should return 3`, () => {
        const p1 = CreateTree([1, 1, 3, 1, 1, 3, 4, 3, 1]);
        expect(findSecondMinimumValue(p1)).toBe(3);
    });
});

describe("513 测试用例", () => {
    test(`[2,1,3] should return 1`, () => {
        const p1 = CreateTree([2, 1, 3]);
        expect(findBottomLeftValue(p1)).toBe(1);
    });

    test(`[1, 2, 3, 4, -Infinity, 5, 6, -Infinity, -Infinity, -Infinity, -Infinity, 7,] should return 7`, () => {
        const p1 = CreateTree([
            1,
            2,
            3,
            4,
            -Infinity,
            5,
            6,
            -Infinity,
            -Infinity,
            -Infinity,
            -Infinity,
            7,
        ]);
        expect(findBottomLeftValue(p1)).toBe(7);
    });
});

describe("515 测试用例", () => {
    test(`[2,1,3] should return [2, 3]`, () => {
        const p1 = CreateTree([2, 1, 3]);
        expect(largestValues(p1)).toEqual([2, 3]);
    });

    test(`[1,3,2,5,3,null,9] should return [1,3,9]`, () => {
        const p1 = CreateTree([1, 3, 2, 5, 3, -Infinity, 9]);
        expect(largestValues(p1)).toEqual([1, 3, 9]);
    });
});
