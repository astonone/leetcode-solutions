export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let nums2NotMergedElemPos = 0;
    for (let i = 0; i < m + n; i++) {
        if (nums1[i] > nums2[nums2NotMergedElemPos]) {
            moveElementsFromPos(nums1, m + n, i);
            nums1[i] = nums2[nums2NotMergedElemPos];
            nums2NotMergedElemPos++;
        } else {
            if (nums1[i] === 0 && i >= m && nums2NotMergedElemPos < n) {
                nums1[i] = nums2[nums2NotMergedElemPos];
                nums2NotMergedElemPos++;
            }
        }
    }
}

function moveElementsFromPos(arr: number[], arrLength: number, pos: number): void {
    let temp = arr[arrLength - 1];
    for (let j = arrLength - 1; j > pos; j--) {
        arr[j] = arr[j - 1];
    }
    arr[pos] = temp;
}
