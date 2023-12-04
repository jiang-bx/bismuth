/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-26 09:33:31
 */

import {findErrorNums} from '../01.645'

describe('findErrorNums 测试用例', () => {
    
    test('[1,2,2,4] should return [2,3]', () => {
         expect(findErrorNums([1,2,2,4])).toStrictEqual([2, 3])
    });

    test('[1,1] should return [1,2]', () => {
        expect(findErrorNums([1,1])).toStrictEqual([1, 2])
    });

    test('[2, 2] should return [2, 1]', () => {
        expect(findErrorNums([2, 2])).toStrictEqual([2, 1])
    });

    test('[1, 2, 3, 4, 4, 6] should return [4, 5]', () => {
        expect(findErrorNums([1, 2, 3, 4, 4, 6])).toStrictEqual([4, 5])
    });

    test('[2, 3, 2] should return [2, 1]', () => {
        expect(findErrorNums([2, 3, 2])).toStrictEqual([2, 1])
    });
});
