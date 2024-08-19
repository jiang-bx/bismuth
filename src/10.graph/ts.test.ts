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
import { combinationSum3 } from "./11.216";
import { combinationSum21 } from "./12.40";
import { permute } from "./13.46";
import { permuteUnique } from "./14.47";
import { nextPermutation } from "./15.31";
import { nextGreaterElement } from "./16.556";
import { getPermutation } from "./17.60";
import { findSubsequences } from "./18.491";
import { subsets } from "./19.78";
import { subsetsWithDup } from "./20.90";
import { exist } from "./21.79";
import { restoreIpAddresses } from "./22.93";
import { findItinerary } from "./23.332";
import { diffWaysToCompute } from "./24.241";
import { addOperators } from "./25.282";
import { judgePoint24 } from "./26.679";
import { generateParenthesis } from "./27.22";
import { removeInvalidParentheses } from "./28.301";
import { findMinStep } from "./29.488";
import { numIslands } from "./31.200";
import { maxAreaOfIsland } from "./32.695";
import { islandPerimeter } from "./33.463";
import { updateMatrix } from "./34.542";
import { solve } from "./35.130";
import { pacificAtlantic } from "./36.417";
import { updateBoard } from "./37.529";

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

describe("216 测试用例", () => {
    test(`3, 7 should return test1`, () => {
        expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]]);
    });

    test(`3, 9 should return test2`, () => {
        expect(combinationSum3(3, 9)).toEqual([
            [1, 2, 6],
            [1, 3, 5],
            [2, 3, 4],
        ]);
    });

    test(`4, 1 should return test3`, () => {
        expect(combinationSum3(4, 1)).toEqual([]);
    });
});

describe("40 测试用例", () => {
    test(`[10,1,2,7,6,1,5], 8 should return test1`, () => {
        expect(combinationSum21([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6],
        ]);
    });

    test(`[2,5,2,1,2], 5 should return test1`, () => {
        expect(combinationSum21([2, 5, 2, 1, 2], 5)).toEqual([[1, 2, 2], [5]]);
    });
});

describe("46 测试用例", () => {
    test(`[1,2,3] should return test1`, () => {
        expect(permute([1, 2, 3])).toEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]);
    });

    test(`[0,1] should return test1`, () => {
        expect(permute([0, 1])).toEqual([
            [0, 1],
            [1, 0],
        ]);
    });

    test(`[1] should return test1`, () => {
        expect(permute([1])).toEqual([[1]]);
    });
});

describe("47 测试用例", () => {
    test(`[1,1,2] should return test1`, () => {
        expect(permuteUnique([1, 1, 2])).toEqual([
            [1, 1, 2],
            [1, 2, 1],
            [2, 1, 1],
        ]);
    });

    test(`[1,2,3] should return test1`, () => {
        expect(permuteUnique([1, 2, 3])).toEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]);
    });

    test(`[1] should return test1`, () => {
        expect(permuteUnique([1])).toEqual([[1]]);
    });
});

describe("31 测试用例", () => {
    test(`[1,2,3] should return test1`, () => {
        const p = [1, 2, 3];
        nextPermutation(p);
        expect(p).toEqual([1, 3, 2]);
    });

    test(`[3,2,1] should return [1,2,3]`, () => {
        const p = [3, 2, 1];
        nextPermutation(p);
        expect(p).toEqual([1, 2, 3]);
    });

    test(`[1,1,5] should return [1,5,1]`, () => {
        const p = [1, 1, 5];
        nextPermutation(p);
        expect(p).toEqual([1, 5, 1]);
    });
});

describe("556 测试用例", () => {
    test(`12 should return 21`, () => {
        expect(nextGreaterElement(12)).toBe(21);
    });

    test(`21 should return -1`, () => {
        expect(nextGreaterElement(21)).toBe(-1);
    });

    test(`2147483486 should return -1`, () => {
        expect(nextGreaterElement(2147483486)).toBe(-1);
    });
});

describe("60 测试用例", () => {
    test(`3, 3 should return "213"`, () => {
        expect(getPermutation(3, 3)).toBe("213");
    });

    test(`4, 9 should return "2314"`, () => {
        expect(getPermutation(4, 9)).toBe("2314");
    });

    test(`3, 1 should return "123"`, () => {
        expect(getPermutation(3, 1)).toBe("123");
    });
});

describe("491 测试用例", () => {
    test(`[4,6,7,7] should return test1`, () => {
        expect(findSubsequences([4, 6, 7, 7])).toEqual([
            [4, 6],
            [4, 6, 7],
            [4, 6, 7, 7],
            [4, 7],
            [4, 7, 7],
            [6, 7],
            [6, 7, 7],
            [7, 7],
        ]);
    });

    test(`[4,4,3,2,1] should return test2`, () => {
        expect(findSubsequences([4, 4, 3, 2, 1])).toEqual([[4, 4]]);
    });
});

describe("78 测试用例", () => {
    test(`[1, 2, 3] should return test1`, () => {
        expect(subsets([1, 2, 3])).toEqual([
            [],
            [1],
            [2],
            [1, 2],
            [3],
            [1, 3],
            [2, 3],
            [1, 2, 3],
        ]);
    });

    test(`[0] should return test1`, () => {
        expect(subsets([0])).toEqual([[], [0]]);
    });
});

describe("90 测试用例", () => {
    test(`[1, 2, 2] should return test1`, () => {
        expect(subsetsWithDup([1, 2, 2])).toEqual([
            [],
            [1],
            [1, 2],
            [1, 2, 2],
            [2],
            [2, 2],
        ]);
    });

    test(`[4,4,4,1,4] should return test1`, () => {
        expect(subsetsWithDup([4, 4, 4, 1, 4])).toEqual([
            [],
            [1],
            [1, 4],
            [1, 4, 4],
            [1, 4, 4, 4],
            [1, 4, 4, 4, 4],
            [4],
            [4, 4],
            [4, 4, 4],
            [4, 4, 4, 4],
        ]);
    });

    test(`[0] should return test1`, () => {
        expect(subsetsWithDup([0])).toEqual([[], [0]]);
    });
});

describe("79 测试用例", () => {
    test(`ABCCED should return true`, () => {
        expect(
            exist(
                [
                    ["A", "B", "C", "E"],
                    ["S", "F", "C", "S"],
                    ["A", "D", "E", "E"],
                ],
                "ABCCED"
            )
        ).toBe(true);
    });

    test(`SEE should return true`, () => {
        expect(
            exist(
                [
                    ["A", "B", "C", "E"],
                    ["S", "F", "C", "S"],
                    ["A", "D", "E", "E"],
                ],
                "SEE"
            )
        ).toBe(true);
    });

    test(`ABCB should return false`, () => {
        expect(
            exist(
                [
                    ["A", "B", "C", "E"],
                    ["S", "F", "C", "S"],
                    ["A", "D", "E", "E"],
                ],
                "ABCB"
            )
        ).toBe(false);
    });
});

describe("93 测试用例", () => {
    test(`25525511135 should return test1`, () => {
        expect(restoreIpAddresses("25525511135")).toEqual([
            "255.255.11.135",
            "255.255.111.35",
        ]);
    });

    test(`0000 should return test2`, () => {
        expect(restoreIpAddresses("0000")).toEqual(["0.0.0.0"]);
    });

    test(`101023 should return test3`, () => {
        expect(restoreIpAddresses("101023")).toEqual([
            "1.0.10.23",
            "1.0.102.3",
            "10.1.0.23",
            "10.10.2.3",
            "101.0.2.3",
        ]);
    });
});

describe("332 测试用例", () => {
    test(`test1 should return ["JFK","MUC","LHR","SFO","SJC"]`, () => {
        expect(
            findItinerary([
                ["MUC", "LHR"],
                ["JFK", "MUC"],
                ["SFO", "SJC"],
                ["LHR", "SFO"],
            ])
        ).toEqual(["JFK", "MUC", "LHR", "SFO", "SJC"]);
    });

    test(`test2 should return ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]`, () => {
        expect(
            findItinerary([
                ["JFK", "SFO"],
                ["JFK", "ATL"],
                ["SFO", "ATL"],
                ["ATL", "JFK"],
                ["ATL", "SFO"],
            ])
        ).toEqual(["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]);
    });
});

describe("241 测试用例", () => {
    test(`2-1-1 should return [2, 0]`, () => {
        expect(diffWaysToCompute("2-1-1")).toEqual([2, 0]);
    });

    test(`2*3-4*5 should return [-34, -10, -14, -10, 10]`, () => {
        expect(diffWaysToCompute("2*3-4*5")).toEqual([-34, -10, -14, -10, 10]);
    });
});

describe("282 测试用例", () => {
    test(`"123", 6 should return ["1+2+3", "1*2*3"]`, () => {
        expect(addOperators("123", 6)).toEqual(["1+2+3", "1*2*3"]);
    });

    test(`"232", 8 should return ["2*3+2", "2+3*2"]`, () => {
        expect(addOperators("232", 8).sort()).toEqual(
            ["2*3+2", "2+3*2"].sort()
        );
    });

    test(`"3456237490", 9191 should return []`, () => {
        expect(addOperators("3456237490", 9191)).toEqual([]);
    });
});

describe("679 测试用例", () => {
    test(`[4, 1, 8, 7] should return true`, () => {
        expect(judgePoint24([4, 1, 8, 7])).toBe(true);
    });

    test(`[1, 2, 1, 2] should return false`, () => {
        expect(judgePoint24([1, 2, 1, 2])).toBe(false);
    });
});

describe("22 测试用例", () => {
    test(`3 should return ["((()))",
            "(()())",
            "(())()",
            "()(())",
            "()()()",]`, () => {
        expect(generateParenthesis(3)).toEqual([
            "((()))",
            "(()())",
            "(())()",
            "()(())",
            "()()()",
        ]);
    });

    test(`1 should return ["()"]`, () => {
        expect(generateParenthesis(1)).toEqual(["()"]);
    });
});

describe("301 测试用例", () => {
    test(`()())() should return ["(())()","()()()"]`, () => {
        expect(removeInvalidParentheses("()())()").sort()).toEqual(
            ["(())()", "()()()"].sort()
        );
    });

    test(`(a)())() should return ["(a())()","(a)()()"]`, () => {
        expect(removeInvalidParentheses("(a)())()").sort()).toEqual(
            ["(a())()", "(a)()()"].sort()
        );
    });

    test(`)( should return [""]`, () => {
        expect(removeInvalidParentheses(")(")).toEqual([""]);
    });
});

describe("488 测试用例", () => {
    test(`board = "WRRBBW", hand = "RB" should return -1`, () => {
        expect(findMinStep("WRRBBW", "RB")).toBe(-1);
    });

    test(`board = "WWRRBBWW", hand = "WRBRW" should return 2`, () => {
        expect(findMinStep("WWRRBBWW", "WRBRW")).toBe(2);
    });

    test(`board = "G", hand = "GGGGG" should return 2`, () => {
        expect(findMinStep("G", "GGGGG")).toBe(2);
    });

    test(`board = "RBYYBBRRB", hand = "YRBGB" should return 3`, () => {
        expect(findMinStep("RBYYBBRRB", "YRBGB")).toBe(3);
    });
});

describe("200 测试用例", () => {
    test(`grid1 should return 1`, () => {
        expect(
            numIslands([
                ["1", "1", "1", "1", "0"],
                ["1", "1", "0", "1", "0"],
                ["1", "1", "0", "0", "0"],
                ["0", "0", "0", "0", "0"],
            ])
        ).toBe(1);
    });

    test(`grid1 should return 3`, () => {
        expect(
            numIslands([
                ["1", "1", "0", "0", "0"],
                ["1", "1", "0", "0", "0"],
                ["0", "0", "1", "0", "0"],
                ["0", "0", "0", "1", "1"],
            ])
        ).toBe(3);
    });
});

describe("695 测试用例", () => {
    test(`grid1 should return 6`, () => {
        expect(
            maxAreaOfIsland([
                [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            ])
        ).toBe(6);
    });

    test(`grid1 should return 0`, () => {
        expect(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]])).toBe(0);
    });
});

describe("463 测试用例", () => {
    test(`grid1 should return 16`, () => {
        expect(
            islandPerimeter([
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0],
                [1, 1, 0, 0],
            ])
        ).toBe(16);
    });

    test(`grid1 should return 4`, () => {
        expect(islandPerimeter([[1]])).toBe(4);
    });

    test(`grid1 should return 4`, () => {
        expect(islandPerimeter([[1, 0]])).toBe(4);
    });

    test(`grid1 should return 8`, () => {
        expect(
            islandPerimeter([
                [1, 1],
                [1, 1],
            ])
        ).toBe(8);
    });
});

describe("542 测试用例", () => {
    test(`grid1 should return tes1`, () => {
        expect(
            updateMatrix([
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0],
            ])
        ).toEqual([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]);
    });

    test(`grid2 should return tes2`, () => {
        expect(
            updateMatrix([
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 1],
            ])
        ).toEqual([
            [0, 0, 0],
            [0, 1, 0],
            [1, 2, 1],
        ]);
    });
});

describe("130 测试用例", () => {
    test(`board1 should return tes1`, () => {
        const p = [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "O", "X", "X"],
        ];

        solve(p);

        expect(p).toEqual([
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "O", "X", "X"],
        ]);
    });

    test(`board2 should return tes2`, () => {
        const p = [["X"]];
        solve(p);
        expect(p).toEqual([["X"]]);
    });
});

describe("417 测试用例", () => {
    test(`board1 should return tes1`, () => {
        expect(
            pacificAtlantic([
                [1, 2, 2, 3, 5],
                [3, 2, 3, 4, 4],
                [2, 4, 5, 3, 1],
                [6, 7, 1, 4, 5],
                [5, 1, 1, 2, 4],
            ])
        ).toEqual([
            [0, 4],
            [1, 3],
            [1, 4],
            [2, 2],
            [3, 0],
            [3, 1],
            [4, 0],
        ]);
    });

    test(`board2 should return tes2`, () => {
        expect(
            pacificAtlantic([
                [2, 1],
                [1, 2],
            ])
        ).toEqual([
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ]);
    });
});

describe("529 测试用例", () => {
    test(`board1 should return tes1`, () => {
        expect(
            updateBoard(
                [
                    ["E", "E", "E", "E", "E"],
                    ["E", "E", "M", "E", "E"],
                    ["E", "E", "E", "E", "E"],
                    ["E", "E", "E", "E", "E"],
                ],
                [3, 0]
            )
        ).toEqual([
            ["B", "1", "E", "1", "B"],
            ["B", "1", "M", "1", "B"],
            ["B", "1", "1", "1", "B"],
            ["B", "B", "B", "B", "B"],
        ]);
    });

    test(`board2 should return tes2`, () => {
        expect(
            updateBoard(
                [
                    ["B", "1", "E", "1", "B"],
                    ["B", "1", "M", "1", "B"],
                    ["B", "1", "1", "1", "B"],
                    ["B", "B", "B", "B", "B"],
                ],
                [1, 2]
            )
        ).toEqual([
            ["B", "1", "E", "1", "B"],
            ["B", "1", "X", "1", "B"],
            ["B", "1", "1", "1", "B"],
            ["B", "B", "B", "B", "B"],
        ]);
    });
});
