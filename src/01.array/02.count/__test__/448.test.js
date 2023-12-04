/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-31 09:30:38
 */
import { findDisappearedNumbers, findDisappearedNumbers1 } from '../03.448'

const testFunc = findDisappearedNumbers1

describe('findShortestSubArray 测试用例', () => {
    
    test('[4,3,2,7,8,2,3,1] should return [5, 6]', () => {
        expect(testFunc([4,3,2,7,8,2,3,1])).toStrictEqual([5, 6]);
    });

    test('[1, 1] should return 6', () => {
        expect(testFunc([1, 1])).toStrictEqual([2])
    });
});