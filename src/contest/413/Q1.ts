export function checkTwoChessboards(
    coordinate1: string,
    coordinate2: string
): boolean {
    const ax = coordinate1.charCodeAt(0) - "a".charCodeAt(0) + 1;
    const ay = Number(coordinate1[1]);
    const aBlack =
        (ax % 2 === 0 && ay % 2 === 0) || (ax % 2 === 1 && ay % 2 === 1);

    const bx = coordinate2.charCodeAt(0) - "a".charCodeAt(0) + 1;
    const by = Number(coordinate2[1]);

    const bBalck =
        (bx % 2 === 0 && by % 2 === 0) || (bx % 2 === 1 && by % 2 === 1);

    return aBlack === bBalck;
}
