import { SinglyLinkedListNode } from './../singly-linked-list';

function insertNodeAtHead(head: SinglyLinkedListNode, data: number): SinglyLinkedListNode {
    const node = new SinglyLinkedListNode(data);
    node.next = head;

    return node;
}