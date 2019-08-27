import { SinglyLinkedListNode } from './../singly-linked-list';

export function removeDuplicates(head: SinglyLinkedListNode): SinglyLinkedListNode {
    if (!head) {
        return null;
    }

    let iterator = head;

    while (iterator && iterator.next) {
        if (iterator.data === iterator.next.data) {
            iterator.next = iterator.next.next;
        } else {
            iterator = iterator.next;
        }
    }

    return head;
}