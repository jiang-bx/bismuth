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
import { averageOfLevels } from "./20.637";
import { zigzagLevelOrder } from "./21.103";
import { levelOrderBottom } from "./22.107";
import { binaryTreePaths } from "./23.257";
import { addOneRow } from "./24.623";
import { findTarget } from "./25.653";
import { maxDepth } from "./26.104";
import { minDepth } from "./27.111";
import { hasPathSum } from "./28.112";
import { pathSum1 } from "./29.113";
import { sumNumbers } from "./30.129";
import { sumOfLeftLeaves } from "./31.404";
import { rightSideView } from "./32.199";
import { printTree } from "./33.655";
import { preorderTraversal } from "./34.144";
import { tree2str } from "./35.606";
import { isValidSerialization } from "./36.331";
import { findDuplicateSubtrees } from "./37.652";
import { deserialize, serialize } from "./38.297";
import { deserialize449, serialize449 } from "./39.449";
import { postorderTraversal } from "./40.145";
import { inorderTraversal } from "./41.94";
import { searchBST } from "./42.700";
import { getMinimumDifference } from "./43.530";
import { convertBST } from "./44.538";

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

describe("637 测试用例", () => {
    test(`[3,9,20,null,null,15,7] should return [3.00000,14.50000,11.00000]`, () => {
        const p1 = CreateTree([3, 9, 20, -Infinity, -Infinity, 15, 7]);
        expect(averageOfLevels(p1)).toEqual([3.0, 14.5, 11.0]);
    });

    test(`[3,9,20,15,7] should return [3.0, 14.5, 11.0]`, () => {
        const p1 = CreateTree([3, 9, 20, 15, 7]);
        expect(averageOfLevels(p1)).toEqual([3.0, 14.5, 11.0]);
    });
});

describe("103 测试用例", () => {
    test(`[3,9,20,null,null,15,7] should return [[3],[20,9],[15,7]]`, () => {
        const p1 = CreateTree([3, 9, 20, -Infinity, -Infinity, 15, 7]);
        expect(zigzagLevelOrder(p1)).toEqual([[3], [20, 9], [15, 7]]);
    });

    test(`[1] should return [[1]]`, () => {
        const p1 = CreateTree([1]);
        expect(zigzagLevelOrder(p1)).toEqual([[1]]);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        expect(zigzagLevelOrder(p1)).toEqual([]);
    });
});

describe("107 测试用例", () => {
    test(`[3,9,20,null,null,15,7] should return [[15,7],[9,20],[3]]`, () => {
        const p1 = CreateTree([3, 9, 20, -Infinity, -Infinity, 15, 7]);
        expect(levelOrderBottom(p1)).toEqual([[15, 7], [9, 20], [3]]);
    });

    test(`[1] should return [[1]]`, () => {
        const p1 = CreateTree([1]);
        expect(levelOrderBottom(p1)).toEqual([[1]]);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        expect(levelOrderBottom(p1)).toEqual([]);
    });
});

describe("257 测试用例", () => {
    test(`[1,2,3, -Infinity,5] should return ["1->2->5","1->3"]`, () => {
        const p1 = CreateTree([1, 2, 3, -Infinity, 5]);
        expect(binaryTreePaths(p1)).toEqual(["1->2->5", "1->3"]);
    });

    test(`[1] should return ["1"]`, () => {
        const p1 = CreateTree([1]);
        expect(binaryTreePaths(p1)).toEqual(["1"]);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        expect(levelOrderBottom(p1)).toEqual([]);
    });
});

describe("623 测试用例", () => {
    test(`[4,2,6,3,1,5], val = 1, depth = 2 should return [4,1,1,2,null,null,6,3,1,5]`, () => {
        const p1 = CreateTree([4, 2, 6, 3, 1, 5]);
        const p2 = CreateTree([
            4,
            1,
            1,
            2,
            -Infinity,
            -Infinity,
            6,
            3,
            1,
            -Infinity,
            -Infinity,
            -Infinity,
            -Infinity,
            5,
        ]);
        expect(IsSameTree(addOneRow(p1, 1, 2), p2)).toBe(true);
    });

    test(`[4,2,null,3,1], val = 1, depth = 3 should return [4,2,null,1,1,3,null,null,1]`, () => {
        const p1 = CreateTree([4, 2, -Infinity, 3, 1]);
        const p2 = CreateTree([
            4,
            2,
            -Infinity,
            1,
            1,
            -Infinity,
            -Infinity,
            3,
            -Infinity,
            -Infinity,
            1,
        ]);
        expect(IsSameTree(addOneRow(p1, 1, 3), p2)).toBe(true);
    });

    test(`[1,2,3,4], val = 5, depth = 4 should return [1, 2, 3, 4, 5, 5]`, () => {
        const p1 = CreateTree([1, 2, 3, 4]);
        const p2 = CreateTree([
            1,
            2,
            3,
            4,
            -Infinity,
            -Infinity,
            -Infinity,
            5,
            5,
        ]);
        expect(IsSameTree(addOneRow(p1, 5, 4), p2)).toBe(true);
    });
});

describe("653 测试用例", () => {
    test(`[5,3,6,2,4,null,7], k = 9 should return true`, () => {
        const p1 = CreateTree([5, 3, 6, 2, 4, -Infinity, 7]);
        expect(findTarget(p1, 9)).toBe(true);
    });

    test(`[5,3,6,2,4,null,7], k = 28 should return false`, () => {
        const p1 = CreateTree([5, 3, 6, 2, 4, -Infinity, 7]);
        expect(findTarget(p1, 28)).toBe(false);
    });
});

describe("104 测试用例", () => {
    test(`[3, 9, 20, -Infinity, -Infinity, 15, 7], k = 9 should return 3`, () => {
        const p1 = CreateTree([3, 9, 20, -Infinity, -Infinity, 15, 7]);
        expect(maxDepth(p1)).toBe(3);
    });

    test(`[1, -Infinity, 2], k = 28 should return 2`, () => {
        const p1 = CreateTree([1, -Infinity, 2]);
        expect(maxDepth(p1)).toBe(2);
    });
});

describe("111 测试用例", () => {
    test(`[3, 9, 20, -Infinity, -Infinity, 15, 7], k = 9 should return 2`, () => {
        const p1 = CreateTree([3, 9, 20, -Infinity, -Infinity, 15, 7]);
        expect(minDepth(p1)).toBe(2);
    });

    test(`[2,-Infinity,3], k = 28 should return 3`, () => {
        const p1 = CreateTree([
            2,
            -Infinity,
            3,
            -Infinity,
            -Infinity,
            -Infinity,
            4,
        ]);
        expect(minDepth(p1)).toBe(3);
    });
});

describe("112 测试用例", () => {
    test(`[5, 4, 8, 11, -Infinity, -Infinity, 13, 4, 7, 2, -Infinity, -Infinity, -Infinity, 1,], k = 22 should return true`, () => {
        const p1 = CreateTree([
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
            -Infinity,
            1,
        ]);
        expect(hasPathSum(p1, 22)).toBe(true);
    });

    test(`[1,2,3], k = 5 should return false`, () => {
        const p1 = CreateTree([1, 2, 3]);
        expect(hasPathSum(p1, 5)).toBe(false);
    });

    test(`[], k = 0 should return false`, () => {
        const p1 = CreateTree([]);
        expect(hasPathSum(p1, 0)).toBe(false);
    });
});

describe("113 测试用例", () => {
    test(`[5, 4, 8, 11, -Infinity, 13, 4, 7, 2, -Infinity, -Infinity, -Infinity, -Infinity, 5, 1,], k = 22 should return [[5,4,11,2],[5,8,4,5]]`, () => {
        const p1 = CreateTree([
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
        expect(pathSum1(p1, 22)).toEqual([
            [5, 4, 11, 2],
            [5, 8, 4, 5],
        ]);
    });

    test(`[1,2,3], k = 5 should return false`, () => {
        const p1 = CreateTree([1, 2, 3]);
        expect(pathSum1(p1, 5)).toEqual([]);
    });

    test(`[], k = 0 should return []`, () => {
        const p1 = CreateTree([]);
        expect(pathSum1(p1, 0)).toEqual([]);
    });
});

describe("129 测试用例", () => {
    test(`[1,2,3] should return 25`, () => {
        const p1 = CreateTree([1, 2, 3]);
        expect(sumNumbers(p1)).toBe(25);
    });

    test(`[4,9,0,5,1] should return 1026`, () => {
        const p1 = CreateTree([4, 9, 0, 5, 1]);
        expect(sumNumbers(p1)).toBe(1026);
    });
});

describe("404 测试用例", () => {
    test(`[3,9,20,null,null,15,7] should return 24`, () => {
        const p1 = CreateTree([3, 9, 20, -Infinity, -Infinity, 15, 7]);
        expect(sumOfLeftLeaves(p1)).toBe(24);
    });

    test(`[1] should return 0`, () => {
        const p1 = CreateTree([1]);
        expect(sumOfLeftLeaves(p1)).toBe(0);
    });
});

describe("199 测试用例", () => {
    test(`[1,2,3,null,5,null,4] should return [1,3,4]`, () => {
        const p1 = CreateTree([1, 2, 3, -Infinity, 5, -Infinity, 4]);
        expect(rightSideView(p1)).toEqual([1, 3, 4]);
    });

    test(`[1,null,3] should return [1,3,4]`, () => {
        const p1 = CreateTree([1, -Infinity, 3]);
        expect(rightSideView(p1)).toEqual([1, 3]);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        expect(rightSideView(p1)).toEqual([]);
    });
});

describe("655 测试用例", () => {
    test(`[1,2] should return [["","1",""],["2","",""]]`, () => {
        const p1 = CreateTree([1, 2]);
        expect(printTree(p1)).toEqual([
            ["", "1", ""],
            ["2", "", ""],
        ]);
    });

    test(`[1,2,3,null,4] should return [["","","","1","","",""],["","2","","","","3",""],["","","4","","","",""]]`, () => {
        const p1 = CreateTree([1, 2, 3, -Infinity, 4]);
        expect(printTree(p1)).toEqual([
            ["", "", "", "1", "", "", ""],
            ["", "2", "", "", "", "3", ""],
            ["", "", "4", "", "", "", ""],
        ]);
    });
});

describe("144 测试用例", () => {
    test(`[1,null,2,3] should return [1,2,3]`, () => {
        const p1 = CreateTree([1, -Infinity, 2, -Infinity, -Infinity, 3]);
        expect(preorderTraversal(p1)).toEqual([1, 2, 3]);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        expect(preorderTraversal(p1)).toEqual([]);
    });

    test(`[1] should return [1]`, () => {
        const p1 = CreateTree([1]);
        expect(preorderTraversal(p1)).toEqual([1]);
    });

    test(`[1,2] should return [1,2]`, () => {
        const p1 = CreateTree([1, 2]);
        expect(preorderTraversal(p1)).toEqual([1, 2]);
    });

    test(`[1,null,2] should return [1,2]`, () => {
        const p1 = CreateTree([1, -Infinity, 2]);
        expect(preorderTraversal(p1)).toEqual([1, 2]);
    });
});

describe("606 测试用例", () => {
    test(`[1,2,3,4] should return "1(2(4))(3)"`, () => {
        const p1 = CreateTree([1, 2, 3, 4]);
        expect(tree2str(p1)).toBe("1(2(4))(3)");
    });

    test(`[1,2,3, null, 4] should return "1(2()(4))(3)"`, () => {
        const p1 = CreateTree([1, 2, 3, -Infinity, 4]);
        expect(tree2str(p1)).toBe("1(2()(4))(3)");
    });
});

describe("331 测试用例", () => {
    test(`9,3,4,#,#,1,#,#,2,#,6,#,# should return true`, () => {
        expect(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")).toBe(true);
    });

    test(`1,# should return false`, () => {
        expect(isValidSerialization("1,#")).toBe(false);
    });

    test(`9,#,#,1 should return false`, () => {
        expect(isValidSerialization("9,#,#,1")).toBe(false);
    });
});

describe("652 测试用例", () => {
    test(`[1,2,3,4,null,2,4,null,null,4] should return [[2,4],[4]]`, () => {
        const p1 = CreateTree([
            1,
            2,
            3,
            4,
            -Infinity,
            2,
            4,
            -Infinity,
            -Infinity,
            -Infinity,
            -Infinity,
            4,
        ]);

        const res = [[4], [2, 4]];
        const val = findDuplicateSubtrees(p1);
        let isErr = true;

        if (val.length !== res.length) {
            isErr = false;
        } else {
            for (let i = 0; i < val.length; i++) {
                if (!IsSameTree(val[i], CreateTree(res[i])) && isErr) {
                    isErr = false;
                }
            }
        }

        expect(isErr).toBe(true);
    });

    test(`[2,1,1] should return [[1]]`, () => {
        const p1 = CreateTree([2, 1, 1]);

        const res = [[1]];
        const val = findDuplicateSubtrees(p1);
        let isErr = true;

        if (val.length !== res.length) {
            isErr = false;
        } else {
            for (let i = 0; i < val.length; i++) {
                if (!IsSameTree(val[i], CreateTree(res[i])) && isErr) {
                    isErr = false;
                }
            }
        }

        expect(isErr).toBe(true);
    });

    test(`[2,2,2,3,null,3,null] should return [[2,3],[3]]`, () => {
        const p1 = CreateTree([2, 2, 2, 3, -Infinity, 3, -Infinity]);

        const res = [[3], [2, 3]];
        const val = findDuplicateSubtrees(p1);
        let isErr = true;

        if (val.length !== res.length) {
            isErr = false;
        } else {
            for (let i = 0; i < val.length; i++) {
                if (!IsSameTree(val[i], CreateTree(res[i])) && isErr) {
                    isErr = false;
                }
            }
        }

        expect(isErr).toBe(true);
    });
});

describe("297 测试用例", () => {
    test(`[1,2,3,null,null,4,5] should return [1,2,3,null,null,4,5]`, () => {
        const p1 = CreateTree([1, 2, 3, -Infinity, -Infinity, 4, 5]);
        const val = deserialize(serialize(p1));
        const isErr = IsSameTree(p1, val);
        expect(isErr).toBe(true);
    });

    test(`[1,2] should return [1,2]`, () => {
        const p1 = CreateTree([1, 2]);
        const val = deserialize(serialize(p1));
        const isErr = IsSameTree(p1, val);
        expect(isErr).toBe(true);
    });

    test(`[1] should return [1]`, () => {
        const p1 = CreateTree([1]);
        const val = deserialize(serialize(p1));
        const isErr = IsSameTree(p1, val);
        expect(isErr).toBe(true);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        const val = deserialize(serialize(p1));
        const isErr = IsSameTree(p1, val);
        expect(isErr).toBe(true);
    });
});

describe("449 测试用例", () => {
    test(`[2,1,3] should return [2,1,3]`, () => {
        const p1 = CreateTree([2, 1, 3]);
        const val = deserialize449(serialize449(p1));
        const isErr = IsSameTree(p1, val);
        expect(isErr).toBe(true);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        const val = deserialize(serialize(p1));
        const isErr = IsSameTree(p1, val);
        expect(isErr).toBe(true);
    });
});

describe("145 测试用例", () => {
    test(`[1,null,2,3] should return [3,2,1]`, () => {
        const p1 = CreateTree([1, -Infinity, 2, -Infinity, -Infinity, 3]);
        expect(postorderTraversal(p1)).toEqual([3, 2, 1]);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        expect(preorderTraversal(p1)).toEqual([]);
    });

    test(`[1] should return [1]`, () => {
        const p1 = CreateTree([1]);
        expect(preorderTraversal(p1)).toEqual([1]);
    });
});

describe("94 测试用例", () => {
    test(`[1,null,2,3] should return [1,3,2]`, () => {
        const p1 = CreateTree([1, -Infinity, 2, -Infinity, -Infinity, 3]);
        expect(inorderTraversal(p1)).toEqual([1, 3, 2]);
    });

    test(`[] should return []`, () => {
        const p1 = CreateTree([]);
        expect(inorderTraversal(p1)).toEqual([]);
    });

    test(`[1] should return [1]`, () => {
        const p1 = CreateTree([1]);
        expect(inorderTraversal(p1)).toEqual([1]);
    });
});

describe("700 测试用例", () => {
    test(`[4,2,7,1,3], val = 2 should return [2,1,3]`, () => {
        const p1 = searchBST(CreateTree([4, 2, 7, 1, 3]), 2);
        const res = CreateTree([2, 1, 3]);
        expect(IsSameTree(p1, res)).toBe(true);
    });

    test(`[4,2,7,1,3], val = 5 should return [2,1,3]`, () => {
        const p1 = searchBST(CreateTree([4, 2, 7, 1, 3]), 5);
        const res = CreateTree([]);
        expect(IsSameTree(p1, res)).toBe(true);
    });
});

describe("530 测试用例", () => {
    test(`[4,2,6,1,3] should return 1`, () => {
        const p1 = CreateTree([4, 2, 6, 1, 3]);
        expect(getMinimumDifference(p1)).toBe(1);
    });

    test(`[1,0,48,null,null,12,49] should return 1`, () => {
        const p1 = CreateTree([1, 0, 48, -Infinity, -Infinity, 12, 49]);
        expect(getMinimumDifference(p1)).toBe(1);
    });

    test(`[236,104,701,null,227,null,911] should return 9`, () => {
        const p1 = CreateTree([236, 104, 701, -Infinity, 227, -Infinity, 911]);
        expect(getMinimumDifference(p1)).toBe(9);
    });
});

describe("538 测试用例", () => {
    test(`[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8] should return [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]`, () => {
        const p1 = convertBST(
            CreateTree([
                4,
                1,
                6,
                0,
                2,
                5,
                7,
                -Infinity,
                -Infinity,
                -Infinity,
                3,
                -Infinity,
                -Infinity,
                -Infinity,
                8,
            ])
        );
        const r1 = CreateTree([
            30,
            36,
            21,
            36,
            35,
            26,
            15,
            -Infinity,
            -Infinity,
            -Infinity,
            33,
            -Infinity,
            -Infinity,
            -Infinity,
            8,
        ]);
        expect(IsSameTree(p1, r1)).toBe(true);
    });

    test(`[0,null,1] should return [1,null,1]`, () => {
        const p1 = convertBST(CreateTree([0, -Infinity, 1]));
        const r1 = CreateTree([1, -Infinity, 1]);
        expect(IsSameTree(p1, r1)).toBe(true);
    });

    test(`[1,0,2] should return [3,3,2]`, () => {
        const p1 = convertBST(CreateTree([1, 0, 2]));
        const r1 = CreateTree([3, 3, 2]);
        expect(IsSameTree(p1, r1)).toBe(true);
    });

    test(`[3,2,4,1] should return [7,9,4,10]`, () => {
        const p1 = convertBST(CreateTree([3, 2, 4, 1]));
        const r1 = CreateTree([7, 9, 4, 10]);
        expect(IsSameTree(p1, r1)).toBe(true);
    });
});
