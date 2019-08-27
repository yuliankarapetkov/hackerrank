export class DoublyLinkedListNode {
    prev: DoublyLinkedListNode = null;
    next: DoublyLinkedListNode = null;

    constructor(public data: number) { }
}

export class DoublyLinkedList {
    head: DoublyLinkedListNode = null;
    tail: DoublyLinkedListNode = null;

    insertNode(data: number): void {
        let node = new DoublyLinkedListNode(data);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
}