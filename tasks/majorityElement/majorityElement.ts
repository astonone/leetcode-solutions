export function majorityElement(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }
    const numsAndAmountMap = new Map<number, number>();
    let majEl;
    for (let i = 0; i < nums.length; i++) {
        if (numsAndAmountMap.has(nums[i])) {
            numsAndAmountMap.set(nums[i], numsAndAmountMap.get(nums[i]) + 1);
            if (numsAndAmountMap.get(nums[i]) > nums.length / 2) {
                majEl = nums[i];
                break;
            }
        } else {
            numsAndAmountMap.set(nums[i], 1);
        }
    }
    return majEl!;
}
