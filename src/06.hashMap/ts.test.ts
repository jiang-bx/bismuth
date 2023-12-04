import { containsDuplicate } from "./01.217";
import { judgeSquareSum } from "./02.633";
import { intersection } from "./03.349";
import { longestConsecutive } from "./04.128";
import { isHappy } from "./05.202";
import { findWords } from "./06.500";
import { wordPattern } from "./07.290";
import { findPairs } from "./08.532";
import { isIsomorphic } from "./09.205";
import { fractionToDecimal } from "./10.166";
import { getMaxRepetitions } from "./11.466";
import { twoSum } from "./13.01";
import { twoSum1 } from "./14.167";
import { findRestaurant } from "./15.599";
import { containsNearbyDuplicate } from "./16.219";
import { containsNearbyAlmostDuplicate } from "./17.220";
import { findLHS } from "./18.594";
import { intersect } from "./19.350";
import { leastBricks } from "./20.554";
import { findDuplicate } from "./21.609";
import { fourSumCount } from "./22.454";
import { fourSum } from "./23.18";
import { subarraySum } from "./24.560";
import { checkSubarraySum } from "./25.523";
import { findMaxLength } from "./26.525";

describe("217 测试用例", () => {
    test(`[1,2,3,1] should return true`, () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    test(`[1,2,3,4] should return false`, () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    test(`[1,1,1,3,3,4,3,2,4,2] should return true`, () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });
});

describe("633 测试用例", () => {
    test(`5 should return true`, () => {
        expect(judgeSquareSum(5)).toBe(true);
    });

    test(`3 should return false`, () => {
        expect(judgeSquareSum(3)).toBe(false);
    });
});

describe("349 测试用例", () => {
    test(`nums1 = [1,2,2,1], nums2 = [2,2] should return [2]`, () => {
        expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
    });

    test(`nums1 = [4,9,5], nums2 = [9,4,9,8,4] should return [9,4]`, () => {
        expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toContainEqual([
            [4, 9],
            [9, 4],
        ]);
    });
});

describe("128 测试用例", () => {
    test(`[100,4,200,1,3,2] should return 4`, () => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    });

    test(`[0,3,7,2,5,8,4,6,0,1] should return 9`, () => {
        expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
    });
});

describe("202 测试用例", () => {
    test(`19 should return true`, () => {
        expect(isHappy(19)).toBe(true);
    });

    test(`2 should return false`, () => {
        expect(isHappy(2)).toBe(false);
    });
});

describe("500 测试用例", () => {
    test(`["Hello","Alaska","Dad","Peace"] should return ["Alaska","Dad"]`, () => {
        expect(findWords(["Hello", "Alaska", "Dad", "Peace"])).toEqual([
            "Alaska",
            "Dad",
        ]);
    });

    test(`["omk"] should return []`, () => {
        expect(findWords(["omk"])).toEqual([]);
    });

    test(`["adsdf","sfd"] should return ["adsdf","sfd"]`, () => {
        expect(findWords(["adsdf", "sfd"])).toEqual(["adsdf", "sfd"]);
    });
});

describe("290 测试用例", () => {
    test(`abba, dog cat cat dog should return true`, () => {
        expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
    });

    test(`abba, dog cat cat fish should return false`, () => {
        expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
    });

    test(`aaaa, dog cat cat dog should return false`, () => {
        expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false);
    });
});

describe("532 测试用例", () => {
    test(`[3, 1, 4, 1, 5], 2 should return 2`, () => {
        expect(findPairs([3, 1, 4, 1, 5], 2)).toBe(2);
    });

    test(`[1, 2, 3, 4, 5], 1 should return 4`, () => {
        expect(findPairs([1, 2, 3, 4, 5], 1)).toBe(4);
    });

    test(`[1, 3, 1, 5, 4], 0 should return 1`, () => {
        expect(findPairs([1, 3, 1, 5, 4], 0)).toBe(1);
    });

    test(`[1,2,4,4,3,3,0,9,2,3], 3 should return 2`, () => {
        expect(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)).toBe(2);
    });
});

describe("205 测试用例", () => {
    test(`egg, add should return true`, () => {
        expect(isIsomorphic("egg", "add")).toBe(true);
    });

    test(`foo, bar should return false`, () => {
        expect(isIsomorphic("foo", "bar")).toBe(false);
    });

    test(`paper, title should return true`, () => {
        expect(isIsomorphic("paper", "title")).toBe(true);
    });
});

describe("166 测试用例", () => {
    test(`1, 2 should return "0.5"`, () => {
        expect(fractionToDecimal(1, 2)).toBe("0.5");
    });

    test(`2, 1 should return "2"`, () => {
        expect(fractionToDecimal(2, 1)).toBe("2");
    });

    test(`4, 333 should return "0.(012)"`, () => {
        expect(fractionToDecimal(4, 333)).toBe("0.(012)");
    });
});

describe("466 测试用例", () => {
    test(`s1 = "acb", n1 = 4, s2 = "ab", n2 = 2 should return 2`, () => {
        expect(getMaxRepetitions("acb", 4, "ab", 2)).toBe(2);
    });

    test(`s1 = "acb", n1 = 1, s2 = "acb", n2 = 1 should return 1`, () => {
        expect(getMaxRepetitions("acb", 1, "acb", 1)).toBe(1);
    });
});

describe("138 测试用例", () => {
    // copyRandomList()
});

describe("1 测试用例", () => {
    test(`nums = [2,7,11,15], target = 9 should return [0,1]`, () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test(`nums =[3,2,4], target = 6 should return [1,2]`, () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test(`nums = [3,3], target = 6 should return [0,1]`, () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
});

describe("167 测试用例", () => {
    test(`nums = [2,7,11,15], target = 9 should return [1,2]`, () => {
        expect(twoSum1([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

    test(`nums =[3,2,4], target = 6 should return [1,3]`, () => {
        expect(twoSum1([3, 2, 4], 6)).toEqual([1, 3]);
    });

    test(`nums = [-1,0], target = -1 should return [1,2]`, () => {
        expect(twoSum1([-1, 0], -1)).toEqual([1, 2]);
    });
});

describe("599 测试用例", () => {
    test(`list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], 
          list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun" 
          should return ["Shogun"]`, () => {
        expect(
            findRestaurant(
                ["Shogun", "Tapioca Express", "Burger King", "KFC"],
                [
                    "Piatti",
                    "The Grill at Torrey Pines",
                    "Hungry Hunter Steakhouse",
                    "Shogun",
                ]
            )
        ).toEqual(["Shogun"]);
    });

    test(`list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
          list2 = ["KFC", "Shogun", "Burger King"] 
          should return ["Shogun"]`, () => {
        expect(
            findRestaurant(
                ["Shogun", "Tapioca Express", "Burger King", "KFC"],
                ["KFC", "Shogun", "Burger King"]
            )
        ).toEqual(["Shogun"]);
    });
});

describe("219 测试用例", () => {
    test(`nums = [1,2,3,1], k = 3 should return true`, () => {
        expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
    });

    test(`nums = [1,0,1,1], k = 1 should return true`, () => {
        expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
    });

    test(`nums = [1,2,3,1,2,3], k = 2 should return false`, () => {
        expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
    });
});

describe("220 测试用例", () => {
    test(`nums = [1,2,3,1], indexDiff = 3, valueDiff = 0 should return true`, () => {
        expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toBe(true);
    });

    test(`nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3 should return false`, () => {
        expect(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)).toBe(
            false
        );
    });
});

describe("594 测试用例", () => {
    test(`nums = [1,3,2,2,5,2,3,7] should return 5`, () => {
        expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5);
    });

    test(`nums = [1,2,3,4] should return 2`, () => {
        expect(findLHS([1, 2, 3, 4])).toBe(2);
    });

    test(`nums = [1,1,1,1] should return 0`, () => {
        expect(findLHS([1, 1, 1, 1])).toBe(0);
    });
});

describe("350 测试用例", () => {
    test(`nums1 = [1,2,2,1], nums2 = [2,2] should return [2,2]`, () => {
        expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    });

    test(`nums1 = [4,9,5], nums2 = [9,4,9,8,4] should return [4,9]`, () => {
        expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(
            expect.arrayContaining([4, 9])
        );
    });

    test(`nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81], nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48] should return [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61]`, () => {
        expect(
            intersect(
                [
                    61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35,
                    89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40,
                    20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3,
                    41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42,
                    65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43,
                    81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81,
                ],
                [
                    5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88,
                    45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52,
                    73, 50, 77, 44, 61, 48,
                ]
            )
        ).toEqual(
            expect.arrayContaining([
                5, 4, 57, 79, 7, 89, 88, 45, 34, 92, 38, 85, 6, 0, 77, 44, 61,
            ])
        );
    });
});

describe("554 测试用例", () => {
    test(`wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]] should return 2`, () => {
        expect(
            leastBricks([
                [1, 2, 2, 1],
                [3, 1, 2],
                [1, 3, 2],
                [2, 4],
                [3, 1, 2],
                [1, 3, 1, 1],
            ])
        ).toBe(2);
    });

    test(`wall = [[1],[1],[1]] should return 3`, () => {
        expect(leastBricks([[1], [1], [1]])).toBe(3);
    });
});

describe("609 测试用例", () => {
    test(`paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"] should return`, () => {
        expect(
            findDuplicate([
                "root/a 1.txt(abcd) 2.txt(efgh)",
                "root/c 3.txt(abcd)",
                "root/c/d 4.txt(efgh)",
                "root 4.txt(efgh)",
            ])
        ).toEqual(
            expect.arrayContaining([
                ["root/a/2.txt", "root/c/d/4.txt", "root/4.txt"],
                ["root/a/1.txt", "root/c/3.txt"],
            ])
        );
    });

    test(`paths =["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"] should return`, () => {
        expect(
            findDuplicate([
                "root/a 1.txt(abcd) 2.txt(efgh)",
                "root/c 3.txt(abcd)",
                "root/c/d 4.txt(efgh)",
            ])
        ).toEqual(
            expect.arrayContaining([
                ["root/a/2.txt", "root/c/d/4.txt"],
                ["root/a/1.txt", "root/c/3.txt"],
            ])
        );
    });
});

describe("454 测试用例", () => {
    test(`nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2] should return 2`, () => {
        expect(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])).toBe(2);
    });

    test(`nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0] should return 1`, () => {
        expect(fourSumCount([0], [0], [0], [0])).toBe(1);
    });
});

describe("18 测试用例", () => {
    test(`nums = [1,0,-1,0,-2,2], target = 0 should return [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`, () => {
        expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
            [-2, -1, 1, 2],
            [-2, 0, 0, 2],
            [-1, 0, 0, 1],
        ]);
    });

    test(`nums = [2,2,2,2,2], target = 8 should return [[2,2,2,2]]`, () => {
        expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
    });
});

describe("560 测试用例", () => {
    test(`nums = [1,1,1], k = 2 should return 2`, () => {
        expect(subarraySum([1, 1, 1], 2)).toBe(2);
    });

    test(`nums = [1,2,3], k = 3 should return 2`, () => {
        expect(subarraySum([1, 2, 3], 3)).toBe(2);
    });
});

describe("523 测试用例", () => {
    test(`nums = [23,2,4,6,7], k = 6 should return true`, () => {
        expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBe(true);
    });

    test(`nums = [23,2,6,4,7], k = 6 should return true`, () => {
        expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBe(true);
    });

    test(`nums = [23,2,6,4,7], k = 13 should return false`, () => {
        expect(checkSubarraySum([23, 2, 6, 4, 7], 13)).toBe(false);
    });

    test(`nums = [23,2,4,6,6], k = 7 should return true`, () => {
        expect(checkSubarraySum([23, 2, 4, 6, 6], 7)).toBe(true);
    });
});

describe("525 测试用例", () => {
    test(`nums = [0, 1] should return 2`, () => {
        expect(findMaxLength([0, 1])).toBe(2);
    });

    test(`nums = [0, 1, 0] should return 2`, () => {
        expect(findMaxLength([0, 1, 0])).toBe(2);
    });

    test(`nums = [0,1,1,0,1,1,1,0] should return 4`, () => {
        expect(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0])).toBe(4);
    });
});
