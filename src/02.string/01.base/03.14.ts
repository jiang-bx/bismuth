export function longestCommonPrefix(strList: string[]): string {
    let flag = false;
    let res = "";
    for (let i = 0; i < strList[0].length; i++) {
        for (let j = 1; j < strList.length; j++) {
            if (i >= strList[0].length || strList[j][i] !== strList[0][i]) {
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
        res += strList[0][i];
    }

    return res;
}
