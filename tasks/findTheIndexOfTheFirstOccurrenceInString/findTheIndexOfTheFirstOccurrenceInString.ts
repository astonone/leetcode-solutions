// Time complexity: O(N * M)
export function strStr(haystack: string, needle: string): number {
    const firstSymbol = needle[0];
    let occurStartIndex = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === firstSymbol && occurStartIndex === -1 && haystack.length - i >= needle.length) {
            if (isSubstr(haystack, needle, i)) {
                occurStartIndex = i;
            }
        }
    }
    return occurStartIndex;
}

function isSubstr(haystack: string, needle: string, startIndex: number): boolean {
    for (let j = 0, k = startIndex; j < needle.length; j++, k++) {
        if (k < haystack.length && haystack[k] !== needle[j]) {
            return false;
        }
    }
    return true;
}
