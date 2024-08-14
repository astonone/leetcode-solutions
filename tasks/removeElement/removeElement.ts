// Time complexity: O(N)
export function removeElement(nums: number[] | string[], val: number): number {
    let k = 0;
    let i = 0;
    while (i < nums.length - k) {
        if (nums[i] === val) {
            const lastIndex = nums.length - 1 - k;
            nums[i] = nums[lastIndex];
            nums[lastIndex] = '_';
            if (nums[i] !== val) {
                i++;
            }
            k++;
        } else {
            i++;
        }
    }

    return nums.length - k;
}
