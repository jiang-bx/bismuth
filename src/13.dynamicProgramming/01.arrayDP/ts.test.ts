import { fib } from "./01.509";

describe("561 测试用例", () => {
    test(`2 should return 1`, () => {
        expect(fib(2)).toBe(1);
    });

    test(`3 should return 2`, () => {
        expect(fib(3)).toBe(2);
    });

    test(`4 should return 3`, () => {
        expect(fib(4)).toBe(3);
    });
});
