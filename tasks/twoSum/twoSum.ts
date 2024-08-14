// Time complexity: O(N)
export function twoSum(nums: number[], target: number): number[] {
    const numsWithIndices = new Map();
    numsWithIndices.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        if (numsWithIndices.has(target - nums[i])) {
            return [numsWithIndices.get(target - nums[i]), i];
        } else {
            numsWithIndices.set(nums[i], i)
        }
    }
    return Array.from(numsWithIndices.keys())
}
