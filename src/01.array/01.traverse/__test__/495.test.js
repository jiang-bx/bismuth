/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-15 11:07:27
 */
import { findPoisonedDuration } from '../02.495';

describe('提莫攻击 暴力解法', () => {

    test('[1,4], 2 测试', function () {
        expect(findPoisonedDuration([1, 4], 2)).toBe(4);
    });

    test('[1,2], 2 测试', function () {
        expect(findPoisonedDuration([1,2], 2)).toBe(3);
    });

    test('[1,2,3,4,5,6,7,8,9], 1 测试', function () {
        expect(findPoisonedDuration([1,2,3,4,5,6,7,8,9], 1)).toBe(9);
    });

    test('[1,2,3,4,5], 5 测试', function () {
        expect(findPoisonedDuration([1,2,3,4,5], 5)).toBe(9);
    });

    test('[1,5,6], 3 测试', function () {
        expect(findPoisonedDuration([1,5,6], 3)).toBe(7);
    });
});
