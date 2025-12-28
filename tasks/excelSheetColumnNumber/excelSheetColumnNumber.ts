export function titleToNumber(columnTitle: string): number {
    const assocMap = prepareAssociationMap();
    let result = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const titleElement = columnTitle[i];
        const assocNum = assocMap.get(titleElement)!;
        result += Math.pow(26, columnTitle.length - 1 - i) * assocNum;
    }
    return result;
}

function prepareAssociationMap(): Map<string, number> {
    const assocMap = new Map<string, number>();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < alphabet.length; i++) {
        assocMap.set(alphabet[i], i + 1);
    }
    return assocMap;
}
