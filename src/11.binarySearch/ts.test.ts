import { guessNumWrap } from "./01.374";
import { searchInsert } from "./02.35";
import { isPerfectSquare } from "./03.367";
import { arrangeCoins } from "./04.441";
import { searchRange } from "./05.34";
import { singleNonDuplicate } from "./06.540";
import { hIndex } from "./07.275";
import { findRightInterval } from "./08.436";
import { lengthOfLIS } from "./09.300";
import { maxEnvelopes } from "./10.354";
import { findClosestElements } from "./11.658";
import { findPeakElement } from "./12.162";

describe("374 测试用例", () => {
    test(`"10 should return 6`, () => {
        expect(guessNumWrap(10, 6)).toBe(6);
    });

    test(`"1 should return 1`, () => {
        expect(guessNumWrap(1, 1)).toBe(1);
    });

    test(`"2 should return 1`, () => {
        expect(guessNumWrap(2, 1)).toBe(1);
    });
});

describe("35 测试用例", () => {
    test(`[1,3,5,6], 5 should return 2`, () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });

    test(`[1,3,5,6], 2 should return 1`, () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    });

    test(`[1,3,5,6], 7 should return 4`, () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });
});

describe("367 测试用例", () => {
    test(`16 should return true`, () => {
        expect(isPerfectSquare(16)).toBe(true);
    });

    test(`14 should return false`, () => {
        expect(isPerfectSquare(14)).toBe(false);
    });
});

describe("441 测试用例", () => {
    test(`5 should return 2`, () => {
        expect(arrangeCoins(5)).toBe(2);
    });

    test(`8 should return 3`, () => {
        expect(arrangeCoins(8)).toBe(3);
    });
});

describe("34 测试用例", () => {
    test(`[5,7,7,8,8,10], target = 8 should return [3,4]`, () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    });

    test(`[2, 2], target = 2 should return [0,1]`, () => {
        expect(searchRange([2, 2], 2)).toEqual([0, 1]);
    });

    test(`[5,7,7,8,8,10], target = 6 should return [-1,-1]`, () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    });

    test(`[], target = 0 should return [-1,-1]`, () => {
        expect(searchRange([], 0)).toEqual([-1, -1]);
    });
});

describe("540 测试用例", () => {
    test(`[1,1,2,3,3,4,4,8,8] should return 2`, () => {
        expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])).toBe(2);
    });

    test(`[3,3,7,7,10,11,11] should return 10`, () => {
        expect(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])).toBe(10);
    });
});

describe("275 测试用例", () => {
    test(`[0,1,3,5,6] should return 3`, () => {
        expect(hIndex([0, 1, 3, 5, 6])).toBe(3);
    });

    test(`[1,2,100] should return 2`, () => {
        expect(hIndex([1, 2, 100])).toBe(2);
    });
});

describe("436 测试用例", () => {
    test(`[[1,2]] should return [-1]`, () => {
        expect(findRightInterval([[1, 2]])).toEqual([-1]);
    });

    test(`[[3,4],[2,3],[1,2]] should return [-1,0,1]`, () => {
        expect(
            findRightInterval([
                [3, 4],
                [2, 3],
                [1, 2],
            ])
        ).toEqual([-1, 0, 1]);
    });

    test(`[[1,4],[2,3],[3,4]] should return [-1,0,1]`, () => {
        expect(
            findRightInterval([
                [1, 4],
                [2, 3],
                [3, 4],
            ])
        ).toEqual([-1, 2, -1]);
    });
});

describe("300 测试用例", () => {
    test(`[ 10, 9, 2, 5, 3, 7, 101, 18 ] should return 4`, () => {
        expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    });

    test(`[ 0,1,0,3,2,3 ] should return 4`, () => {
        expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
    });

    test(`[7,7,7,7,7,7,7] should return 1`, () => {
        expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1);
    });
});

describe("354 测试用例", () => {
    test(`[[5,4],[6,4],[6,7],[2,3]] should return 3`, () => {
        expect(
            maxEnvelopes([
                [5, 4],
                [6, 4],
                [6, 7],
                [2, 3],
            ])
        ).toBe(3);
    });

    test(`[[1,1],[1,1],[1,1]] should return 1`, () => {
        expect(
            maxEnvelopes([
                [1, 1],
                [1, 1],
                [1, 1],
            ])
        ).toBe(1);
    });

    test(`test3 should return 5`, () => {
        expect(
            maxEnvelopes([
                [2, 100],
                [3, 200],
                [4, 300],
                [5, 500],
                [5, 400],
                [5, 250],
                [6, 370],
                [6, 360],
                [7, 380],
            ])
        ).toBe(5);
    });
});

describe("658 测试用例", () => {
    test(`[1,2,3,4,5], k = 4, x = 3 should return [1,2,3,4]`, () => {
        expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([
            1, 2, 3, 4,
        ]);
    });

    test(`[1,2,3,4,5], k = 4, x = -1 should return [1,2,3,4]`, () => {
        expect(findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([
            1, 2, 3, 4,
        ]);
    });
});

describe("162 测试用例", () => {
    test(`[1,2,3,1] should return 2`, () => {
        expect(findPeakElement([1, 2, 3, 1])).toBe(2);
    });

    test(`[1,2,1,3,5,6,4] should return 1`, () => {
        expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(1);
    });
});
