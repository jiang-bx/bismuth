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
import { findMedianSortedArrays } from "./13.4";
import { findMin } from "./14.153";
import { findMinHard } from "./15.154";
import { search } from "./16.33";
import { search81 } from "./17.81";
import { searchMatrix } from "./18.74";
import { searchMatrixII } from "./19.240";
import { kthSmallest } from "./20.378";
import { findKthNumber } from "./21.668";
import { splitArray } from "./22.410";

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

    test(`[1,2,1,3,5,6,4] should return 5`, () => {
        expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5);
    });
});

describe("04 测试用例", () => {
    test(`[1,3], [2] should return 2`, () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    });

    test(`[1,2], [3, 4] should return 2.5`, () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    });
});

describe("153 测试用例", () => {
    test(`[3,4,5,1,2] should return 1`, () => {
        expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    });

    test(`[4,5,6,7,0,1,2] should return 0`, () => {
        expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    });

    test(`[11,13,15,17] should return 11`, () => {
        expect(findMin([11, 13, 15, 17])).toBe(11);
    });

    test(`[2,3,4,5,1] should return 1`, () => {
        expect(findMin([2, 3, 4, 5, 1])).toBe(1);
    });
});

describe("154 测试用例", () => {
    test(`[1,3,5] should return 1`, () => {
        expect(findMinHard([1, 3, 5])).toBe(1);
    });

    test(`[2,2,2,0,1] should return 0`, () => {
        expect(findMinHard([2, 2, 2, 0, 1])).toBe(0);
    });

    test(`[3,1,3] should return 1`, () => {
        expect(findMinHard([3, 1, 3])).toBe(1);
    });

    test(`[3,1] should return 1`, () => {
        expect(findMinHard([3, 1])).toBe(1);
    });
});

describe("33 测试用例", () => {
    test(`[4,5,6,7,0,1,2] 0 should return 4`, () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    });

    test(`[4,5,6,7,0,1,2] 3 should return -1`, () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    });

    test(`[1] 0 should return -1`, () => {
        expect(search([1], 0)).toBe(-1);
    });
});

describe("81 测试用例", () => {
    test(`[2,5,6,0,0,1,2] 0 should return true`, () => {
        expect(search81([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true);
    });

    test(`[2,5,6,0,0,1,2] 3 should return false`, () => {
        expect(search81([2, 5, 6, 0, 0, 1, 2], 3)).toBe(false);
    });

    test(`[1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1] 2 should return true`, () => {
        expect(
            search81(
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
                2
            )
        ).toBe(true);
    });

    test(`[5,1,3] 3 should return true`, () => {
        expect(search81([5, 1, 3], 3)).toBe(true);
    });
});

describe("74 测试用例", () => {
    test(`[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3 should return true`, () => {
        expect(
            searchMatrix(
                [
                    [1, 3, 5, 7],
                    [10, 11, 16, 20],
                    [23, 30, 34, 60],
                ],
                3
            )
        ).toBe(true);
    });

    test(`[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13 should return false`, () => {
        expect(
            searchMatrix(
                [
                    [1, 3, 5, 7],
                    [10, 11, 16, 20],
                    [23, 30, 34, 60],
                ],
                13
            )
        ).toBe(false);
    });
});

describe("240 测试用例", () => {
    test(`5 should return true`, () => {
        expect(
            searchMatrixII(
                [
                    [1, 4, 7, 11, 15],
                    [2, 5, 8, 12, 19],
                    [3, 6, 9, 16, 22],
                    [10, 13, 14, 17, 24],
                    [18, 21, 23, 26, 30],
                ],
                5
            )
        ).toBe(true);
    });

    test(`20 should return false`, () => {
        expect(
            searchMatrixII(
                [
                    [1, 4, 7, 11, 15],
                    [2, 5, 8, 12, 19],
                    [3, 6, 9, 16, 22],
                    [10, 13, 14, 17, 24],
                    [18, 21, 23, 26, 30],
                ],
                20
            )
        ).toBe(false);
    });
});

describe("378 测试用例", () => {
    test(`8 should return 13`, () => {
        expect(
            kthSmallest(
                [
                    [1, 5, 9],
                    [10, 11, 13],
                    [12, 13, 15],
                ],
                8
            )
        ).toBe(13);
    });

    test(`1 should return -5`, () => {
        expect(kthSmallest([[-5]], 1)).toBe(-5);
    });

    test(`8 should return 100`, () => {
        expect(
            kthSmallest(
                [
                    [1, 2, 3],
                    [4, 5, 100],
                    [12, 13, 101],
                ],
                8
            )
        ).toBe(100);
    });
});

describe("668 测试用例", () => {
    test(`m = 3, n = 3, k = 5 should return 3`, () => {
        expect(findKthNumber(3, 3, 5)).toBe(3);
    });

    test(`m = 2, n = 3, k = 6 should return 6`, () => {
        expect(findKthNumber(2, 3, 6)).toBe(6);
    });
});

describe("410 测试用例", () => {
    test(`2 should return 18`, () => {
        expect(splitArray([7, 2, 5, 10, 8], 2)).toBe(18);
    });

    test(`2 should return 9`, () => {
        expect(splitArray([1, 2, 3, 4, 5], 2)).toBe(9);
    });

    test(`3 should return 4`, () => {
        expect(splitArray([1, 4, 4], 3)).toBe(4);
    });
});
