export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const sArr = s.split('');
    const tArr = t.split('');
    const sortedSArr = sArr.sort();
    const sortedTArr = tArr.sort();
    for (let i = 0; i < sortedSArr.length; i++) {
        if (sortedSArr[i] !== sortedTArr[i]) {
            return false;
        }
    }
    return true;
}

// another solution
export function isAnagram2(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i])! + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i])! - 1);
        }
    }
    const valuesArr = Array.from(map.values());
    for (let i = 0; i < valuesArr.length; i++) {
        if (valuesArr[i] !== 0) {
            return false;
        }
    }
    return true;
}
