import { arrayNesting } from "./01.565";
import { letterCombinations } from "./02.17";
import { integerReplacement } from "./03.397";
import { countArrangement } from "./04.526";
import { readBinaryWatch } from "./05.401";
import { isValidSudoku } from "./06.36";
import { solveSudoku } from "./07.37";
import { solveNQueens } from "./08.51";
import { combine } from "./09.77";
import { combinationSum } from "./10.39";

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

    test(`5 should return 10`, () => {
        expect(countArrangement(5)).toBe(10);
    });
});

describe("401 测试用例", () => {
    test(`1 should return ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]`, () => {
        expect(readBinaryWatch(1)).toEqual([
            "0:01",
            "0:02",
            "0:04",
            "0:08",
            "0:16",
            "0:32",
            "1:00",
            "2:00",
            "4:00",
            "8:00",
        ]);
    });

    test(`9 should return []`, () => {
        expect(readBinaryWatch(9)).toEqual([]);
    });
});

describe("36 测试用例", () => {
    test(`test1 should return true`, () => {
        expect(
            isValidSudoku([
                ["5", "3", ".", ".", "7", ".", ".", ".", "."],
                ["6", ".", ".", "1", "9", "5", ".", ".", "."],
                [".", "9", "8", ".", ".", ".", ".", "6", "."],
                ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
                ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
                ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
                [".", "6", ".", ".", ".", ".", "2", "8", "."],
                [".", ".", ".", "4", "1", "9", ".", ".", "5"],
                [".", ".", ".", ".", "8", ".", ".", "7", "9"],
            ])
        ).toBe(true);
    });

    test(`test2 should return false`, () => {
        expect(
            isValidSudoku([
                ["8", "3", ".", ".", "7", ".", ".", ".", "."],
                ["6", ".", ".", "1", "9", "5", ".", ".", "."],
                [".", "9", "8", ".", ".", ".", ".", "6", "."],
                ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
                ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
                ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
                [".", "6", ".", ".", ".", ".", "2", "8", "."],
                [".", ".", ".", "4", "1", "9", ".", ".", "5"],
                [".", ".", ".", ".", "8", ".", ".", "7", "9"],
            ])
        ).toBe(false);
    });
});

describe("37 测试用例", () => {
    test(`test1 should return test2`, () => {
        const p = [
            ["5", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ];

        solveSudoku(p);

        expect(p).toEqual([
            ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
            ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
            ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
            ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
            ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
            ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
            ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
            ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
            ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
        ]);
    });
});

describe("51 测试用例", () => {
    test(`4 should return test1`, () => {
        expect(solveNQueens(4)).toEqual([
            [".Q..", "...Q", "Q...", "..Q."],
            ["..Q.", "Q...", "...Q", ".Q.."],
        ]);
    });

    test(`1 should return test2`, () => {
        expect(solveNQueens(1)).toEqual([["Q"]]);
    });
});

describe("77 测试用例", () => {
    test(`4, 2 should return test1`, () => {
        expect(combine(4, 2)).toEqual([
            [1, 2],
            [1, 3],
            [1, 4],
            [2, 3],
            [2, 4],
            [3, 4],
        ]);
    });

    test(`1, 1 should return test2`, () => {
        expect(combine(1, 1)).toEqual([[1]]);
    });
});

describe("39 测试用例", () => {
    test(`[2,3,6,7], 7 should return test1`, () => {
        expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
    });

    test(`[2,3,5], 8 should return test2`, () => {
        expect(combinationSum([2, 3, 5], 8)).toEqual([
            [2, 2, 2, 2],
            [2, 3, 3],
            [3, 5],
        ]);
    });

    test(`[2], 1 should return test3`, () => {
        expect(combinationSum([2], 1)).toEqual([]);
    });
});
