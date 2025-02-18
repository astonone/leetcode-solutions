export function generate(numRows: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        const newRow: number[] = [];
        if (i === 0) {
            result.push([i + 1]);
        } else if (i === 1) {
            result.push([i, i]);
        } else {
            const prevRow = result[i - 1];

            newRow.push(1);
            for (let j = 0; j < prevRow.length; j++) {
                if (j + 1 < prevRow.length) {
                    newRow.push(prevRow[j] + prevRow[(j + 1)]);
                }
            }
            newRow.push(1);

            result.push(newRow);
        }
    }
    return result;
}
