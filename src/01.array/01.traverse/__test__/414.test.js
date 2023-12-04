/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-15 11:07:27
 */
import { thirdMax, thirdMax1 } from '../03.414';

const testFunc = thirdMax1;

describe('找第三大的数  高内存消耗', () => {

    test('[3, 2, 1] 测试', function () {
        expect(testFunc([3, 2, 1])).toBe(1);
    });

    test('[1, 2] 测试', function () {
        expect(testFunc([2, 1])).toBe(2);
    });

    test('[2, 2, 3, 1] 测试', function () {
        expect(testFunc([2, 2, 3, 1])).toBe(1);
    });

    test('[8, 3, 4, 5, 6, 7, 2] 测试', function () {
        expect(testFunc([8, 3, 4, 5, 6, 7, 2])).toBe(6);
    });
});
