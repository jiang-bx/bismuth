export function compareVersion(version1: string, version2: string): number {
    /**
    const arr1 = version1.split(".");
    const arr2 = version2.split(".");

    const n1 = arr1.length;
    const n2 = arr2.length;
    const n = Math.max(n1, n2);

    for (let i = 0; i < n; i++) {
        let item1 = 0,
            item2 = 0;
        if (i < n1) {
            item1 = Number(arr1[i]);
        }
        if (i < n2) {
            item2 = Number(arr2[i]);
        }

        if (item1 > item2) {
            return 1;
        } else if (item1 < item2) {
            return -1;
        }
    }

    return 0;
     */
    const arr1 = version1.split(".");
    const arr2 = version2.split(".");

    const n1 = arr1.length;
    const n2 = arr2.length;

    if (n1 < n2) {
        arr1.push(...new Array(n2 - n1).fill("0"));
    } else if (n1 > n2) {
        arr2.push(...new Array(n1 - n2).fill("0"));
    }

    const n = Math.max(n1, n2);

    for (let i = 0; i < n; i++) {
        if (Number(arr1[i]) > Number(arr2[i])) {
            return 1;
        } else if (Number(arr1[i]) < Number(arr2[i])) {
            return -1;
        }
    }

    return 0;
}
