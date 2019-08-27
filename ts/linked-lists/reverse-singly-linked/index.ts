import { SinglyLinkedListNode } from './../singly-linked-list';

function reverse(head: SinglyLinkedListNode): SinglyLinkedListNode {
    if (!head) {
        return null;
    }

    const stack = [];

    while (head) {
        stack.push(head.data);
        head = head.next;
    }

    const newHead = new SinglyLinkedListNode(stack.pop());
    let iterator = newHead;

    while (stack.length) {
        const node = new SinglyLinkedListNode(stack.pop());

        iterator.next = node;
        iterator = node;
    }

    return newHead;
}