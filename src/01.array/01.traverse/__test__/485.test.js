/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-17 10:44:33
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-15 11:07:27
 */
import { findMaxConsecutiveOnes } from '../01.485';

describe('找连续的1  暴力解法', () => {

    test('[1,1,0,1,1,1] 测试', function () {
        expect(findMaxConsecutiveOnes([1,1,0,1,1,1])).toBe(3);
    });

    test('[1,1] 测试', function () {
        expect(findMaxConsecutiveOnes([1,1])).toBe(2);
    });

    test('[1,1,0,0,1,1] 测试', function () {
        expect(findMaxConsecutiveOnes([1,1,0,0,1,1])).toBe(2);
    });

    test('[1,1,0,0,1,1,1,1,1,1,1,0] 测试', function () {
        expect(findMaxConsecutiveOnes([1,1,0,0,1,1,1,1,1,1,1,0])).toBe(7);
    });

    test('[0] 测试', function () {
        expect(findMaxConsecutiveOnes([0])).toBe(0);
    });
});
