export function isValid(s: string): boolean {
    const stack = new Stack<string>();
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(s[i]);
                break;
            case ')':
            case '}':
            case ']':
                if (!stack.isEmpty()) {
                    const symb = stack.pop();
                    if (s[i] === ')' && symb !== '(' ||
                        s[i] === '}' && symb !== '{' ||
                        s[i] === ']' && symb !== '['
                    ) {
                        return false;
                    }
                } else {
                    return false;
                }
                break;
            default: break;
        }
    }
    return stack.isEmpty();
}

class Stack<T> {
    private readonly stackArr: T[];
    private top: number;

    constructor() {
        this.stackArr = [];
        this.top = -1;
    }

    public push(element: T): void {
        this.stackArr[++this.top] = element;
    }

    public pop(): T {
        return this.stackArr[this.top--];
    }

    public isEmpty(): boolean {
        return this.top === -1;
    }
}
