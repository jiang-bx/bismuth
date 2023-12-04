import { generate, generate1 } from '../01.118.js'

const testFunc = generate;

describe(' 测试用例', () => {
    
    test('5 should return 杨辉三角', () => {
        expect(testFunc(5)).toStrictEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });
});

describe('generate1 测试用例', () => {
    
    test('5 should return 杨辉三角', () => {
        expect(generate1(5)).toStrictEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });
});
