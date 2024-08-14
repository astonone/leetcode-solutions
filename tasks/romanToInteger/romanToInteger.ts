export function romanToInt(s: string): number {
    const romanToIntMap = new Map();
    romanToIntMap.set('I', 1);
    romanToIntMap.set('V', 5);
    romanToIntMap.set('X', 10);
    romanToIntMap.set('L', 50);
    romanToIntMap.set('C', 100);
    romanToIntMap.set('D', 500);
    romanToIntMap.set('M', 1000);

    const parsedNumbersForSum = [];

    let inputStringCurrentPos = 0;
    let currentParsedNumberPos = 0;
    let currentParsedNumberValue = 0;

    while (inputStringCurrentPos + 1 <= s.length) {

        if (currentParsedNumberValue !== 0) {

            if (romanToIntMap.get(s[inputStringCurrentPos]) === romanToIntMap.get(s[inputStringCurrentPos + 1])) {

                currentParsedNumberValue += romanToIntMap.get(s[inputStringCurrentPos]);
                parsedNumbersForSum[currentParsedNumberPos] = currentParsedNumberValue;

                inputStringCurrentPos++;

            } else {

                currentParsedNumberValue += romanToIntMap.get(s[inputStringCurrentPos]);
                parsedNumbersForSum[currentParsedNumberPos] = currentParsedNumberValue;

                inputStringCurrentPos++;
                currentParsedNumberPos++;
                currentParsedNumberValue = 0;

            }

        } else {

            if (romanToIntMap.get(s[inputStringCurrentPos]) < romanToIntMap.get(s[inputStringCurrentPos + 1])) {

                currentParsedNumberValue = romanToIntMap.get(s[inputStringCurrentPos + 1]) - romanToIntMap.get(s[inputStringCurrentPos]);
                parsedNumbersForSum[currentParsedNumberPos] = currentParsedNumberValue;

                currentParsedNumberPos++;
                inputStringCurrentPos += 2;
                currentParsedNumberValue = 0;

            } else if (romanToIntMap.get(s[inputStringCurrentPos]) > romanToIntMap.get(s[inputStringCurrentPos + 1])) {

                currentParsedNumberValue = romanToIntMap.get(s[inputStringCurrentPos]);
                parsedNumbersForSum[currentParsedNumberPos] = currentParsedNumberValue;

                currentParsedNumberPos++;
                inputStringCurrentPos++;
                currentParsedNumberValue = 0;

            } else {

                currentParsedNumberValue = romanToIntMap.get(s[inputStringCurrentPos]);
                parsedNumbersForSum[currentParsedNumberPos] = currentParsedNumberValue;

                inputStringCurrentPos++;

            }

        }
    }

    let result = 0;
    for (let i = 0; i < parsedNumbersForSum.length; i++) {
        result += parsedNumbersForSum[i];
    }

    return result;
}
