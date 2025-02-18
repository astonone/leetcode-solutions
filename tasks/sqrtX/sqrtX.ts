export function mySqrt(x: number): number {
    let down = 1;
    let up = x;
    let mid = 0;
    while (down <= up) {
        mid = Math.floor((down + up) / 2);
        if (mid * mid < x) {
            down = mid + 1;
        } else if (mid * mid > x) {
            up = mid - 1;
        } else {
            break;
        }
    }
    return mid > up ? up : mid;
}
