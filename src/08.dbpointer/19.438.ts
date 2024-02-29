export function findAnagrams(s: string, p: string): number[] {
    /**
    
    // 太难理解了
    const n = s.length;
    const m = p.length;
    const res = [];
    const sCnt = new Array(26).fill(0);
    const pCnt = new Array(26).fill(0);
    const base = "a".charCodeAt(0);

    for (let i = 0; i < m; i++) {
        pCnt[p.charCodeAt(i) - base]++;
    }

    let left = 0;

    // 窗口右边界不停地右移
    for (let right = 0; right < n; right++) {
        const curRight = s.charCodeAt(right) - base;

        // 加入 s 统计
        sCnt[curRight]++;

        // 超出了 p 的统计
        while (sCnt[curRight] > pCnt[curRight]) {
            const curLeft = s.charCodeAt(left) - base;

            // 减少 s 的统计数
            sCnt[curLeft]--;

            // 窗口左边界右移
            left++;
        }

        // 当 窗口与 p 长度相等时, 就是异位词
        if (right - left + 1 === m) {
            res.push(left);
        }
    }

    return res;
     
     */

    const res = [];
    const m = p.length;
    const cnt = new Array(26).fill(0);
    const base = "a".charCodeAt(0);
    for (let i = 0; i < m; i++) {
        cnt[p.charCodeAt(i) - base]++;
    }

    // p 中不重复的字符数量
    let pDiff = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] !== 0) {
            pDiff++;
        }
    }

    let l = 0;
    let sDiff = 0;
    for (let r = 0; r < s.length; r++) {
        // 窗口右端默认右移

        // 进行词频抵消操作
        const curR = s.charCodeAt(r) - base;
        cnt[curR]--;

        // 如果结果为 0, 该字符词频与 p 完全相同
        if (cnt[curR] === 0) {
            sDiff++;
        }

        // 窗口长度 > p 时
        if (r - l + 1 > m) {
            // 窗口左端右移
            const curL = s.charCodeAt(l) - base;
            l++;
            cnt[curL]++;
            if (cnt[curL] === 1) {
                sDiff--;
            }
        }

        if (sDiff === pDiff) {
            res.push(l);
        }
    }

    return res;
}
