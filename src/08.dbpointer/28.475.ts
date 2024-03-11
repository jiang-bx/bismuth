export function findRadius(houses: number[], heaters: number[]): number {
    // 1, (2), (3), (4), 5
    // 2
    // 找到最能覆盖所有房子的 加热器 半径
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    let ans = 0;

    for (let i = 0, j = 0; i < houses.length; i++) {
        // 确保没有任何供暖器在房子左边时的情况
        let cur = Math.abs(heaters[j] - houses[i]);

        // 房子左边的供暖器的最短距离
        while (j < heaters.length && heaters[j] <= houses[i]) {
            cur = houses[i] - heaters[j++];
        }

        // 右边的与左边比较谁更短，abs也是确保没有任何供暖器在房子左边时的情况
        if (j < heaters.length) {
            cur = Math.min(cur, Math.abs(heaters[j] - houses[i]));
        }

        ans = Math.max(ans, cur);

        if (j > 0) {
            // 确保每次for循环，遍历的供暖器都在房子的左边
            j--;
        }
    }

    return ans;
}
