export function poorPigs(
    buckets: number,
    minutesToDie: number,
    minutesToTest: number
): number {
    const states = Math.floor(minutesToTest / minutesToDie) + 1;
    const pigs = Math.ceil(Math.log(buckets) / Math.log(states) - 1e-5);
    return pigs;
}
