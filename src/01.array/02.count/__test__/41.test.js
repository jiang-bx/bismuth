/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-07 10:58:47
 */
import {firstMissingPositive, firstMissingPositive1} from '../05.41.js'

const testFunc = firstMissingPositive1;

describe('firstMissingPositive 测试用例', () => {

    test('[1,2,0] should return 3', () => {
        expect(testFunc( [1,2,0] )).toBe(3);
    });

    test('[3,4,-1,1] should return 2', () => {
        expect(testFunc( [3,4,-1,1] )).toBe(2);
    });

    test('[7,8,9,11,12] should return 1', () => {
        expect(testFunc( [7,8,9,11,12] )).toBe(1);
    });
});
