export function convertToTitle(columnNumber: number): string {
    let revRes = '';
    if (columnNumber >= 0 && columnNumber <= 26) {
        return getLetterByNumber(columnNumber);
    }
    let rem = columnNumber;
    while (rem > 26) {
        const curr = Math.floor(rem / 26);
        const idx = rem - (curr * 26);
        revRes += getLetterByNumber(idx);
        if (idx === 0) {
            rem = curr - 1
        } else {
            rem = curr;
        }
    }
    if (rem > 0) {
        revRes += getLetterByNumber(rem);
    }
    let result = '';
    for (let i = revRes.length - 1; i >= 0; i--) {
        result += revRes[i];
    }
    return result;
}

function getLetterByNumber(num: number): string {
    if (num === 0) {
        return 'Z';
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[num - 1];
}
