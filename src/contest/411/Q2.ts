export function maxEnergyBoost1(
    energyDrinkA: number[],
    energyDrinkB: number[]
): number {
    const n = energyDrinkA.length;
    const dpA = new Array(n).fill(0);
    const dpB = new Array(n).fill(0);

    dpA[0] = energyDrinkA[0];
    dpA[1] = dpA[0] + energyDrinkA[1];

    dpB[0] = energyDrinkB[0];
    dpB[1] = dpB[0] + energyDrinkB[1];

    for (let i = 2; i < n; i++) {
        dpA[i] = Math.max(dpA[i - 1], dpB[i - 2]) + energyDrinkA[i];
        dpB[i] = Math.max(dpB[i - 1], dpA[i - 2]) + energyDrinkB[i];
    }

    return Math.max(dpA[n - 1], dpB[n - 1]);
}

export function maxEnergyBoost(
    energyDrinkA: number[],
    energyDrinkB: number[]
): number {
    const n = energyDrinkA.length;
    let da = energyDrinkA[0];
    let db = energyDrinkB[0];

    for (let i = 1; i < n; i++) {
        let temp = da;
        da = Math.max(da + energyDrinkA[i], db);
        db = Math.max(db + energyDrinkB[i], temp);
    }

    return Math.max(da, db);
}
