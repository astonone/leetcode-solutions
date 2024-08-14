// binary search, time O(log(N))
export function searchInsert(nums: number[], target: number) {
    let answer = nums.length;
    let low = 0,
        high = nums.length - 1;

    while (low <= high) {
        const mid = parseInt(String((low + high) / 2));
        if (nums[mid] >= target) {
            high = mid - 1;
            answer = mid;
        } else {
            low = mid + 1;
        }
    }
    return answer;
}

// linear search, time O(N)
export function searchInsertLinear(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if ((i - 1 >= 0) && (nums[i - 1] < target && target < nums[i])) {
            return i;
        }
    }
    return target > nums[nums.length - 1] ? nums.length : 0;
}
