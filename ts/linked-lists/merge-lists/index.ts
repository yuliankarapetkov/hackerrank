import { SinglyLinkedListNode } from './../singly-linked-list';

export function mergeLists(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode): SinglyLinkedListNode {
    if (!head1) {
        return head2;
    }

    if (!head2) {
        return head1;
    }

    let newHead: SinglyLinkedListNode;

    if (head1.data < head2.data) {
        newHead = new SinglyLinkedListNode(head1.data);
        head1 = head1.next;
    } else {
        newHead = new SinglyLinkedListNode(head2.data);
        head2 = head2.next;
    }
    
    let iterator = newHead;

    while (head1 && head2) {
        if (head1.data < head2.data) {
            iterator.next = new SinglyLinkedListNode(head1.data);
            head1 = head1.next;
        } else {
            iterator.next = new SinglyLinkedListNode(head2.data);
            head2 = head2.next;
        }

        iterator = iterator.next;
    }

    let left = head1 || head2 || null;

    if (left) {
        iterator.next = left;
    }

    return newHead;
}
