// Time complexity: O(N)
export function lengthOfLastWord(s: string): number {
    let firstWord = '';
    let i = s.length - 1;
    do {
        if (s[i] !== ' ') {
            firstWord += s[i];
        } else {
            if (firstWord.length) {
                break;
            }
        }
        i--;
    } while (i >= 0)
    return firstWord.length;
}
