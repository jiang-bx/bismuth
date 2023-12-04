import { maxCount } from '../04.598.js'

const testFunc = maxCount;

describe('maxCount test case', () => {
    test('3 * 3 and operations is [[2,2],[3,3]] matrix should return 4', () => {
        expect(testFunc(3, 3, [[2,2],[3,3]])).toBe(4);
    });

    test('3 * 3 and operations is [] matrix should return 9', () => {
        expect(testFunc(3, 3, [])).toBe(9);
    });

    test('39999 * 39999 and operations is [[19999, 19999]] matrix should return 399960001', () => {
        expect(testFunc(39999, 39999, [[19999, 19999]])).toBe(399960001);
    });

    test('18 * 3 and operations is [[16,1],[14,3],[14,2],[4,1],[10,1],[11,1],[8,3],[16,2],[13,1],[8,3],[2,2],[9,1],[3,1],[2,2],[6,3]] matrix should return 2', () => {
        expect(testFunc(18, 3, [[16,1],[14,3],[14,2],[4,1],[10,1],[11,1],[8,3],[16,2],[13,1],[8,3],[2,2],[9,1],[3,1],[2,2],[6,3]])).toBe(2);
    });
});
