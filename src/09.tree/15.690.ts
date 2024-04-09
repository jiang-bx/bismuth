import { idText } from "typescript";

class Employee {
    id: number;
    importance: number;
    subordinates: number[];
    constructor(id: number, importance: number, subordinates: number[]) {
        this.id = id === undefined ? 0 : id;
        this.importance = importance === undefined ? 0 : importance;
        this.subordinates = subordinates === undefined ? [] : subordinates;
    }
}

export function CreateEmployee(nums: (number | number[])[][]) {
    return nums.map((item) => {
        // @ts-ignore
        return new Employee(item[0], item[1], item[2]);
    });
}

/**
 * @param employees
 * @param id
 * @returns
 */
export function getImportance(employees: Employee[], id: number): number {
    // 递归解法
    // const map = new Map<number, Employee>();
    // employees.forEach((item) => {
    //     map.set(item.id, item);
    // });

    // const dfs = (curId: number) => {
    //     let ans = 0;
    //     const em = map.get(curId);
    //     ans += em.importance;
    //     em.subordinates.forEach((item) => {
    //         ans += dfs(item);
    //     });

    //     return ans;
    // };

    // return dfs(id);

    // 迭代 BFS
    const map = new Map<number, Employee>();
    employees.forEach((item) => {
        map.set(item.id, item);
    });

    const queue: Employee[] = [];
    queue.push(map.get(id));

    let ans = 0;

    while (queue.length) {
        const cur = queue.shift();
        ans += cur.importance;

        cur.subordinates.forEach((item) => {
            queue.push(map.get(item));
        });
    }

    return ans;
}
