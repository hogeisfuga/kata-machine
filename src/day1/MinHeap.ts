export default class MinHeap {
    public length: number;
    private data: number[]
    

    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.length++
        this.heapifyUp(this.length - 1)
    }

    delete(): number {
        if(this.length === 0) return -1
        let minVal = this.data[0]
        let lastVal = this.data.pop()!
        this.data[0] = lastVal
        this.length--
        this.heapifyDown(0)

        return minVal
    }

    private heapifyUp(idx: number): void {
        if(idx <= 0) return
        let item = this.data[idx]
        let parentIdx = this.parentIdx(idx)
        let parentItem = this.data[parentIdx]
        if(item <= parentItem) {
            this.data[idx] = parentItem
            this.data[parentIdx] = item
            this.heapifyUp(parentIdx)            
        }
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChildIdx(idx)
        const rightIdx = this.rightChildIdx(idx)
        let minIdx = idx

        if (leftIdx < this.length && this.data[leftIdx] < this.data[minIdx]) {
            minIdx = leftIdx
        }
        if (rightIdx < this.length && this.data[rightIdx] < this.data[minIdx]) {
            minIdx = rightIdx
        }

        if (minIdx !== idx) {
            [this.data[idx], this.data[minIdx]] = [this.data[minIdx], this.data[idx]]
            this.heapifyDown(minIdx)
        }
    }

    private parentIdx(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    private leftChildIdx(parentIdx: number): number {
        return 2 * parentIdx + 1
    }

    private rightChildIdx(parentIdx: number): number {
        return 2 * parentIdx + 2
    }
}