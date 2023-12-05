import { canPlaceFlowers } from "./01.605";
import { maxProfit } from "./02.121";
import { maxProfit1 } from "./03.122";
import { arrayPairSum } from "./04.561";
import { findContentChildren } from "./05.455";
import { distributeCandies } from "./06.575";
import { candy } from "./07.135";
import { longestPalindrome } from "./08.409";
import { leastInterval } from "./09.621";
import { largestNumber } from "./10.179";
import { merge } from "./11.56";
import { insert } from "./12.57";
import { summaryRanges } from "./13.228";
import { findMinArrowShots } from "./14.452";
import { eraseOverlapIntervals } from "./15.435";
import { findLongestChain } from "./16.646";
import { reconstructQueue } from "./17.406";
import { majorityElement } from "./18.169";
import { findKthLargest } from "./19.215";
import { sortColors } from "./20.75";

describe("523 测试用例", () => {
    test(`flowerbed = [1,0,0,0,1], n = 1 should return true`, () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    });

    test(`flowerbed = [1,0,0,0,1], n = 2 should return false`, () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
    });

    test(`flowerbed = [1,0,1,0,1,0,1], n = 0 should return true`, () => {
        expect(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0)).toBe(true);
    });

    test(`flowerbed = [0,0,1,0,1], n = 1 should return true`, () => {
        expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true);
    });
});

describe("121 测试用例", () => {
    test(`[7,1,5,3,6,4] should return 5`, () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    test(`[7,6,4,3,1] should return 0`, () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    test(`[2,4,1] should return 2`, () => {
        expect(maxProfit([2, 4, 1])).toBe(2);
    });
});

describe("122 测试用例", () => {
    test(`[7,1,5,3,6,4] should return 7`, () => {
        expect(maxProfit1([7, 1, 5, 3, 6, 4])).toBe(7);
    });

    test(`[7,6,4,3,1] should return 0`, () => {
        expect(maxProfit1([7, 6, 4, 3, 1])).toBe(0);
    });

    test(`[1,2,3,4,5] should return 4`, () => {
        expect(maxProfit1([1, 2, 3, 4, 5])).toBe(4);
    });
});

describe("561 测试用例", () => {
    test(`[1,4,3,2] should return 4`, () => {
        expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
    });

    test(`[6,2,6,5,1,2] should return 9`, () => {
        expect(arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9);
    });

    test(`[6214, -2290, 2833, -7908] should return -5075`, () => {
        expect(arrayPairSum([6214, -2290, 2833, -7908])).toBe(-5075);
    });
});

describe("455 测试用例", () => {
    test(`[1, 2, 3], [1, 1] should return 1`, () => {
        expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1);
    });

    test(`[1, 2], [1, 2, 3] should return 2`, () => {
        expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2);
    });
});

describe("575 测试用例", () => {
    test(`[1,1,2,2,3,3] should return 3`, () => {
        expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3);
    });

    test(`[1,1,2,3] should return 2`, () => {
        expect(distributeCandies([1, 1, 2, 3])).toBe(2);
    });

    test(`[6,6,6,6] should return 1`, () => {
        expect(distributeCandies([6, 6, 6, 6])).toBe(1);
    });
});

describe("135 测试用例", () => {
    test(`[1,0,2] should return 5`, () => {
        expect(candy([1, 0, 2])).toBe(5);
    });

    test(`[1,2,2] should return 4`, () => {
        expect(candy([1, 2, 2])).toBe(4);
    });

    test(`[1,2,2,5,4,3,2] should return 14`, () => {
        expect(candy([1, 2, 2, 5, 4, 3, 2])).toBe(14);
    });
});

describe("409 测试用例", () => {
    test(`abccccdd should return 7`, () => {
        expect(longestPalindrome("abccccdd")).toBe(7);
    });

    test(`a should return 1`, () => {
        expect(longestPalindrome("a")).toBe(1);
    });

    test(`aaaaaccc should return 7`, () => {
        expect(longestPalindrome("aaaaaccc")).toBe(7);
    });
});

describe("621 测试用例", () => {
    test(`tasks = ["A","A","A","B","B","B"], n = 2 should return 8`, () => {
        expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
    });

    test(`tasks = ["A","A","A","B","B","B"], n = 0 should return 6`, () => {
        expect(leastInterval(["A", "A", "A", "B", "B", "B"], 0)).toBe(6);
    });

    test(`tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2 should return 16`, () => {
        expect(
            leastInterval(
                ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
                2
            )
        ).toBe(16);
    });
});

describe("179 测试用例", () => {
    test(`nums = [10,2] should return 210`, () => {
        expect(largestNumber([10, 2])).toBe("210");
    });

    test(`nums = [3,30,34,5,9] should return 9534330`, () => {
        expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
    });
});

describe("56 测试用例", () => {
    test(`[[1,3],[2,6],[8,10],[15,18]] should return [[1,6],[8,10],[15,18]]`, () => {
        expect(
            merge([
                [1, 3],
                [2, 6],
                [8, 10],
                [15, 18],
            ])
        ).toEqual([
            [1, 6],
            [8, 10],
            [15, 18],
        ]);
    });

    test(`[[1,4],[4,5]] should return [[1,5]]`, () => {
        expect(
            merge([
                [1, 4],
                [4, 5],
            ])
        ).toEqual([[1, 5]]);
    });

    test(`[[1,4],[0,4]] should return [[0,4]]`, () => {
        expect(
            merge([
                [1, 4],
                [0, 4],
            ])
        ).toEqual([[0, 4]]);
    });
});

describe("57 测试用例", () => {
    test(`intervals = [[1,3],[6,9]], newInterval = [2,5] should return [[1,5],[6,9]]`, () => {
        expect(
            insert(
                [
                    [1, 3],
                    [6, 9],
                ],
                [2, 5]
            )
        ).toEqual([
            [1, 5],
            [6, 9],
        ]);
    });

    test(`intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8] should return [[1,2],[3,10],[12,16]]`, () => {
        expect(
            insert(
                [
                    [1, 2],
                    [3, 5],
                    [6, 7],
                    [8, 10],
                    [12, 16],
                ],
                [4, 8]
            )
        ).toEqual([
            [1, 2],
            [3, 10],
            [12, 16],
        ]);
    });

    test(`intervals = [], newInterval = [5,7] should return [[5,7]]`, () => {
        expect(insert([], [5, 7])).toEqual([[5, 7]]);
    });

    test(`intervals = [[1,5]], newInterval = [2,3] should return [[1,5]]`, () => {
        expect(insert([[1, 5]], [2, 3])).toEqual([[1, 5]]);
    });

    test(`intervals = [[1,5]], newInterval = [2,7] should return [[1,7]]`, () => {
        expect(insert([[1, 5]], [2, 7])).toEqual([[1, 7]]);
    });

    test(`intervals = [[1,5]], newInterval = [0,0] should return [[0,0],[0,5]]`, () => {
        expect(insert([[1, 5]], [0, 0])).toEqual([
            [0, 0],
            [1, 5],
        ]);
    });
});

describe("228 测试用例", () => {
    test(`nums = [0,1,2,4,5,7] should return ["0->2","4->5","7"]`, () => {
        expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual([
            "0->2",
            "4->5",
            "7",
        ]);
    });

    test(`nums = [0,2,3,4,6,8,9] should return ["0","2->4","6","8->9"]`, () => {
        expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
            "0",
            "2->4",
            "6",
            "8->9",
        ]);
    });
});

describe("452 测试用例", () => {
    test(`nums = [[10,16],[2,8],[1,6],[7,12]]] should return 2`, () => {
        expect(
            findMinArrowShots([
                [10, 16],
                [2, 8],
                [1, 6],
                [7, 12],
            ])
        ).toBe(2);
    });

    test(`nums = [[1,2],[3,4],[5,6],[7,8]] should return 4`, () => {
        expect(
            findMinArrowShots([
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8],
            ])
        ).toBe(4);
    });

    test(`nums = [[1,2],[2,3],[3,4],[4,5]] should return 2`, () => {
        expect(
            findMinArrowShots([
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
            ])
        ).toBe(2);
    });

    test(`nums = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]] should return 2`, () => {
        expect(
            findMinArrowShots([
                [3, 9],
                [7, 12],
                [3, 8],
                [6, 8],
                [9, 10],
                [2, 9],
                [0, 9],
                [3, 9],
                [0, 6],
                [2, 8],
            ])
        ).toBe(2);
    });
});

describe("435 测试用例", () => {
    test(`[[1,2],[2,3],[3,4],[1,3]] should return 1`, () => {
        expect(
            eraseOverlapIntervals([
                [1, 2],
                [2, 3],
                [3, 4],
                [1, 3],
            ])
        ).toBe(1);
    });

    test(`[[1,2], [1,2], [1,2]] should return 2`, () => {
        expect(
            eraseOverlapIntervals([
                [1, 2],
                [1, 2],
                [1, 2],
            ])
        ).toBe(2);
    });

    test(`[[1,2],[2,3]] should return 0`, () => {
        expect(
            eraseOverlapIntervals([
                [1, 2],
                [2, 3],
            ])
        ).toBe(0);
    });

    test(`[[1,100],[11,22],[1,11],[2,12]] should return 2`, () => {
        expect(
            eraseOverlapIntervals([
                [1, 100],
                [11, 22],
                [1, 11],
                [2, 12],
            ])
        ).toBe(2);
    });
});

describe("646 测试用例", () => {
    test(`[[1,2],[2,3],[3,4]] should return 2`, () => {
        expect(
            findLongestChain([
                [1, 2],
                [2, 3],
                [3, 4],
            ])
        ).toBe(2);
    });

    test(`[[1,2],[7,8],[4,5]] should return 3`, () => {
        expect(
            findLongestChain([
                [1, 2],
                [7, 8],
                [4, 5],
            ])
        ).toBe(3);
    });
});

describe("406 测试用例", () => {
    test(`[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]] should return [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]`, () => {
        expect(
            reconstructQueue([
                [7, 0],
                [4, 4],
                [7, 1],
                [5, 0],
                [6, 1],
                [5, 2],
            ])
        ).toEqual([
            [5, 0],
            [7, 0],
            [5, 2],
            [6, 1],
            [4, 4],
            [7, 1],
        ]);
    });

    test(`[[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]] should return [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]`, () => {
        expect(
            reconstructQueue([
                [6, 0],
                [5, 0],
                [4, 0],
                [3, 2],
                [2, 2],
                [1, 4],
            ])
        ).toEqual([
            [4, 0],
            [5, 0],
            [2, 2],
            [3, 2],
            [1, 4],
            [6, 0],
        ]);
    });
});

describe("169 测试用例", () => {
    test(`[3,2,3] should return 3`, () => {
        expect(majorityElement([3, 2, 3])).toBe(3);
    });

    test(`[2,2,1,1,1,2,2] should return 2`, () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });
});

describe("215 测试用例", () => {
    test(`[3,2,1,5,6,4], k = 2 should return 5`, () => {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    });

    test(`[3,2,3,1,2,4,5,5,6], k = 4 should return 4`, () => {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
    });
});

describe("75 测试用例", () => {
    test(`[2,0,2,1,1,0] should return [0,0,1,1,2,2]`, () => {
        const a = [2, 0, 2, 1, 1, 0];
        sortColors(a);
        expect(a).toEqual([0, 0, 1, 1, 2, 2]);
    });

    test(`[2,0,1] should return [0,1,2]`, () => {
        const a = [2, 0, 1];
        sortColors(a);
        expect(a).toEqual([0, 1, 2]);
    });
});
