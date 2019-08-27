import { SinglyLinkedListNode } from './../singly-linked-list';

export function insertNodeAtTail(head: SinglyLinkedListNode, data: number): SinglyLinkedListNode {
    let tail = head;
    const node = new SinglyLinkedListNode(data);

    if (!tail) {
        return node;
    }

    while (tail.next) {
        tail = tail.next;
    }

    tail.next = node;
    
    return head;
}