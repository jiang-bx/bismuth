import { convertDateToBinary } from "./Q1";

describe("Q1 测试用例", () => {
    test(`2080-02-29 should return 100000100000-10-11101`, () => {
        expect(convertDateToBinary("2080-02-29")).toBe("100000100000-10-11101");
    });
});
