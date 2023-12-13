export function predictPartyVictory(senate: string): string {
    const arr = senate.split("");
    const n = arr.length;
    // senate 中是否有 R 或者 D
    let R = true;
    let D = true;

    // 标记变量,
    // 当 person > 0 时, R 可以淘汰 D,
    // 当 person < 0 时, D 可以淘汰 R,
    let person = 0;

    while (R && D) {
        R = false;
        D = false;

        for (let i = 0; i < n; i++) {
            if (arr[i] === "R") {
                R = true;

                // 判断是否 该 R 是否可以被淘汰
                if (person < 0) {
                    arr[i] = "0";
                }

                // 为 R 时, 要增大
                person++;
            } else if (arr[i] === "D") {
                D = true;
                // 判断该 D 是否可以被淘汰
                if (person > 0) {
                    arr[i] = "0";
                }
                person--;
            }
        }
    }

    return person > 0 ? "Radiant" : "Dire";
}
