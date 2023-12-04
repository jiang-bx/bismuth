import { imageSmoother, imageSmoother1 } from '../03.661.js'

const testFunc = imageSmoother;

describe('imageSmoother 测试用例', () => {
    
    test('[[1,1,1], [1,0,1], [1,1,1]] should return [[0, 0, 0], [0, 0, 0], [0, 0, 0]]', () => {
        expect(testFunc( [[1,1,1], [1,0,1], [1,1,1]] )).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });

    test('imageSmoother1 [[1,1,1], [1,0,1], [1,1,1]] should return [[0, 0, 0], [0, 0, 0], [0, 0, 0]]', () => {
        expect(imageSmoother1( [[1,1,1], [1,0,1], [1,1,1]] )).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });
});
