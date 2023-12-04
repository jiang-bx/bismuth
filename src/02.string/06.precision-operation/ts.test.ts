import { plusOne } from "./01.66";
import { addBinary } from "./02.67";
import { addStrings } from "./03.415";
import { multiply } from "./04.43";
import { isAdditiveNumber } from "./05.306";

describe("66 测试用例", () => {
    test(`[1,2,3] should return [1,2,4]`, () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });

    test(`[4,3,2,1] should return [4,3,2,2]`, () => {
        expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    });

    test(`[0] should return [1]`, () => {
        expect(plusOne([0])).toEqual([1]);
    });

    test(`[9, 9] should return [1, 0, 0]`, () => {
        expect(plusOne([9, 9])).toEqual([1, 0, 0]);
    });
});

describe("67 测试用例", () => {
    test(`11, 1 should return 100`, () => {
        expect(addBinary("11", "1")).toBe("100");
    });

    test(`1010, 1011 should return 10101`, () => {
        expect(addBinary("1010", "1011")).toBe("10101");
    });

    test(`1111, 1111 should return 11110`, () => {
        expect(addBinary("1111", "1111")).toBe("11110");
    });

    test(`超长字符 should return 110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000`, () => {
        expect(
            addBinary(
                "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
                "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
            )
        ).toBe(
            "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
        );
    });
});

describe("415 测试用例", () => {
    test(`11, 123 should return 134`, () => {
        expect(addStrings("11", "123")).toBe("134");
    });

    test(`456, 77 should return 533`, () => {
        expect(addStrings("456", "77")).toBe("533");
    });

    test(`0, 0 should return 0`, () => {
        expect(addStrings("0", "0")).toBe("0");
    });
});


describe("43 测试用例", () => {
    test(`2, 3 should return 6`, () => {
        expect(multiply("2", "3")).toBe("6");
    });

    test(`456, 123 should return 56088`, () => {
        expect(multiply("456", "123")).toBe("56088");
    });

    test(`0, 1 should return 0`, () => {
        expect(multiply("0", "1")).toBe("0");
    });

    test(`999, 99999 should return 99899001`, () => {
        expect(multiply("999", "99999")).toBe("99899001");
    });

    test(`408, 5 should return 2040`, () => {
        expect(multiply("408", "5")).toBe("2040");
    });
});

describe("306 测试用例", () => {
    test(`112358 should return true`, () => {
        expect(isAdditiveNumber("112358")).toBe(true);
    });

    test(`199100199 should return true`, () => {
        expect(isAdditiveNumber("199100199")).toBe(true);
    });
});

