import { SinglyLinkedListNode } from './../singly-linked-list';

export function insertNodeAtPosition(head: SinglyLinkedListNode, data: number, position: number): SinglyLinkedListNode {
    const node = new SinglyLinkedListNode(data);

    if (!head) {
        return node;
    }

    if (position === 0) {
        node.next = head;
        return node;
    }

    let iterator = head;

    while (position - 1 > 0 && iterator.next) {
        iterator = iterator.next;
        position--;
    }

    node.next = iterator.next;
    iterator.next = node;

    return head;
}