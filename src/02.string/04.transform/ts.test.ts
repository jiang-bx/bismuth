import { getHint } from "./01.299";
import { fizzBuzz } from "./02.412";
import { findRelativeRanks } from "./03.506";
import { findMinDifference } from "./04.539";
import { optimalDivision } from "./05.553";
import { complexNumberMultiply } from "./06.537";
import { fractionAddition } from "./07.592";
import { solveEquation } from "./08.640";
import { countAndSay } from "./09.38";
import { compress } from "./10.443";
import { myAtoi } from "./11.8";
import { romanToInt } from "./12.13";
import { intToRoman } from "./13.12";
import { numberToWords } from "./14.273";
import { compareVersion } from "./15.165";
import { magicalString } from "./16.481";

describe("299 测试用例", () => {
    test("1807, 7810 should return 1A3B", () => {
        expect(getHint("1807", "7810")).toBe("1A3B");
    });

    test("1123, 0111 should return 1A1B", () => {
        expect(getHint("1123", "0111")).toBe("1A1B");
    });

    test("11, 10 should return 1A0B", () => {
        expect(getHint("1", "10")).toBe("1A0B");
    });
});

describe("412 测试用例", () => {
    test(`n = 3 should return ["1", "2", "Fizz"]`, () => {
        expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    });

    test(`n = 5 should return ["1","2","Fizz","4","Buzz"]`, () => {
        expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });

    test(`n = 15 should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`, () => {
        expect(fizzBuzz(15)).toEqual([
            "1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz",
        ]);
    });
});

describe("506 测试用例", () => {
    test(`[5,4,3,2,1] should return ["Gold Medal","Silver Medal","Bronze Medal","4","5"]`, () => {
        expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual([
            "Gold Medal",
            "Silver Medal",
            "Bronze Medal",
            "4",
            "5",
        ]);
    });

    test(`[10,3,8,9,4] should return ["Gold Medal","5","Bronze Medal","Silver Medal","4"]`, () => {
        expect(findRelativeRanks([10, 3, 8, 9, 4])).toEqual([
            "Gold Medal",
            "5",
            "Bronze Medal",
            "Silver Medal",
            "4",
        ]);
    });
});

describe("539 测试用例", () => {
    test(`["23:59", "00:00"] should return 1`, () => {
        expect(findMinDifference(["23:59", "00:00"])).toBe(1);
    });

    test(`["00:00","23:59","00:00"] should return 0`, () => {
        expect(findMinDifference(["00:00", "23:59", "00:00"])).toBe(0);
    });

    test(`["05:31","22:08","00:35"] should return 147`, () => {
        expect(findMinDifference(["05:31", "22:08", "00:35"])).toBe(147);
    });
});

describe("553 测试用例", () => {
    test(`[1000,100,10,2] should return 1000/(100/10/2)`, () => {
        expect(optimalDivision([1000, 100, 10, 2])).toBe("1000/(100/10/2)");
    });

    test(`[2,3,4] should return 2/(3/4)`, () => {
        expect(optimalDivision([2, 3, 4])).toBe("2/(3/4)");
    });
});

describe("537 测试用例", () => {
    test(`1+1i, 1+1i should return 0+2i`, () => {
        expect(complexNumberMultiply("1+1i", "1+1i")).toBe("0+2i");
    });

    test(`1+-1i, 1+-1i  should return 0+-2i`, () => {
        expect(complexNumberMultiply("1+-1i", "1+-1i")).toBe("0+-2i");
    });
});

describe("592 测试用例", () => {
    test(`-1/2+1/2 should return 0/1`, () => {
        expect(fractionAddition("-1/2+1/2")).toBe("0/1");
    });

    test(`-1/2+1/2+1/3 should return 1/3`, () => {
        expect(fractionAddition("-1/2+1/2+1/3")).toBe("1/3");
    });

    test(`1/3-1/2 should return -1/6`, () => {
        expect(fractionAddition("1/3-1/2")).toBe("-1/6");
    });

    test(`-4/7-3/4+2/3 should return -55/84`, () => {
        expect(fractionAddition("-4/7-3/4+2/3")).toBe("-55/84");
    });
});

describe("640 测试用例", () => {
    test(`x+5-3+x=6+x-2 should return x=2`, () => {
        expect(solveEquation("x+5-3+x=6+x-2")).toBe("x=2");
    });

    test(`x=x should return Infinite solutions`, () => {
        expect(solveEquation("x=x")).toBe("Infinite solutions");
    });

    test(`2x=x should return x=0`, () => {
        expect(solveEquation("2x=x")).toBe("x=0");
    });

    test(`x=x+2 should return No solution`, () => {
        expect(solveEquation("x=x+2")).toBe("No solution");
    });
});

describe("38 测试用例", () => {
    test(`1 should return 1`, () => {
        expect(countAndSay(1)).toBe("1");
    });

    test(`4 should return 1211`, () => {
        expect(countAndSay(4)).toBe("1211");
    });

    test(`5 should return 111221`, () => {
        expect(countAndSay(5)).toBe("111221");
    });

    test(`30 should return too long`, () => {
        expect(countAndSay(30)).toBe(
            "3113112221131112311332111213122112311311123112111331121113122112132113121113222112311311221112131221123113112221121113311211131122211211131221131211132221121321132132212321121113121112133221123113112221131112212211131221121321131211132221123113112221131112311332211211133112111311222112111312211311123113322112111312211312111322212321121113121112133221121321132132211331121321132213211231132132211211131221232112111312212221121123222112311311222113111231133211121321321122111312211312111322211213211321322123211211131211121332211231131122211311123113321112131221123113111231121123222112111331121113112221121113122113111231133221121113122113121113221112131221123113111231121123222112111312211312111322212321121113121112131112132112311321322112111312212321121113122122211211232221121321132132211331121321231231121113112221121321132132211322132113213221123113112221133112132123222112111312211312112213211231132132211211131221131211322113321132211221121332211231131122211311123113321112131221123113111231121113311211131221121321131211132221123113112211121312211231131122211211133112111311222112111312211312111322211213211321223112111311222112132113213221133122211311221122111312211312111322212321121113121112131112132112311321322112111312212321121113122122211211232221121321132132211331121321231231121113112221121321132132211322132113213221123113112221133112132123222112111312211312112213211231132132211211131221131211322113321132211221121332211213211321322113311213212312311211131122211213211331121321123123211231131122211211131221131112311332211213211321223112111311222112132113213221123123211231132132211231131122211311123113322112111312211312111322111213122112311311123112112322211213211321322113312211223113112221121113122113111231133221121321132132211331222113321112131122211332113221122112133221123113112221131112311332111213122112311311123112111331121113122112132113121113222112311311221112131221123113112221121113311211131122211211131221131211132221121321132132212321121113121112133221123113112221131112311332111213122112311311123112112322211322311311222113111231133211121312211231131112311211232221121113122113121113222123211211131221132211131221121321131211132221123113112211121312211231131122113221122112133221121321132132211331121321231231121113121113122122311311222113111231133221121113122113121113221112131221123113111231121123222112132113213221133112132123123112111312211322311211133112111312211213211311123113223112111321322123122113222122211211232221121113122113121113222123211211131211121311121321123113213221121113122123211211131221121311121312211213211321322112311311222113311213212322211211131221131211221321123113213221121113122113121113222112131112131221121321131211132221121321132132211331121321232221123113112221131112311322311211131122211213211331121321122112133221121113122113121113222123112221221321132132211231131122211331121321232221121113122113121113222123211211131211121332211213111213122112132113121113222112132113213221232112111312111213322112132113213221133112132123123112111311222112132113311213211221121332211231131122211311123113321112131221123113112221132231131122211211131221131112311332211213211321223112111311222112132113212221132221222112112322211211131221131211132221232112111312111213111213211231131112311311221122132113213221133112132123222112311311222113111231132231121113112221121321133112132112211213322112111312211312111322212321121113121112131112132112311321322112111312212321121113122122211211232221121311121312211213211312111322211213211321322123211211131211121332211213211321322113311213211322132112311321322112111312212321121113122122211211232221121321132132211331121321231231121113112221121321133112132112312321123113112221121113122113111231133221121321132122311211131122211213211321222113222122211211232221123113112221131112311332111213122112311311123112111331121113122112132113121113222112311311221112131221123113112221121113311211131122211211131221131211132221121321132132212321121113121112133221123113112221131112311332111213213211221113122113121113222112132113213221232112111312111213322112132113213221133112132123123112111312211322311211133112111312212221121123222112132113213221133112132123222113223113112221131112311332111213122112311311123112112322211211131221131211132221232112111312111213111213211231132132211211131221131211221321123113213221123113112221131112211322212322211231131122211322111312211312111322211213211321322113311213211331121113122122211211132213211231131122212322211331222113112211"
        );
    });
});

describe("443 测试用例", () => {
    test(`["a","a","b","b","c","c","c"] should return 6`, () => {
        expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toBe(6);
    });

    test(`["a"] should return 1`, () => {
        expect(compress(["a"])).toBe(1);
    });

    test(`["a","b","b","b","b","b","b","b","b","b","b","b","b"] should return 4`, () => {
        expect(
            compress([
                "a",
                "b",
                "b",
                "b",
                "b",
                "b",
                "b",
                "b",
                "b",
                "b",
                "b",
                "b",
                "b",
            ])
        ).toBe(4);
    });
});

describe("8 测试用例", () => {
    test(`42 should return 42`, () => {
        expect(myAtoi("42")).toBe(42);
    });

    test(`   -42 should return -42`, () => {
        expect(myAtoi("     -42")).toBe(-42);
    });

    test(`4193 with words should return 4193`, () => {
        expect(myAtoi("4193 with words")).toBe(4193);
    });

    test(`words and 987 should return 0`, () => {
        expect(myAtoi("words and 987")).toBe(0);
    });

    test(`+-12 should return 0`, () => {
        expect(myAtoi("+-12")).toBe(0);
    });

    test(`00000-42a1234 should return 0`, () => {
        expect(myAtoi("00000-42a1234")).toBe(0);
    });

    test(`  +  413 should return 0`, () => {
        expect(myAtoi("  +  413")).toBe(0);
    });
});

describe("13 测试用例", () => {
    test(`III should return 3`, () => {
        expect(romanToInt("III")).toBe(3);
    });

    test(`IV should return 4`, () => {
        expect(romanToInt("IV")).toBe(4);
    });

    test(`IX should return 9`, () => {
        expect(romanToInt("IX")).toBe(9);
    });

    test(`LVIII should return 58`, () => {
        expect(romanToInt("LVIII")).toBe(58);
    });

    test(`MCMXCIV should return 1994`, () => {
        expect(romanToInt("MCMXCIV")).toBe(1994);
    });
});

describe("12 测试用例", () => {
    test(`3 should return III`, () => {
        expect(intToRoman(3)).toBe("III");
    });

    test(`4 should return IV`, () => {
        expect(intToRoman(4)).toBe("IV");
    });

    test(`9 should return IX`, () => {
        expect(intToRoman(9)).toBe("IX");
    });

    test(`58 should return LVIII`, () => {
        expect(intToRoman(58)).toBe("LVIII");
    });

    test(`1994 should return MCMXCIV`, () => {
        expect(intToRoman(1994)).toBe("MCMXCIV");
    });
});

describe("273 测试用例", () => {
    test(`123 should return One Hundred Twenty Three`, () => {
        expect(numberToWords(123)).toBe("One Hundred Twenty Three");
    });

    test(`12345 should return Twelve Thousand Three Hundred Forty Five`, () => {
        expect(numberToWords(12345)).toBe(
            "Twelve Thousand Three Hundred Forty Five"
        );
    });

    test(`1234567 should return One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven`, () => {
        expect(numberToWords(1234567)).toBe(
            "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
        );
    });

    test(`2147483648 should return Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Eight`, () => {
        expect(numberToWords(2147483648)).toBe(
            "Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Eight"
        );
    });
});

describe("165 测试用例", () => {
    test(`1.01, 1.001 should return 0`, () => {
        expect(compareVersion("1.01", "1.001")).toBe(0);
    });

    test(`1.0, 1.0.0 should return 0`, () => {
        expect(compareVersion("1.0", "1.0.0")).toBe(0);
    });

    test(`0.1, 1.1 should return 0`, () => {
        expect(compareVersion("0.1", "1.1")).toBe(-1);
    });
});

describe("481 测试用例", () => {
    test(`6 should return 3`, () => {
        expect(magicalString(6)).toBe(3);
    });

    test(`1 should return 1`, () => {
        expect(magicalString(1)).toBe(1);
    });
});
