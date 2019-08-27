import { DoublyLinkedListNode } from "../doubly-linked-list";

export function sortedInsert(head: DoublyLinkedListNode, data: number) {
    const node = new DoublyLinkedListNode(data);

    if (!head) {
        return node;
    }

    let iterator = head;

    while (iterator.data < data && iterator.next) {
        iterator = iterator.next;
    }

    if (iterator.data < data) {
        iterator.next = node;
        node.prev = iterator;
        return head;
    } 

    node.next = iterator;
    node.prev = iterator.prev;

    if (iterator.prev) {
        iterator.prev.next = node;
    }
    
    iterator.prev = node;
    
    return iterator === head ? node : head;
}
