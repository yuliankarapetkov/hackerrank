export class SinglyLinkedListNode {
    next: SinglyLinkedListNode = null;

    constructor(
        public data: number
    ) {}
}

export class SinglyLinkedList {
    head: SinglyLinkedListNode = null;
    tail: SinglyLinkedListNode = null;

    insertNode(data: number) {
        const node = new SinglyLinkedListNode(data);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
}