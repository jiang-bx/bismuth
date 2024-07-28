export function canReachCorner(
    X: number,
    Y: number,
    circles: number[][]
): boolean {
    let left = Infinity;
    let right = -Infinity;
    let top = -Infinity;
    let bottom = Infinity;

    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];

        let curL = circle[0] - circle[2];
        let curR = circle[0] + circle[2];
        let curT = circle[1] + circle[2];
        let curB = circle[1] - circle[2];

        // 先判断是否遮住了原点与终点
        if ((curL <= 0 && curB <= 0) || (curT >= Y && curR >= X)) {
            return false;
        }

        // 判断是否形成区间

        left = Math.min(left, curL);
        right = Math.max(right, curR);
        top = Math.max(top, curT);
        bottom = Math.min(bottom, curB);
    }

    // if (left <= 0 && right >= X && bottom <= 0 && top >= Y) {
    //     return false
    // }

    return true;
}
