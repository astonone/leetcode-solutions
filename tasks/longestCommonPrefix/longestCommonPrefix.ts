// Time complexity: O(N + M)
export function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    let commonPrefix = '';
    if (strs.length > 1) {
        const elemForCompare = strs[0];
        const arrForCompare = strs.slice(1);
        for (let i = 0; i < elemForCompare.length; i++) {
            if (isPrefix(commonPrefix + elemForCompare[i], arrForCompare)) {
                commonPrefix += elemForCompare[i];
            } else {
                break;
            }
        }
    }
    return commonPrefix;
}

function isPrefix(pref: string, arr: string[]): boolean {
    let result = true;
    arr.forEach(item => {
        if (!item.startsWith(pref)) {
            result = false;
        }
    });
    return result;
}
