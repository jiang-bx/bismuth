export function increasingTriplet(nums: number[]): boolean {
    
    let m1 = Infinity
    let m2 = Infinity

    for (let i = 0; i < nums.length; i++) {
        if (m1 >= nums[i]) {
            m1 = nums[i]
        } else if (m2 >= nums[i]) {
            m2 = nums[i]
        } else {
            return true
        }
    }

    return false
};