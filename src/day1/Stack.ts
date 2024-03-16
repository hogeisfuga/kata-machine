type Node<T> = {
  value: T
  prev?: Node<T>
}

export default class Stack<T> {
  public length: number;
  private head: Node<T> | undefined

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    const node: Node<T> = { value: item }
    this.length++

    if (this.head) {
      node.prev = this.head
    }
    this.head = node
  }

  pop(): T | undefined {
    if (!this.head) return undefined
    this.length--

    const node = this.head
    this.head = this.head.prev

    return node.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}