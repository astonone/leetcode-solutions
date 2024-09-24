export function addBinary(a: string, b: string): string {
    let sum = '';
    let store = ['0'];

    const maxLength = a.length > b.length ? a.length : b.length;
    for (let i = 0; i < maxLength; i++) {

        let aNum = a[a.length - 1 - i];
        let bNum = b[b.length - 1 - i];
        let currentDigit;

        if (!aNum && !bNum) {
            break;
        }
        if (!aNum) {
            aNum = '0';
        }
        if (!bNum) {
            bNum = '0';
        }

        if (Number(aNum) + Number(bNum) > 1) {
            currentDigit = '0';
            store[i + 1] = '1';
        } else {
            currentDigit = (Number(aNum) + Number(bNum)).toString();
            store[i + 1] = '0';
        }

        if (Number(currentDigit) + Number(store[i]) > 1) {
            sum = '0' + sum;
            store[i + 1] = '1';
        } else {
            sum = (Number(currentDigit) + Number(store[i])).toString() + sum;
        }
    }

    if (store[maxLength] !== '0') {
        sum = store[maxLength] + sum;
    }

    return sum;
}


