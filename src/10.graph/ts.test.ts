import { arrayNesting } from "./01.565";
import { letterCombinations } from "./02.17";
import { integerReplacement } from "./03.397";
import { countArrangement } from "./04.526";

describe("565 测试用例", () => {
    test(`[5,4,0,3,1,6,2] should return 4`, () => {
        expect(arrayNesting([5, 4, 0, 3, 1, 6, 2])).toBe(4);
    });
});

describe("17 测试用例", () => {
    test(`"23" should return ["ad","ae","af","bd","be","bf","cd","ce","cf"]`, () => {
        expect(letterCombinations("23")).toEqual([
            "ad",
            "ae",
            "af",
            "bd",
            "be",
            "bf",
            "cd",
            "ce",
            "cf",
        ]);
    });

    test(`"" should return []`, () => {
        expect(letterCombinations("")).toEqual([]);
    });

    test(`"2" should return ["a","b","c"]`, () => {
        expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
    });
});

describe("397 测试用例", () => {
    test(`8 should return 3`, () => {
        expect(integerReplacement(8)).toBe(3);
    });

    test(`7 should return 4`, () => {
        expect(integerReplacement(7)).toBe(4);
    });

    test(`4 should return 2`, () => {
        expect(integerReplacement(4)).toBe(2);
    });

    test(`65535 should return 17`, () => {
        expect(integerReplacement(65535)).toBe(17);
    });

    test(`1234 should return 14`, () => {
        expect(integerReplacement(1234)).toBe(14);
    });
});

describe("526 测试用例", () => {
    test(`2 should return 2`, () => {
        expect(countArrangement(2)).toBe(2);
    });

    test(`1 should return 1`, () => {
        expect(countArrangement(1)).toBe(1);
    });
});
