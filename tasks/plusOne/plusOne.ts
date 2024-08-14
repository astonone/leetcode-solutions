// Time complexity: O(N)
export function plusOne(digits: number[]): number[] {
    let inc = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (inc !== 0 && digits[i] + inc >= 10) {
            digits[i] = (digits[i] + inc) - 10;
        } else {
            digits[i] = (digits[i] + inc);
            inc = 0;
        }
    }
    if (inc !== 0) {
        return [1, ...digits];
    }
    return digits;
}
