import { SinglyLinkedListNode } from './../singly-linked-list';

export function printLinkedList(head: SinglyLinkedListNode): void {
    while (head) {
        console.log(head.data);
        head = head.next;
    }
}