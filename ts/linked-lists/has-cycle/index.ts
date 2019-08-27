import { SinglyLinkedListNode } from './../singly-linked-list';

export function hasCycle(head: SinglyLinkedListNode): boolean {
    if (!head) {
        return false;
    }

    let iterator = head;
    let doubleIterator = head.next && head.next.next;

    while (iterator && doubleIterator) {
        if (iterator === doubleIterator) {
            return true;
        }

        iterator = iterator.next;
        doubleIterator = doubleIterator.next && doubleIterator.next.next;
    }

    return false;
}