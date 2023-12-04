import { rotate, rotate1, rotate2, rotate3 } from '../01.189.js'

const testFunc = rotate3;

describe('rotate 暴力解法 测试用例', () => {
    
    test('[1,2,3,4,5,6,7], k=3  should return [5,6,7,1,2,3,4]', () => {
        const nums = [1,2,3,4,5,6,7];
        testFunc(nums, 3);
        expect(nums).toStrictEqual([5,6,7,1,2,3,4]);
    });

    test('[-1,-100,3,99], k=2  should return [3,99,-1,-100]', () => {
        const nums = [-1,-100,3,99];
        testFunc(nums, 2)
        expect(nums).toStrictEqual([3,99,-1,-100]);
    });
});
