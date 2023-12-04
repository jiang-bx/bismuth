export function constructRectangle(area: number): number[] {
    // let w = 1;
    // let l = area;
    // const minRes = [l, w];
    // for (; w <= area / 2; w++) {
    //     if (area % w === 0) {
    //         l = area / w;
    //         if (l >= w && l - w < minRes[0] - minRes[1]) {
    //             minRes[0] = l;
    //             minRes[1] = w;
    //         }
    //     }
    // }
    // return minRes;

    let w = Math.floor(Math.sqrt(area));
    while (area % w !== 0) w--;
    return [area / w, w];
}
