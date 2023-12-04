/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-21 09:30:00
 */
import { moveZeroes } from '../03.283.js'

const testFunc = moveZeroes;

describe(' 测试用例', () => {

    test('[1,0,1] should return [1,1,0]', () => {
        expect(testFunc( [1,0,1] )).toStrictEqual([1,1,0]);
    });
    
    test('[0,1,0,3,12] should return [1,3,12,0,0]', () => {
        expect(testFunc( [0,1,0,3,12] )).toStrictEqual([1,3,12,0,0]);
    });

    test('[0,0,0,3,12] should return [3,12,0,0,0]', () => {
        expect(testFunc( [0,0,0,3,12] )).toStrictEqual([3,12,0,0,0]);
    });
});
