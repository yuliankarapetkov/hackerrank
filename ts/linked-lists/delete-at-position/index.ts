import { SinglyLinkedListNode } from '../singly-linked-list';

export function deleteNode(head: SinglyLinkedListNode, position: number): SinglyLinkedListNode {
    if (!head) {
        return null;
    }

    if (position === 0) {
        return head.next;
    }
    
    let iterator = head;

    while (iterator.next && position > 1) {
        iterator = iterator.next;
        position--;
    }

    iterator.next = iterator.next.next;

    return head;
}