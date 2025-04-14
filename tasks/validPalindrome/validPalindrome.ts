export function isPalindrome(s: string): boolean {
    let clearStr= '';
    let revertedClearStr = '';
    for (let i = 0; i < s.length; i++) {
        if (isLetterOrNumber(s[i])) {
            clearStr += s[i].toLowerCase();
        }
        if (isLetterOrNumber(s[s.length - 1 - i])) {
            revertedClearStr += s[s.length - 1 - i].toLowerCase();
        }
    }
    return clearStr === revertedClearStr;
}

function isLetterOrNumber(c: string): boolean {
    return /^[a-z0-9]$/i.test(c);
}
