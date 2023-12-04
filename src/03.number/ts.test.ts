import { reverse } from "./01.7";
import { isPalindrome } from "./02.9";
import { largestPalindrome } from "./03.479";
import { nearestPalindromic } from "./04.564";
import { isPowerOfTwo } from "./05.231";
import { isPowerOfFour } from "./06.342";
import { isPowerOfThree } from "./07.326";
import { convertToBase7 } from "./08.504";
import { isUgly } from "./09. 263";
import { reverseBits } from "./10.190";
import { hammingWeight } from "./11.191";
import { findComplement } from "./12.476";
import { hammingDistance } from "./13.461";
import { totalHammingDistance } from "./14.477";
import { hasAlternatingBits } from "./15.693";
import { validUtf8 } from "./16.393";
import { trailingZeroes } from "./17.172";
import { poorPigs } from "./18.458";
import { addDigits } from "./19.258";
import { bulbSwitch } from "./20.319";
import { toHex } from "./21.405";
import { titleToNumber } from "./22.171";
import { convertToTitle } from "./23.168";
import { maximumSwap } from "./24.670";
import { countDigitOne } from "./25.233";
import { countNumbersWithUniqueDigits } from "./26.357";
import { findNthDigit } from "./27.400";
import { constructRectangle } from "./28.492";
import { divide } from "./29.29";
import { checkPerfectNumber } from "./30.507";
import { myPow } from "./31.50";
import { superPow } from "./32.372";

describe("7 测试用例", () => {
    test(`x = 123 should return 321`, () => {
        expect(reverse(123)).toBe(321);
    });

    test(`x = -123 should return -321`, () => {
        expect(reverse(-123)).toBe(-321);
    });

    test(`x = 120 should return 21`, () => {
        expect(reverse(120)).toBe(21);
    });

    test(`x = 0 should return 0`, () => {
        expect(reverse(0)).toBe(0);
    });
});

describe("9 测试用例", () => {
    test(`x = 121 should return true`, () => {
        expect(isPalindrome(121)).toBe(true);
    });

    test(`x = -121 should return false`, () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    test(`x = 10 should return false`, () => {
        expect(isPalindrome(10)).toBe(false);
    });

    test(`x = 0 should return true`, () => {
        expect(isPalindrome(0)).toBe(true);
    });
});

describe("479 测试用例", () => {
    test(`x = 2 should return 987`, () => {
        expect(largestPalindrome(2)).toBe(987);
    });

    test(`x = 1 should return 9`, () => {
        expect(largestPalindrome(1)).toBe(9);
    });

    test(`x = 8 should return 475`, () => {
        expect(largestPalindrome(8)).toBe(475);
    });
});

describe("564 测试用例", () => {
    test(`123 should return 121`, () => {
        expect(nearestPalindromic("123")).toBe("121");
    });

    test(`168861 should return 167761`, () => {
        expect(nearestPalindromic("168861")).toBe("167761");
    });

    test(`13330 should return 13331`, () => {
        expect(nearestPalindromic("13330")).toBe("13331");
    });

    test(`1 should return 0`, () => {
        expect(nearestPalindromic("1")).toBe("0");
    });
});

describe("231 测试用例", () => {
    test(`1 should return true`, () => {
        expect(isPowerOfTwo(1)).toBe(true);
    });

    test(`16 should return true`, () => {
        expect(isPowerOfTwo(16)).toBe(true);
    });

    test(`4 should return true`, () => {
        expect(isPowerOfTwo(4)).toBe(true);
    });

    test(`3 should return false`, () => {
        expect(isPowerOfTwo(3)).toBe(false);
    });

    test(`5 should return false`, () => {
        expect(isPowerOfTwo(5)).toBe(false);
    });

    test(`6 should return false`, () => {
        expect(isPowerOfTwo(6)).toBe(false);
    });
});

describe("342 测试用例", () => {
    test(`1 should return true`, () => {
        expect(isPowerOfFour(1)).toBe(true);
    });

    test(`5 should return false`, () => {
        expect(isPowerOfFour(5)).toBe(false);
    });

    test(`16 should return true`, () => {
        expect(isPowerOfFour(16)).toBe(true);
    });

    test(`2 should return false`, () => {
        expect(isPowerOfFour(2)).toBe(false);
    });
});

describe("326 测试用例", () => {
    test(`27 should return true`, () => {
        expect(isPowerOfThree(27)).toBe(true);
    });

    test(`0 should return false`, () => {
        expect(isPowerOfThree(0)).toBe(false);
    });

    test(`9 should return true`, () => {
        expect(isPowerOfThree(9)).toBe(true);
    });

    test(`45 should return false`, () => {
        expect(isPowerOfThree(45)).toBe(false);
    });
});

describe("504 测试用例", () => {
    test(`100 should return 202`, () => {
        expect(convertToBase7(100)).toBe("202");
    });

    test(`-7 should return -10`, () => {
        expect(convertToBase7(-7)).toBe("-10");
    });

    test(`0 should return 0`, () => {
        expect(convertToBase7(0)).toBe("0");
    });
});

describe("263 测试用例", () => {
    test(`6 should return true`, () => {
        expect(isUgly(6)).toBe(true);
    });

    test(`1 should return true`, () => {
        expect(isUgly(1)).toBe(true);
    });

    test(`14 should return false`, () => {
        expect(isUgly(14)).toBe(false);
    });
});

describe("190 测试用例", () => {
    test(`00000010100101000001111010011100 should return 00111001011110000010100101000000`, () => {
        expect(reverseBits(0b00000010100101000001111010011100)).toBe(
            0b00111001011110000010100101000000
        );
    });

    test(`11111111111111111111111111111101 should return 10111111111111111111111111111111`, () => {
        expect(reverseBits(0b11111111111111111111111111111101)).toBe(
            0b10111111111111111111111111111111
        );
    });
});

describe("191 测试用例", () => {
    test(`00000000000000000000000000001011 should return 3`, () => {
        expect(hammingWeight(0b00000000000000000000000000001011)).toBe(3);
    });

    test(`00000000000000000000000010000000 should return 1`, () => {
        expect(hammingWeight(0b00000000000000000000000010000000)).toBe(1);
    });

    test(`11111111111111111111111111111101 should return 31`, () => {
        expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31);
    });
});

describe("476 测试用例", () => {
    test(`5 should return 2`, () => {
        expect(findComplement(5)).toBe(2);
    });

    test(`1 should return 0`, () => {
        expect(findComplement(1)).toBe(0);
    });

    // 2^31 = 2147483648
    test(`2147483647 should return 0`, () => {
        // 2147483647: 0b1111111111111111111111111111111
        expect(findComplement(2147483647)).toBe(0);
    });
});

describe("461 测试用例", () => {
    test(`1, 4 should return 2`, () => {
        expect(hammingDistance(1, 4)).toBe(2);
    });

    test(`3, 1 should return 1`, () => {
        expect(hammingDistance(3, 1)).toBe(1);
    });

    test(`4, 3 should return 3`, () => {
        expect(hammingDistance(4, 3)).toBe(3);
    });

    test(`4, 4 should return 0`, () => {
        expect(hammingDistance(4, 4)).toBe(0);
    });

    test(`18, 2 should return 0`, () => {
        expect(hammingDistance(18, 2)).toBe(0);
    });
});

describe("477 测试用例", () => {
    test(`[4,14,2] should return 6`, () => {
        expect(totalHammingDistance([4, 14, 2])).toBe(6);
    });

    test(`[4,14,4] should return 4`, () => {
        expect(totalHammingDistance([4, 14, 4])).toBe(4);
    });
});

describe("693 测试用例", () => {
    test(`5 should return true`, () => {
        expect(hasAlternatingBits(5)).toBe(true);
    });

    test(`2 should return true`, () => {
        expect(hasAlternatingBits(2)).toBe(true);
    });

    test(`7 should return false`, () => {
        expect(hasAlternatingBits(7)).toBe(false);
    });

    test(`11 should return false`, () => {
        expect(hasAlternatingBits(11)).toBe(false);
    });
});

describe("393 测试用例", () => {
    test(`[197,130,1] should return true`, () => {
        expect(validUtf8([197, 130, 1])).toBe(true);
    });

    test(`[235,140,4] should return false`, () => {
        expect(validUtf8([235, 140, 4])).toBe(false);
    });

    test(`[250,145,145,145,145] should return false`, () => {
        expect(validUtf8([250, 145, 145, 145, 145])).toBe(false);
    });

    test(`[145] should return false`, () => {
        expect(validUtf8([145])).toBe(false);
    });
});

describe("172 测试用例", () => {
    test(`3 should return 0`, () => {
        expect(trailingZeroes(3)).toBe(0);
    });

    test(`5 should return 1`, () => {
        expect(trailingZeroes(5)).toBe(1);
    });

    test(`0 should return 0`, () => {
        expect(trailingZeroes(0)).toBe(0);
    });

    test(`30 should return 7`, () => {
        expect(trailingZeroes(30)).toBe(7);
    });

    test(`10 should return 2`, () => {
        expect(trailingZeroes(10)).toBe(2);
    });

    test(`25 should return 6`, () => {
        expect(trailingZeroes(25)).toBe(6);
    });

    test(`20 should return 4`, () => {
        expect(trailingZeroes(20)).toBe(4);
    });
});

describe("458 测试用例", () => {
    test(`1000, 15, 60 should return 5`, () => {
        expect(poorPigs(1000, 15, 60)).toBe(5);
    });

    test(`4, 15, 15 should return 2`, () => {
        expect(poorPigs(4, 15, 15)).toBe(2);
    });

    test(`4, 15, 30 should return 2`, () => {
        expect(poorPigs(4, 15, 30)).toBe(2);
    });
});

describe("258 测试用例", () => {
    test(`38 should return 2`, () => {
        expect(addDigits(38)).toBe(2);
    });

    test(`0 should return 0`, () => {
        expect(addDigits(0)).toBe(0);
    });

    test(`111 should return 3`, () => {
        expect(addDigits(111)).toBe(3);
    });

    test(`19 should return 1`, () => {
        expect(addDigits(19)).toBe(1);
    });

    test(`199 should return 1`, () => {
        expect(addDigits(199)).toBe(1);
    });

    test(`1999 should return 1`, () => {
        expect(addDigits(1999)).toBe(1);
    });
});

describe("319 测试用例", () => {
    test(`3 should return 1`, () => {
        expect(bulbSwitch(3)).toBe(1);
    });

    test(`0 should return 0`, () => {
        expect(bulbSwitch(0)).toBe(0);
    });

    test(`1 should return 1`, () => {
        expect(bulbSwitch(1)).toBe(1);
    });

    test(`100000 should return 316`, () => {
        expect(bulbSwitch(100000)).toBe(316);
    });
});

describe("405 测试用例", () => {
    test(`26 should return 1a`, () => {
        expect(toHex(26)).toBe("1a");
    });

    test(`-1 should return ffffffff`, () => {
        expect(toHex(-1)).toBe("ffffffff");
    });
});

describe("171 测试用例", () => {
    test(`A should return 1`, () => {
        expect(titleToNumber("A")).toBe(1);
    });

    test(`AB should return 28`, () => {
        expect(titleToNumber("AB")).toBe(28);
    });

    test(`ZY should return 701`, () => {
        expect(titleToNumber("ZY")).toBe(701);
    });

    test(`FXSHRXW should return 2147483647`, () => {
        expect(titleToNumber("FXSHRXW")).toBe(2147483647);
    });
});

describe("168 测试用例", () => {
    test(`1 should return A`, () => {
        expect(convertToTitle(1)).toBe("A");
    });

    test(`28 should return AB`, () => {
        expect(convertToTitle(28)).toBe("AB");
    });

    test(`701 should return ZY`, () => {
        expect(convertToTitle(701)).toBe("ZY");
    });

    test(`52 should return AZ`, () => {
        expect(convertToTitle(52)).toBe("AZ");
    });

    test(`2147483647 should return FXSHRXW`, () => {
        expect(convertToTitle(2147483647)).toBe("FXSHRXW");
    });
});

describe("670 测试用例", () => {
    test(`2736 should return 7236`, () => {
        expect(maximumSwap(2736)).toBe(7236);
    });

    test(`9973 should return 9973`, () => {
        expect(maximumSwap(9973)).toBe(9973);
    });
});

describe("233 测试用例", () => {
    test(`13 should return 6`, () => {
        expect(countDigitOne(13)).toBe(6);
    });

    test(`0 should return 0`, () => {
        expect(countDigitOne(0)).toBe(0);
    });

    test(`32104 should return 23626`, () => {
        expect(countDigitOne(32104)).toBe(23626);
    });
});

describe("357 测试用例", () => {
    test(`2 should return 91`, () => {
        expect(countNumbersWithUniqueDigits(2)).toBe(91);
    });

    test(`0 should return 1`, () => {
        expect(countNumbersWithUniqueDigits(0)).toBe(1);
    });

    test(`3 should return 739`, () => {
        expect(countNumbersWithUniqueDigits(3)).toBe(739);
    });
});

describe("400 测试用例", () => {
    test(`3 should return 3`, () => {
        expect(findNthDigit(3)).toBe(3);
    });

    test(`11 should return 0`, () => {
        expect(findNthDigit(11)).toBe(0);
    });
});

describe("29 测试用例", () => {
    test(`10, 3 should return 3`, () => {
        expect(divide(10, 3)).toBe(3);
    });

    test(`7, -3 should return -2`, () => {
        expect(divide(7, -3)).toBe(-2);
    });
});

describe("507 测试用例", () => {
    test(`28 should return true`, () => {
        expect(checkPerfectNumber(28)).toBe(true);
    });

    test(`7 should return false`, () => {
        expect(checkPerfectNumber(7)).toBe(false);
    });

    test(`100000000 should return false`, () => {
        expect(checkPerfectNumber(100000000)).toBe(false);
    });
});

describe("50 测试用例", () => {
    test(`2.00000, 10 should return 1024.00000`, () => {
        expect(myPow(2.0, 10)).toBe(1024.0);
    });

    test(`2.10000, 3 should return 9.26100`, () => {
        expect(myPow(2.1, 3)).toBe(9.261);
    });

    test(`2.00000, -2 should return 0.25000`, () => {
        expect(myPow(2.0, -2)).toBe(0.25);
    });

    test(`2.00000, -2147483648 should return 0.0`, () => {
        expect(myPow(2.0, -2147483648)).toBe(0.0);
    });
});

describe("372 测试用例", () => {
    test(`2, [3] should return 8`, () => {
        expect(superPow(2, [3])).toBe(8);
    });

    test(`2, [1, 0] should return 1024`, () => {
        expect(superPow(2, [1, 0])).toBe(1024);
    });

    test(`1, [4,3,3,8,5,2] should return 1`, () => {
        expect(superPow(1, [4, 3, 3, 8, 5, 2])).toBe(1);
    });

    test(`2147483647, [2, 0, 0] should return 1198`, () => {
        expect(superPow(2147483647, [2, 0, 0])).toBe(1198);
    });
});
