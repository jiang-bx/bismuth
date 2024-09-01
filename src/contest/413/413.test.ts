import { checkTwoChessboards } from "./Q1";
import { resultsArray } from "./Q2";
import { maxScore } from "./Q3";

describe("Q1 test", () => {
    test("test1", () => {
        expect(checkTwoChessboards("a1", "c3")).toBe(true);
    });

    test("test2", () => {
        expect(checkTwoChessboards("a1", "h3")).toBe(false);
    });
});

describe("Q2 test", () => {
    test("test1", () => {
        expect(
            resultsArray(
                [
                    [1, 2],
                    [3, 4],
                    [2, 3],
                    [-3, 0],
                ],
                2
            )
        ).toEqual([-1, 7, 5, 3]);
    });

    test("test2", () => {
        expect(
            resultsArray(
                [
                    [5, 5],
                    [4, 4],
                    [3, 3],
                ],
                1
            )
        ).toEqual([10, 8, 6]);
    });
});

describe("Q3 test", () => {
    test("test1", () => {
        expect(
            maxScore([
                [1, 2, 3],
                [4, 3, 2],
                [1, 4, 3],
            ])
        ).toBe(8);
    });

    test("test2", () => {
        expect(
            maxScore([
                [8, 7, 6],
                [8, 3, 2],
            ])
        ).toBe(15);
    });
});
