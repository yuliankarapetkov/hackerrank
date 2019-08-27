import { SinglyLinkedListNode } from './../singly-linked-list';

export function compareLists(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode): number {
    if ((head1 && !head2) || (head2 && !head1)) {
        return 0;
    }

    while (head1 && head2) {
        if (head1.data !== head2.data) {
            return 0;
        }

        head1 = head1.next;
        head2 = head2.next;
    }

    return head1 || head2 ? 0 : 1;
}