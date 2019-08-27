import { DoublyLinkedListNode } from "../doubly-linked-list";

export function reverse(head: DoublyLinkedListNode) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    // Find the tail
    let tail = head;
    
    while (tail.next) {
        tail = tail.next;
    }

    tail.next = tail.prev;
    tail.prev = null;
    
    let iterator = tail.next;

    while (iterator && iterator.next) {
        const { prev } = iterator;
        iterator.prev = iterator.next;
        iterator.next = prev;

        iterator = iterator.next;
    }

    return tail;
}
