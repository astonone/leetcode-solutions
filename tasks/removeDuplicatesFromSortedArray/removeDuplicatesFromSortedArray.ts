// Time complexity: O(N)
export function removeDuplicates(nums: any[]) {
    if (nums.length < 2) {
        return 1;
    }

    let input,
        output,
        currentUniqIdx = 1,
        currentUniq = nums[0],
        nexUniq = nums[1],
        lastUniq = nums[nums.length - 1];

    for (output = 1; output < nums.length; output++) {

        input = output;

        if (currentUniq === lastUniq) {

            nums[output] = '_';

            if (output === 1) {
                currentUniqIdx = 0;
            }
        } else {
            while (nums[input] === currentUniq || nums[input] < nexUniq) {
                input++;
            }
            nexUniq = nums[input];

            nums[output] = nexUniq;
            currentUniq = nexUniq;
            currentUniqIdx = output;
        }
    }
    return currentUniqIdx + 1;
}
