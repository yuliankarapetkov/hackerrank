import { SinglyLinkedListNode } from './../singly-linked-list';

export function reversePrint(head: SinglyLinkedListNode): void {
    if (!head) {
        return;
    }

    const stack = [];

    while (head) {
        stack.push(head.data);
        head = head.next;
    }

    while (stack.length) {
        console.log(stack.pop());
    }
}