export function leastBricks(wall: number[][]): number {
    /**
     * 1. 统计所有行的间隙
     * eg:
     * 1, 2, 2, 1 => 1, 3, 5
     * 3, 1, 2    => 3, 4
     * 1, 3, 2    => 1, 4
     * 2, 4       => 2
     * 3, 1, 2    => 3, 4
     * 1, 3, 1, 1 => 1, 4, 5
     *
     * 2. 找到所有行中 出现最多的间隙: 4
     * 3. 总行数 - 最多间隙所在总行数 = 穿过砖块的数量最少
     */

    const map = new Map<number, number>();

    for (let i = 0; i < wall.length; i++) {
        let sum = 0;
        // 最后一个元素不统计
        for (let j = 0; j < wall[i].length - 1; j++) {
            sum += wall[i][j];
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }

    // let max = 0;
    // map.forEach((v) => {
    //     max = Math.max(v, max);
    // });
    // return wall.length - max;

    return wall.length - Math.max(...map.values(), 0);
}
