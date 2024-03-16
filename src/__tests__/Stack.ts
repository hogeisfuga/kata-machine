import Stack from "@code/Stack";

test("stack", function () {
    const list = new Stack<number>();

    list.push(5);
    list.push(7);
    list.push(9);

    expect(list.pop()).toEqual(9);
    expect(list.length).toEqual(2);

    list.push(11);
    expect(list.pop()).toEqual(11);
    expect(list.pop()).toEqual(7);
    expect(list.peek()).toEqual(5);
    expect(list.pop()).toEqual(5);
    expect(list.pop()).toEqual(undefined);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    list.push(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);

    //yayaya
});


describe('stack 2', () => {
    let stack: Stack<number>;

    beforeEach(() => {
    stack = new Stack<number>();
    });

    it('should push and pop elements correctly', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
  
      expect(stack.length).toBe(3);
      expect(stack.pop()).toBe(3);
      expect(stack.length).toBe(2);
      expect(stack.pop()).toBe(2);
      expect(stack.length).toBe(1);
      expect(stack.pop()).toBe(1);
      expect(stack.length).toBe(0);
      expect(stack.pop()).toBeUndefined();
    });
  
    it('should peek at the top element', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
  
      expect(stack.peek()).toBe(3);
      expect(stack.length).toBe(3);
    });
  
    it('should handle popping from an empty stack', () => {
      expect(stack.pop()).toBeUndefined();
      expect(stack.length).toBe(0);
    });
  
    it('should handle peeking at an empty stack', () => {
      expect(stack.peek()).toBeUndefined();
      expect(stack.length).toBe(0);
    });
  });