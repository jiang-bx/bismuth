export function findContentChildren(g: number[], s: number[]): number {
    // 孩子的胃口从小到大排序
    g = g.sort((a, b) => a - b);
    // 饼干的大小从小到大排序
    s = s.sort((a, b) => a - b);

    let i = 0;

    // 贪心, 用最小的饼干优先喂胃口最小的孩子
    for (let j = 0; i < g.length && j < s.length; j++) {
        // 饼干满足胃口, 下一个孩子 i++
        if (s[j] >= g[i]) {
            i++;
        }

        // 饼干不满足时, 看下一个饼干是否满足, j++
    }

    return i;
}
