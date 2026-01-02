import { MyStack } from './implementStackUsingQueues';

describe('MyStack', () => {
  test('should support push, top, pop, and empty operations', () => {
    const myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    expect(myStack.top()).toBe(2);
    expect(myStack.pop()).toBe(2);
    expect(myStack.empty()).toBe(false);
  });
});
