/**
 * 超时算法
 * @param tickets
 * @returns
 */
export function findItinerary1(tickets: string[][]): string[] {
    const res: string[][] = [];
    const onPath: string[] = [];
    const n = tickets.length;
    const used = new Array(n).fill(false);
    const backtrack = (start: string) => {
        // 结束条件
        if (onPath.length === n) {
            res.push([...onPath, start]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) {
                continue;
            }

            // 找到对应的起始点
            if (tickets[i][0] !== start) {
                continue;
            }

            used[i] = true;
            onPath.push(tickets[i][0]);
            backtrack(tickets[i][1]);
            onPath.pop();
            used[i] = false;
        }
    };

    backtrack("JFK");

    // 找到字典序最小的
    res.sort((a, b) => (a.join("") > b.join("") ? 1 : -1));

    return res[0];
}

/**
 * 也会超时
 * @param tickets
 * @returns
 */
export function findItinerary2(tickets: string[][]): string[] {
    const ans = ["JFK"];

    // ! 邻接表 (每个起点 能到达的 终点城市List, 映射关系)
    const map = new Map<string, string[]>();

    for (const ticket of tickets) {
        const [from, to] = ticket;
        if (!map.has(from)) {
            map.set(from, []);
        }
        map.get(from).push(to);
    }

    // ! 对每个起点能到达的中终点, 按照字典序排序
    map.forEach((val) => {
        val.sort();
    });

    /**
     * JFK -> ["ATL", "SFO"]
     * ATL -> ["JFK", "SFO"]
     * SFO -> ["ATL"]
     */

    const backtrack = (startCity: string, usedNUm: number) => {
        if (usedNUm === tickets.length) {
            return true;
        }

        // 没有去到下一站的城市, 结束当前分支
        if (!map.has(startCity)) {
            return false;
        }

        const nextTickets = map.get(startCity);

        for (let i = 0; i < nextTickets.length; i++) {
            const nextCity = nextTickets[i];

            // 使用过得城市, 就不能再用了
            nextTickets.splice(i, 1);

            // 将结果 push
            ans.push(nextCity);
            if (backtrack(nextCity, usedNUm + 1)) {
                return true;
            }
            nextTickets.splice(i, 0, nextCity);
            ans.pop();
        }

        return false;
    };

    backtrack("JFK", 0);

    return ans;
}

/**
 * 邻接表 -- 欧拉路径
 * @param tickets 
 * @returns 
 */
export function findItinerary(tickets: string[][]): string[] {
    const ans = [];

    // ! 邻接表 (每个起点 能到达的 终点城市List, 映射关系)
    const map = new Map<string, string[]>();

    for (const ticket of tickets) {
        const [from, to] = ticket;
        if (!map.has(from)) {
            map.set(from, []);
        }
        map.get(from).push(to);
    }

    // ! 对每个起点能到达的中终点, 按照字典序排序
    map.forEach((val) => {
        val.sort();
    });

    const dfs = (startCity: string) => {
        while (map.has(startCity) && map.get(startCity).length > 0) {
            const nextCity = map.get(startCity).shift();
            dfs(nextCity);
        }

        ans.unshift(startCity);
    };

    dfs("JFK");

    return ans;
}
