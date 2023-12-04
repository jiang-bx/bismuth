/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-30 10:31:01
 */
import { findShortestSubArray } from '../02.697'

describe('findShortestSubArray 测试用例', () => {
    
    test('[1, 2, 2, 3, 1] should return 2', () => {
        expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2)
    });

    test('[1, 2, 2, 3, 1, 4, 2] should return 6', () => {
        expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6)
    });

    test('[1] should return 1', () => {
        expect(findShortestSubArray([1])).toBe(1)
    });
});