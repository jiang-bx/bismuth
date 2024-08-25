import { getFinalState } from "./Q1";
import { countPairs } from "./Q2";

describe("Q1 test", () => {
    test("test1", () => {
        expect(getFinalState([2, 1, 3, 5, 6], 5, 2)).toEqual([8, 4, 6, 5, 6]);
    });

    test("test2", () => {
        expect(getFinalState([1, 2], 3, 4)).toEqual([16, 8]);
    });
});

describe("Q2 test", () => {
    test("test1", () => {
        expect(countPairs([3, 12, 30, 17, 21])).toBe(2);
    });

    test("test2", () => {
        expect(countPairs([1, 1, 1, 1, 1])).toBe(10);
    });

    test("test3", () => {
        expect(countPairs([123, 231])).toBe(0);
    });

    test("test4", () => {
        expect(
            countPairs([
                226726, 387862, 880512, 611522, 343461, 420841, 334461, 10813,
                226726, 334461, 80113, 314364, 10813, 163067, 134364, 332548,
                413463, 343416, 236429, 164332, 566432, 226726, 334164, 343461,
                143463, 163229, 667555, 667555, 343461, 657565, 343461, 770521,
                285866, 930657, 236429, 502387, 313446, 334461, 12219, 163760,
                144363, 227626,
            ])
        ).toBe(53);
    });

    test("test5", () => {
        expect(
            countPairs([8, 12, 5, 5, 14, 3, 12, 3, 3, 6, 8, 20, 14, 3, 8])
        ).toBe(12);
    });

    test("test6", () => {
        expect(
            countPairs([5, 12, 8, 5, 5, 1, 20, 3, 10, 10, 5, 5, 5, 5, 1])
        ).toBe(27);
    });
});



describe("Q3 test", () => {
    test("test1", () => {
        expect(getFinalState([2, 1, 3, 5, 6], 5, 2)).toEqual([8, 4, 6, 5, 6]);
    });

    test("test2", () => {
        expect(getFinalState([1, 2], 3, 4)).toEqual([16, 8]);
    });
});