import { matrixReshape } from "./01.566";
import { rotate } from "./02.48";
import { setZeroes } from "./03.73";
import { gameOfLife } from "./04.289";

describe("566 测试用例", () => {
    test("mat = [[1,2],[3,4]], r = 1, c = 4 should return [[1,2,3,4]]", () => {
        expect(
            matrixReshape(
                [
                    [1, 2],
                    [3, 4],
                ],
                1,
                4
            )
        ).toEqual([[1, 2, 3, 4]]);
    });

    test("mat = [[1,2],[3,4]], r = 2, c = 4 should return [[1,2],[3,4]]", () => {
        expect(
            matrixReshape(
                [
                    [1, 2],
                    [3, 4],
                ],
                2,
                4
            )
        ).toEqual([
            [1, 2],
            [3, 4],
        ]);
    });

    test("mat = [[1,2],[3,4]], r = 4, c = 1 should return [[1],[2],[3],[4]]", () => {
        expect(
            matrixReshape(
                [
                    [1, 2],
                    [3, 4],
                ],
                4,
                1
            )
        ).toEqual([[1], [2], [3], [4]]);
    });
});

describe("48 测试用例", () => {
    test("[[1,2,3],[4,5,6],[7,8,9]] should return [[7,4,1],[8,5,2],[9,6,3]]", () => {
        const arr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        rotate(arr);

        expect(arr).toEqual([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ]);
    });

    test("[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] should return [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]", () => {
        const arr = [
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16],
        ];
        rotate(arr);

        expect(arr).toEqual([
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11],
        ]);
    });
});

describe("73 测试用例", () => {
    test("[[1,1,1],[1,0,1],[1,1,1]] should return [[1,0,1],[0,0,0],[1,0,1]]", () => {
        const arr = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ];
        setZeroes(arr);

        expect(arr).toEqual([
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1],
        ]);
    });

    test("[[0,1,2,0],[3,4,5,2],[1,3,1,5]] should return [[0,0,0,0],[0,4,5,0],[0,3,1,0]]", () => {
        const arr = [
            [0, 1, 2, 0],
            [3, 4, 5, 2],
            [1, 3, 1, 5],
        ];
        setZeroes(arr);

        expect(arr).toEqual([
            [0, 0, 0, 0],
            [0, 4, 5, 0],
            [0, 3, 1, 0],
        ]);
    });
});

describe("289 测试用例", () => {
    test("[[0,1,0],[0,0,1],[1,1,1],[0,0,0]] should return [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]", () => {
        const arr = [
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0],
        ];
        gameOfLife(arr);
        expect(arr).toEqual([
            [0, 0, 0],
            [1, 0, 1],
            [0, 1, 1],
            [0, 1, 0],
        ]);
    });

    test("[[1,1],[1,0]] should return [[1,1],[1,1]]", () => {
        const arr = [
            [1, 1],
            [1, 0],
        ];
        gameOfLife(arr);
        expect(arr).toEqual([
            [1, 1],
            [1, 1],
        ]);
    });
});
