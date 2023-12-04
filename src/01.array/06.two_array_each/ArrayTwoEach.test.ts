import { findDiagonalOrder } from "./03.498";
import { spiralOrder } from "./01.54";
import { generateMatrix } from "./02.59";

describe("54 测试用例", () => {
    test("[[1,2,3],[4,5,6],[7,8,9]] should return [1,2,3,6,9,8,7,4,5]", () => {
        expect(
            spiralOrder([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ])
        ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    test("[[1,2,3,4],[5,6,7,8],[9,10,11,12]] should return [1,2,3,4,8,12,11,10,9,5,6,7]", () => {
        expect(
            spiralOrder([
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
            ])
        ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });
});

describe("59 测试用例", () => {
    test("3 should return [[1, 2, 3], [8, 9, 4], [7, 6, 5]]", () => {
        expect(generateMatrix(3)).toEqual([
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ]);
    });

    test("1 should return [[1]]", () => {
        expect(generateMatrix(1)).toEqual([[1]]);
    });
});

describe("498 测试用例", () => {
    test("[[1,2,3],[4,5,6],[7,8,9]] should return [1,2,4,7,5,3,6,8,9]", () => {
        expect(
            findDiagonalOrder([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ])
        ).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
    });

    test("[[1,2],[3,4]] should return [1,2,3,4]", () => {
        expect(
            findDiagonalOrder([
                [1, 2],
                [3, 4],
            ])
        ).toEqual([1, 2, 3, 4]);
    });
});
