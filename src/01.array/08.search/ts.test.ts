import { productExceptSelf } from "./03.238";
import { NumArray } from "./01.303";
import { NumMatrix } from "./02.304";

describe("303 测试用例", () => {
    test("1 号测试", () => {
        const steps = [
            [0, 2],
            [2, 5],
            [0, 5],
        ];
        const nums = [-2, 0, 3, -5, 2, -1];
        const res = [];

        const obj = new NumArray(nums);
        res.push(null);

        steps.forEach((item) => {
            res.push(obj.sumRange(item[0], item[1]));
        });

        expect(res).toEqual([null, 1, -1, -3]);
    });
});

describe("304 测试用例", () => {
    test("1 号", () => {
        const matrix: number[][] = [
            [3, 0, 1, 4, 2],
            [5, 6, 3, 2, 1],
            [1, 2, 0, 1, 5],
            [4, 1, 0, 1, 7],
            [1, 0, 3, 0, 5],
        ];

        const steps: number[][] = [
            [2, 1, 4, 3],
            [1, 1, 2, 2],
            [1, 2, 2, 4],
        ];

        const res = [];

        const obj = new NumMatrix(matrix);

        steps.forEach((item) => {
            res.push(obj.sumRegion(item[0], item[1], item[2], item[3]));
        });

        expect(res).toEqual([8, 11, 12]);
    });
});

describe("238 测试用例", () => {
    test("[1,2,3,4] should return [24,12,8,6]", () => {
        expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });

    test("[-1,1,0,-3,3] should return [0,0,9,0,0]", () => {
        expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
    });
});
