/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-08 09:51:12
 */
import {hIndex, hIndex1} from '../06.274.js'

const testFunc = hIndex1;

describe('hIndex 测试用例', () => {

    test('[1, 3, 1] should return 1', () => {
        expect(testFunc( [1, 3, 1] )).toBe(1);
    });

    test('[3,0,6,1,5] should return 3', () => {
        expect(testFunc( [3,0,6,1,5] )).toBe(3);
    });

    test('[3,0,6] should return 2', () => {
        expect(testFunc( [3,0,6] )).toBe(2);
    });

    test('[3,0] should return 1', () => {
        expect(testFunc( [3,0] )).toBe(1);
    });
});
