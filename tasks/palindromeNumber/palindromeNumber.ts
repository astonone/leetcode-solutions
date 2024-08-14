/* Folow up solution: */
export function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const numOrders = [];
    const multiplier = 10;
    let order = 0;
    while (x !== 0) {
        const currentOrder = x % Math.pow(multiplier, order + 1);
        numOrders[order] = currentOrder / Math.pow(multiplier, order);
        x -= currentOrder;
        order++;
    }
    const reversedNumOrders = numOrders.slice().reverse();
    for (let i = 0; i < numOrders.length; i++) {
        if (numOrders[i] !== reversedNumOrders[i]) {
            return false;
        }
    }
    return true;
}

// Simple solution:
export function isPalindromeSimple(x: number): boolean {
    return x.toString().split('').reverse().join('') === x.toString();
}
