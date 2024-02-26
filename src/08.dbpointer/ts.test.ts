import { reverseVowels } from "./01.345";
import { validPalindrome } from "./02.680";
import { twoSum } from "./03.167";
import { threeSum } from "./04.15";
import { threeSumClosest } from "./05.16";
import { maxArea } from "./06.11";
import { trap } from "./07.42";
import { removeElement } from "./08.27";
import { removeDuplicates } from "./09.26";
import { removeDuplicates1 } from "./10.80";
import { CreateListNode, IsSameListNode, deleteDuplicates } from "./11.83";
import { deleteDuplicates1 } from "./12.82";
import { triangleNumber } from "./13.611";
import { findRepeatedDnaSequences } from "./14.187";
import { findMaxAverage } from "./15.643";
import { findLengthOfLCIS } from "./16.674";
import { minSubArrayLen } from "./17.209";

describe("345 测试用例", () => {
    test(`hello should return holle`, () => {
        expect(reverseVowels("hello")).toBe("holle");
    });

    test(`leetcode should return leotcede`, () => {
        expect(reverseVowels("leetcode")).toBe("leotcede");
    });
});

describe("680 测试用例", () => {
    test(`aba should return true`, () => {
        expect(validPalindrome("aba")).toBe(true);
    });

    test(`abca should return true`, () => {
        expect(validPalindrome("abca")).toBe(true);
    });

    test(`abc should return false`, () => {
        expect(validPalindrome("abc")).toBe(false);
    });

    test(`aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga should return true`, () => {
        expect(
            validPalindrome(
                "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
            )
        ).toBe(true);
    });
});

describe("167 测试用例", () => {
    test(`numbers = [2,7,11,15], target = 9 should return [1,2]`, () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

    test(`numbers = [2,3,4], target = 6 should return [1,3]`, () => {
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    });

    test(`numbers = [-1,0], target = -1 should return [1,2]`, () => {
        expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    });
});

describe("15 测试用例", () => {
    test(`[-1,0,1,2,-1,-4] should return [[-1,-1,2],[-1,0,1]]`, () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
            [-1, -1, 2],
            [-1, 0, 1],
        ]);
    });

    test(`[0,1,1] should return []`, () => {
        expect(threeSum([0, 1, 1])).toEqual([]);
    });

    test(`[0,0,0] should return [[0, 0, 0]]`, () => {
        expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    });
});

describe("16 测试用例", () => {
    test(`nums = [-1,2,1,-4], target = 1 should return 2`, () => {
        expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    });

    test(`nums = [0,0,0], target = 1 should return 0`, () => {
        expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
    });

    test(`nums = [833,736,953,-584,-448,207,128,-445,126,248,871,860,333,-899,463,488,-50,-331,903,575,265,162,-733,648,678,549,579,-172,-897,562,-503,-508,858,259,-347,-162,-505,-694,300,-40,-147,383,-221,-28,-699,36,-229,960,317,-585,879,406,2,409,-393,-934,67,71,-312,787,161,514,865,60,555,843,-725,-966,-352,862,821,803,-835,-635,476,-704,-78,393,212,767,-833,543,923,-993,274,-839,389,447,741,999,-87,599,-349,-515,-553,-14,-421,-294,-204,-713,497,168,337,-345,-948,145,625,901,34,-306,-546,-536,332,-467,-729,229,-170,-915,407,450,159,-385,163,-420,58,869,308,-494,367,-33,205,-823,-869,478,-238,-375,352,113,-741,-970,-990,802,-173,-977,464,-801,-408,-77,694,-58,-796,-599,-918,643,-651,-555,864,-274,534,211,-910,815,-102,24,-461,-146], target = -7111 should return -2960
    `, () => {
        expect(
            threeSumClosest(
                [
                    833, 736, 953, -584, -448, 207, 128, -445, 126, 248, 871,
                    860, 333, -899, 463, 488, -50, -331, 903, 575, 265, 162,
                    -733, 648, 678, 549, 579, -172, -897, 562, -503, -508, 858,
                    259, -347, -162, -505, -694, 300, -40, -147, 383, -221, -28,
                    -699, 36, -229, 960, 317, -585, 879, 406, 2, 409, -393,
                    -934, 67, 71, -312, 787, 161, 514, 865, 60, 555, 843, -725,
                    -966, -352, 862, 821, 803, -835, -635, 476, -704, -78, 393,
                    212, 767, -833, 543, 923, -993, 274, -839, 389, 447, 741,
                    999, -87, 599, -349, -515, -553, -14, -421, -294, -204,
                    -713, 497, 168, 337, -345, -948, 145, 625, 901, 34, -306,
                    -546, -536, 332, -467, -729, 229, -170, -915, 407, 450, 159,
                    -385, 163, -420, 58, 869, 308, -494, 367, -33, 205, -823,
                    -869, 478, -238, -375, 352, 113, -741, -970, -990, 802,
                    -173, -977, 464, -801, -408, -77, 694, -58, -796, -599,
                    -918, 643, -651, -555, 864, -274, 534, 211, -910, 815, -102,
                    24, -461, -146,
                ],
                -7111
            )
        ).toBe(-2960);
    });
});

describe("11 测试用例", () => {
    test(`[1,8,6,2,5,4,8,3,7] should return 49 `, () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    test(`[1,1] should return 1`, () => {
        expect(maxArea([1, 1])).toBe(1);
    });
});

describe("42 测试用例", () => {
    test(`[0,1,0,2,1,0,1,3,2,1,2,1] should return 6 `, () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    });

    test(`[4,2,0,3,2,5] should return 9`, () => {
        expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    });
});

describe("27 测试用例", () => {
    test(`[3,2,2,3], val = 3 should return 2 `, () => {
        expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
    });

    test(`[0,1,2,2,3,0,4,2], val = 2 should return 5 `, () => {
        expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
    });
});

describe("26 测试用例", () => {
    test(`[1, 1, 2] should return 2 `, () => {
        expect(removeDuplicates([1, 1, 2])).toBe(2);
    });

    test(`[0,0,1,1,1,2,2,3,3,4] should return 5 `, () => {
        expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
    });
});

describe("80 测试用例", () => {
    test(`[1,1,1,2,2,3] should return 5 `, () => {
        expect(removeDuplicates1([1, 1, 1, 2, 2, 3])).toBe(5);
    });

    test(`[0,0,1,1,1,1,2,3,3] should return 7 `, () => {
        expect(removeDuplicates1([0, 0, 1, 1, 1, 1, 2, 3, 3])).toBe(7);
    });
});

describe("83 测试用例", () => {
    test(`[1,1,2] should return [1,2] `, () => {
        const originListNode = CreateListNode([1, 1, 2]);
        const resListNode = CreateListNode([1, 2]);

        expect(
            IsSameListNode(deleteDuplicates(originListNode), resListNode)
        ).toBe(true);
    });

    test(`[1,1,2,3,3] should return [1,2,3] `, () => {
        const originListNode = CreateListNode([1, 1, 2, 3, 3]);
        const resListNode = CreateListNode([1, 2, 3]);

        expect(
            IsSameListNode(deleteDuplicates(originListNode), resListNode)
        ).toBe(true);
    });

    test(`[1,1,1] should return [1] `, () => {
        const originListNode = CreateListNode([1, 1, 1]);
        const resListNode = CreateListNode([1]);

        expect(
            IsSameListNode(deleteDuplicates(originListNode), resListNode)
        ).toBe(true);
    });
});

describe("82 测试用例", () => {
    test(`[1,2,3,3,4,4,5] should return [1,2,5] `, () => {
        const originListNode = CreateListNode([1, 2, 3, 3, 4, 4, 5]);
        const resListNode = CreateListNode([1, 2, 5]);

        expect(
            IsSameListNode(deleteDuplicates1(originListNode), resListNode)
        ).toBe(true);
    });

    test(`[1,1,1,2,3] should return [2,3] `, () => {
        const originListNode = CreateListNode([1, 1, 1, 2, 3]);
        const resListNode = CreateListNode([2, 3]);

        expect(
            IsSameListNode(deleteDuplicates1(originListNode), resListNode)
        ).toBe(true);
    });
});

describe("611 测试用例", () => {
    test(`[2,2,3,4] should return 3 `, () => {
        expect(triangleNumber([2, 2, 3, 4])).toBe(3);
    });

    test(`[4,2,3,4] should return 4 `, () => {
        expect(triangleNumber([4, 2, 3, 4])).toBe(4);
    });
});

describe("187 测试用例", () => {
    test(`AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT should return ["AAAAACCCCC","CCCCCAAAAA"]
    `, () => {
        expect(
            findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
        ).toEqual(["AAAAACCCCC", "CCCCCAAAAA"]);
    });

    test(`AAAAAAAAAAAAA should return ["AAAAAAAAAA"]
    `, () => {
        expect(findRepeatedDnaSequences("AAAAAAAAAAAAA")).toEqual([
            "AAAAAAAAAA",
        ]);
    });
});

describe("643 测试用例", () => {
    test(`[1,12,-5,-6,50,3], k = 4 should return 12.75`, () => {
        expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
    });

    test(`[5], k = 1 should return 5`, () => {
        expect(findMaxAverage([5], 1)).toBe(5);
    });
});

describe("674 测试用例", () => {
    test(`[1,3,5,4,7] should return 3`, () => {
        expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
    });

    test(`[1,3,5,7] should return 4`, () => {
        expect(findLengthOfLCIS([1, 3, 5, 7])).toBe(4);
    });

    test(`[2,2,2,2,2] should return 1`, () => {
        expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
    });
});

describe("209 测试用例", () => {
    test(`7, nums = [2,3,1,2,4,3] should return 2`, () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
    });

    test(`4, nums = [1,4,4] should return 1`, () => {
        expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
    });

    test(`11, nums = [1,1,1,1,1,1,1,1] should return 0`, () => {
        expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
    });

    test(`213, nums = [12,28,83,4,25,26,25,2,25,25,25,12] should return 8`, () => {
        expect(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12])).toBe(8);
    });
});
