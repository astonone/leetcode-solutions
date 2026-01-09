import { MyQueue } from './implementQueueUsingStacks';

describe('MyQueue', () => {
  test('should support push, peek, pop, and empty operations', () => {
    const myQueue = new MyQueue();
    myQueue.push(1);
    myQueue.push(2);
    myQueue.push(3);
    myQueue.push(4);
    expect(myQueue.pop()).toBe(1);
    expect(myQueue.pop()).toBe(2);
    expect(myQueue.pop()).toBe(3);
    myQueue.push(5);
    myQueue.push(6);
    expect(myQueue.pop()).toBe(4);
    expect(myQueue.pop()).toBe(5);
    expect(myQueue.pop()).toBe(6);
    expect(myQueue.empty()).toBe(true);
  });
});
