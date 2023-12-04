/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-09 14:06:13
 */
import { removeDuplicates, removeDuplicates1, removeDuplicates2 } from '../1047';

describe('removeDuplicates 傻逼的双指针单元测试', function () {

    test('abbaca 测试', function () {
        expect(removeDuplicates('abbaca')).toBe('ca');
    });

    test('cabbaca 测试', function () {
        expect(removeDuplicates('cabbaca')).toBe('a');
    });

    test('aa 测试', function () {
        expect(removeDuplicates('aa')).toBe('');
    });

    test('aaa 测试', function () {
        expect(removeDuplicates('aaa')).toBe('a');
    });

    test('aaaa 测试', function () {
        expect(removeDuplicates('aaaa')).toBe('');
    });

    test('aaaaa 测试', function () {
        expect(removeDuplicates('aaaaa')).toBe('a');
    });

    test('aaaaaaaaa 测试', function () {
        expect(removeDuplicates('aaaaaaaaa')).toBe('a');
    });

    test('caffcca 测试', function () {
        expect(removeDuplicates('caffcca')).toBe('c');
    });

    test('ibfjcaffccadidiaidchakchchcahabhibdcejkdkfbaeeaecdjhajbkfebebfea', function () {
        expect(
            removeDuplicates(
                "ibfjcaffccadidiaidchakchchcahabhibdcejkdkfbaeeaecdjhajbkfebebfea"
                )
            ).toBe("ibfjcdidiaidchakchchcahabhibdcejkdkfbecdjhajbkfebebfea");
    });
});

describe('removeDuplicates1 优美的双指针单元测试', function () {

    test('abbaca 测试', function () {
        expect(removeDuplicates1('abbaca')).toBe('ca');
    });

    test('cabbaca 测试', function () {
        expect(removeDuplicates1('cabbaca')).toBe('a');
    });

    test('aa 测试', function () {
        expect(removeDuplicates1('aa')).toBe('');
    });

    test('aaa 测试', function () {
        expect(removeDuplicates1('aaa')).toBe('a');
    });

    test('aaaa 测试', function () {
        expect(removeDuplicates1('aaaa')).toBe('');
    });

    test('aaaaa 测试', function () {
        expect(removeDuplicates1('aaaaa')).toBe('a');
    });

    test('aaaaaaaaa 测试', function () {
        expect(removeDuplicates1('aaaaaaaaa')).toBe('a');
    });

    test('caffcca 测试', function () {
        expect(removeDuplicates1('caffcca')).toBe('c');
    });

    test('ibfjcaffccadidiaidchakchchcahabhibdcejkdkfbaeeaecdjhajbkfebebfea', function () {
        expect(
            removeDuplicates1(
                "ibfjcaffccadidiaidchakchchcahabhibdcejkdkfbaeeaecdjhajbkfebebfea"
                )
            ).toBe("ibfjcdidiaidchakchchcahabhibdcejkdkfbecdjhajbkfebebfea");
    });
});

describe('removeDuplicates2  栈方法单元测试', function () {

    test('abbaca 测试', function () {
        expect(removeDuplicates2('abbaca')).toBe('ca');
    });

    test('cabbaca 测试', function () {
        expect(removeDuplicates2('cabbaca')).toBe('a');
    });

    test('aa 测试', function () {
        expect(removeDuplicates2('aa')).toBe('');
    });

    test('aaa 测试', function () {
        expect(removeDuplicates2('aaa')).toBe('a');
    });

    test('aaaa 测试', function () {
        expect(removeDuplicates2('aaaa')).toBe('');
    });

    test('aaaaa 测试', function () {
        expect(removeDuplicates2('aaaaa')).toBe('a');
    });

    test('aaaaaaaaa 测试', function () {
        expect(removeDuplicates2('aaaaaaaaa')).toBe('a');
    });

    test('caffcca 测试', function () {
        expect(removeDuplicates2('caffcca')).toBe('c');
    });

    test('ibfjcaffccadidiaidchakchchcahabhibdcejkdkfbaeeaecdjhajbkfebebfea', function () {
        expect(
            removeDuplicates2(
                "ibfjcaffccadidiaidchakchchcahabhibdcejkdkfbaeeaecdjhajbkfebebfea"
                )
            ).toBe("ibfjcdidiaidchakchchcahabhibdcejkdkfbecdjhajbkfebebfea");
    });
});

