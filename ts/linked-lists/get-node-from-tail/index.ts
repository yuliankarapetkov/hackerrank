import { SinglyLinkedListNode } from './../singly-linked-list';

export function getNode(head: SinglyLinkedListNode, positionFromTail: number): number {
    const stack = [];

    while (head) {
        stack.push(head.data)
        head = head.next;
    }

    while (positionFromTail > 0) {
        stack.pop();
        positionFromTail--;
    }

    return stack.pop();
}
