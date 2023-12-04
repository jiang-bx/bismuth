import { createLinkedNode, removeElements } from "./01.203";
import { deleteNode } from "./02.237";
import { removeNthFromEnd } from "./03.19";
import { createNodeByList, flatten } from "./04.430";
import { rotateRight } from "./05.61";
import { swapPairs } from "./06.24";
import { reverseList } from "./07.206";
import { reverseBetween } from "./08.92";
import { reverseKGroup } from "./09.25";
import { addTwoNumbers } from "./10.2";
import { addTwoNumbers2 } from "./11.445";
import { mergeTwoLists } from "./12.21";
import { mergeKLists } from "./13.23";

describe("203 测试用例", () => {
    test(`[1,2,6,3,4,5,6], 6 should return [1,2,3,4,5]`, () => {
        expect(
            removeElements(createLinkedNode([1, 2, 6, 3, 4, 5, 6]), 6)
        ).toEqual(createLinkedNode([1, 2, 3, 4, 5]));
    });

    test(`[7,7,7,7], 6 should return []`, () => {
        expect(removeElements(createLinkedNode([7, 7, 7, 7]), 7)).toEqual(
            createLinkedNode([])
        );
    });
});

describe("237 测试用例", () => {
    test(`[4,5,1,9], 5 should return [4,1,9]`, () => {
        expect(deleteNode(createLinkedNode([4, 5, 1, 9]))).toEqual(
            createLinkedNode([4, 1, 9])
        );
    });

    test(`[7,7,7,7], 6 should return []`, () => {
        expect(removeElements(createLinkedNode([7, 7, 7, 7]), 7)).toEqual(
            createLinkedNode([])
        );
    });
});

describe("19 测试用例", () => {
    test(`[1,2,3,4,5], 2 should return [1,2,3,5]`, () => {
        expect(removeNthFromEnd(createLinkedNode([1, 2, 3, 4, 5]), 2)).toEqual(
            createLinkedNode([1, 2, 3, 5])
        );
    });

    test(`[1], n = 1 should return []`, () => {
        expect(removeNthFromEnd(createLinkedNode([1]), 1)).toEqual(
            createLinkedNode([])
        );
    });

    test(`[1, 2], n = 2 should return [2]`, () => {
        expect(removeNthFromEnd(createLinkedNode([1, 2]), 2)).toEqual(
            createLinkedNode([2])
        );
    });
});

describe("430 测试用例", () => {
    test(`[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12] should return [1,2,3,7,8,11,12,9,10,4,5,6]`, () => {
        const head = createNodeByList([
            1,
            2,
            3,
            4,
            5,
            6,
            null,
            null,
            null,
            7,
            8,
            9,
            10,
            null,
            null,
            11,
            12,
        ]);

        const res = createNodeByList([1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]);

        expect(flatten(head)).toEqual(res);
    });

    test(`[1,2,null,3] should return [1,3,2]`, () => {
        const head = createNodeByList([1, 2, null, 3]);
        const res = createNodeByList([1, 3, 2]);
        expect(flatten(head)).toEqual(res);
    });

    test(`[] should return []`, () => {
        const head = createNodeByList([]);
        const res = createNodeByList([]);
        expect(flatten(head)).toEqual(res);
    });

    test(`[1, null, 2, null, 3, null] should return [1, 2, 3]`, () => {
        const head = createNodeByList([1, null, 2, null, 3, null]);
        const res = createNodeByList([1, 2, 3]);
        expect(flatten(head)).toEqual(res);
    });
});

describe("61 测试用例", () => {
    test(`[1,2,3,4,5], k = 2 should return [4,5,1,2,3]`, () => {
        expect(rotateRight(createLinkedNode([1, 2, 3, 4, 5]), 2)).toEqual(
            createLinkedNode([4, 5, 1, 2, 3])
        );
    });

    test(`[0,1,2], k = 4 should return [2,0,1]`, () => {
        expect(rotateRight(createLinkedNode([0, 1, 2]), 4)).toEqual(
            createLinkedNode([2, 0, 1])
        );
    });

    test(`[1,2], k = 1 should return [2,1]`, () => {
        expect(rotateRight(createLinkedNode([1, 2]), 1)).toEqual(
            createLinkedNode([2, 1])
        );
    });
});

describe("24 测试用例", () => {
    test(`[1,2,3,4] should return [2,1,4,3]`, () => {
        expect(swapPairs(createLinkedNode([1, 2, 3, 4]))).toEqual(
            createLinkedNode([2, 1, 4, 3])
        );
    });

    test(`[] should return []`, () => {
        expect(swapPairs(createLinkedNode([]))).toEqual(createLinkedNode([]));
    });

    test(`[1] should return [1]`, () => {
        expect(swapPairs(createLinkedNode([1]))).toEqual(createLinkedNode([1]));
    });
});

describe("206 测试用例", () => {
    test(`[1,2,3,4,5] should return [5,4,3,2,1]`, () => {
        const head = reverseList(createLinkedNode([1, 2, 3, 4, 5]));
        expect(head).toEqual(createLinkedNode([5, 4, 3, 2, 1]));
    });

    test(`[] should return []`, () => {
        expect(reverseList(createLinkedNode([]))).toEqual(createLinkedNode([]));
    });

    test(`[1,2] should return [2,1]`, () => {
        expect(reverseList(createLinkedNode([1, 2]))).toEqual(
            createLinkedNode([2, 1])
        );
    });
});

describe("92 测试用例", () => {
    test(`[1,2,3,4,5], left = 2, right = 4, should return [1,4,3,2,5]`, () => {
        const head = reverseBetween(createLinkedNode([1, 2, 3, 4, 5]), 2, 4);
        expect(head).toEqual(createLinkedNode([1, 4, 3, 2, 5]));
    });

    test(`[5], left = 1, right = 1 should return [5]`, () => {
        expect(reverseBetween(createLinkedNode([5]), 1, 1)).toEqual(
            createLinkedNode([5])
        );
    });

    test(`[3, 5], left = 1, right = 2 should return [5, 3]`, () => {
        expect(reverseBetween(createLinkedNode([3, 5]), 1, 2)).toEqual(
            createLinkedNode([5, 3])
        );
    });
});

describe("25 测试用例", () => {
    test(`[1,2,3,4,5], k = 2 should return [2,1,4,3,5]`, () => {
        const head = reverseKGroup(createLinkedNode([1, 2, 3, 4, 5]), 2);
        expect(head).toEqual(createLinkedNode([2, 1, 4, 3, 5]));
    });

    test(`[1,2,3,4,5], k = 3 should return [3,2,1,4,5]`, () => {
        const head = reverseKGroup(createLinkedNode([1, 2, 3, 4, 5]), 3);
        expect(head).toEqual(createLinkedNode([3, 2, 1, 4, 5]));
    });
});

describe("2 测试用例", () => {
    test(`[2,4,3], [5,6,4] should return [7,0,8]`, () => {
        const l1 = createLinkedNode([2, 4, 3]);
        const l2 = createLinkedNode([5, 6, 4]);
        const head = addTwoNumbers(l1, l2);
        expect(head).toEqual(createLinkedNode([7, 0, 8]));
    });

    test(`l1 = [0], l2 = [0] should return [0]`, () => {
        const l1 = createLinkedNode([0]);
        const l2 = createLinkedNode([0]);
        const head = addTwoNumbers(l1, l2);
        expect(head).toEqual(createLinkedNode([0]));
    });

    test(`l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] should return [8,9,9,9,0,0,0,1]`, () => {
        const l1 = createLinkedNode([9, 9, 9, 9, 9, 9, 9]);
        const l2 = createLinkedNode([9, 9, 9, 9]);
        const head = addTwoNumbers(l1, l2);
        expect(head).toEqual(createLinkedNode([8, 9, 9, 9, 0, 0, 0, 1]));
    });
});

describe("445 测试用例", () => {
    test(`[2,4,3], [5,6,4] should return [7,0,8]`, () => {
        const l1 = createLinkedNode([2, 4, 3]);
        const l2 = createLinkedNode([5, 6, 4]);
        const head = addTwoNumbers2(l1, l2);
        expect(head).toEqual(createLinkedNode([8, 0, 7]));
    });

    test(`l1 = [0], l2 = [0] should return [0]`, () => {
        const l1 = createLinkedNode([0]);
        const l2 = createLinkedNode([0]);
        const head = addTwoNumbers2(l1, l2);
        expect(head).toEqual(createLinkedNode([0]));
    });

    test(`l1 = [7,2,4,3], l2 = [5, 6, 4] should return [7,8,0,7]`, () => {
        const l1 = createLinkedNode([7, 2, 4, 3]);
        const l2 = createLinkedNode([5, 6, 4]);
        const head = addTwoNumbers2(l1, l2);
        expect(head).toEqual(createLinkedNode([7, 8, 0, 7]));
    });
});

describe("21 测试用例", () => {
    test(`[1,2,4], [1,3,4] should return [1,1,2,3,4,4]`, () => {
        const l1 = createLinkedNode([1, 2, 4]);
        const l2 = createLinkedNode([1, 3, 4]);
        const head = mergeTwoLists(l1, l2);
        expect(head).toEqual(createLinkedNode([1, 1, 2, 3, 4, 4]));
    });

    test(`l1 = [], l2 = [0] should return [0]`, () => {
        const l1 = createLinkedNode([]);
        const l2 = createLinkedNode([0]);
        const head = mergeTwoLists(l1, l2);
        expect(head).toEqual(createLinkedNode([0]));
    });

    test(`l1 = [], l2 = [] should return []`, () => {
        const l1 = createLinkedNode([]);
        const l2 = createLinkedNode([]);
        const head = mergeTwoLists(l1, l2);
        expect(head).toEqual(createLinkedNode([]));
    });
});

describe("23 测试用例", () => {
    test(`[[1,4,5],[1,3,4],[2,6]] should return [1,1,2,3,4,4,5,6]`, () => {
        const head = mergeKLists([
            createLinkedNode([1, 4, 5]),
            createLinkedNode([1, 3, 4]),
            createLinkedNode([2, 6]),
        ]);
        expect(head).toEqual(createLinkedNode([1, 1, 2, 3, 4, 4, 5, 6]));
    });

    test(`lists = [[]] should return []`, () => {
        const head = mergeKLists([createLinkedNode([])]);
        expect(head).toEqual(createLinkedNode([]));
    });

    test(`lists = [] should return []`, () => {
        const head = mergeKLists([]);
        expect(head).toEqual(createLinkedNode([]));
    });
});
