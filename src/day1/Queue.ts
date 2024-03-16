type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  /**
   * enque item
   * @param item 
   * @returns 
   */
  enqueue(item: T): void {
    const node: Node<T> = { value: item }
    
    this.length++
    
    if (this.length === 1) {
      this.tail = this.head = node
      return
    }
    // tailだったnodeのnextにtailとなるnodeへのリンクを作る
    this.tail!.next = node
    this.tail = node

  }
  /**
   * deque item. if nothing enqued, return undefined
   * @returns T | undefined
   */
  deque(): T | undefined {
    if (!this.head) return undefined
    
    this.length--
    
    const head = this.head
    this.head = head.next
    head.next = undefined
    
    if (this.length === 0) {
      this.tail = undefined
    }
    
    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}