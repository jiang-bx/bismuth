import { maxRotateFunction } from '../02.396.js'

const testFunc = maxRotateFunction;

describe('maxRotateFunction 测试用例', () => {
    
    test('[4, 3, 2, 6] should return 26', () => {
        expect(testFunc( [4, 3, 2, 6] )).toBe(26);
    });
});
