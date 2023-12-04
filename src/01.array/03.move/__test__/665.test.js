/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-20 10:28:48
 */
import { checkPossibility } from '../02.665.js'

const testFunc = checkPossibility;

describe(' 测试用例', () => {
    
    test('[4, 2, 3] should return true', () => {
        expect(testFunc( [4, 2, 3] )).toBe(true);
    });

    test('[4, 2, 1] should return false', () => {
        expect(testFunc( [4, 2, 1] )).toBe(false);
    });

    test('[3, 4, 2, 3] should return false', () => {
        expect(testFunc( [3, 4, 2, 3] )).toBe(false);
    });

    test('[5,7,1,8] should return true', () => {
        expect(testFunc( [5, 7, 1, 8] )).toBe(true);
    });
});
