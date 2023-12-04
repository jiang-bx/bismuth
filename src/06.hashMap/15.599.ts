export function findRestaurant(list1: string[], list2: string[]): string[] {
    // const length1 = list1.length;
    // const length2 = list2.length;
    // const map = new Map<
    //     string,
    //     {
    //         isPublic: boolean;
    //         index: number;
    //     }
    // >();
    // const res: string[] = [];

    // for (let i = 0; i < length1; i++) {
    //     map.set(list1[i], {
    //         isPublic: false,
    //         index: i,
    //     });
    // }

    // let minIndex = 2000;

    // for (let i = 0; i < length2; i++) {
    //     if (map.has(list2[i])) {
    //         const totalIndex = map.get(list2[i]).index + i;

    //         map.set(list2[i], {
    //             isPublic: true,
    //             index: totalIndex,
    //         });

    //         if (totalIndex <= minIndex) {
    //             minIndex = totalIndex;
    //         }
    //     }
    // }

    // map.forEach((value, key) => {
    //     if (value.isPublic && value.index === minIndex) {
    //         res.push(key);
    //     }
    // });

    // return res;

    // 方法二: 直接在 list2 遍历时, 判断出最小的项
    let res: string[] = [];
    let min = list1.length + list2.length;
    const map = new Map<string, number>();

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    for (let i = 0; i < list2.length; i++) {
        if (!map.has(list2[i])) {
            continue;
        }

        const item = map.get(list2[i]);
        const total = item + i;

        if (total < min) {
            min = total;
            res = [list2[i]];
        } else if (total === min) {
            res.push(list2[i]);
        }
    }

    return res;
}
