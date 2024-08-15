// Time complexity: O((N+M)ˆ2)
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0;
    if (m === 0) {
        for (let i = 0; i < nums2.length; i++) {
            nums1[i] = nums2[i];
            j++;
        }
    } else {
        while (j < n) {
            let insertPos = searchInsertPosition(nums1, m + j, nums2[j]);
            moveElementsFromPos(nums1, m + n, insertPos);
            nums1[insertPos] = nums2[j];
            j++;
        }
    }
}

function searchInsertPosition(nums: number[], checkLength: number, target: number) {
    let i = 0;
    let lastGreaterThanOrEqualPos = 0;
    while (i < checkLength) {
        if (target >= nums[i]) {
            lastGreaterThanOrEqualPos = i + 1;
        }
        i++;
    }
    return lastGreaterThanOrEqualPos;
}

function moveElementsFromPos(arr: number[], arrLength: number, pos: number): void {
    let temp = arr[arrLength - 1];
    for (let j = arrLength - 1; j > pos; j--) {
        arr[j] = arr[j - 1];
    }
    arr[pos] = temp;
}

export function mergeLog(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0;
    if (m === 0) {
        for (let i = 0; i < nums2.length; i++) {
            nums1[i] = nums2[i];
            j++;
        }
    } else {
        while (j < n) {
            let insertPos = searchInsertPositionLog(nums1, m + j, nums2[j]);
            moveElementsFromPos(nums1, m + n, insertPos);
            nums1[insertPos] = nums2[j];
            j++;
        }
    }
}

function searchInsertPositionLog(nums: number[], checkLength: number, target: number) {
    let answer = checkLength;
    let low = 0,
        high = checkLength - 1;

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
