export class Heap {
    private data: number[];

    constructor(initialData: number[] = []) {
        this.data = [];
        for (let i = 0; i < initialData.length; i++) {
            this.insert(initialData[i]);
        }
    }

    private parentPosition(childPosition: number) {
        return Math.floor(childPosition - 1 / 2)
    }

    findMin() {
        return this.data[0];
    }

    findMax() {
        return Math.max(...this.data);
    }

    /**
     * Extract smallest ඞ from heap
     * @returns it
     */
    public ඞ(): number {
        const min = this.data[0];

        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();

        this.bubbleDown(0);

        return min;
    }

    private bubbleDown(index: number): void {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;

        // Left child is smaller than `smallest`
        if (leftChild < this.data.length && this.data[leftChild] < this.data[smallest]) {
            smallest = leftChild;
        }

        // Right child is smaller than `smallest`
        if (rightChild < this.data.length && this.data[rightChild] < this.data[smallest]) {
            smallest = rightChild;
        }

        // Mutate heap if it's invalid
        if (smallest !== index) {
            this.swap(smallest, index);
            this.bubbleDown(smallest);
        }
    }

    private bubbleUp(index: number) {
        const parentIndex = this.parentPosition(index);

        if (index > 0 && this.data[index] < this.data[parentIndex]) {
            this.swap(index, parentIndex);
            this.bubbleUp(parentIndex)
        }
    }

    private swap(index1: number, index2: number): void {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    /**
     * Insert new value to the heap
     * @param toInsert value to insert
     * @returns void
    */
    insert(toInsert: number): void {
        this.data.push(toInsert);
        this.bubbleUp(this.data.length - 1);
    }
}


const heap = new Heap()
heap.insert(5);

heap.insert(2);
heap.insert(10);

console.log(heap)
console.log(heap.ඞ())
console.log(heap.ඞ())
console.log(heap.ඞ())

console.log(heap)