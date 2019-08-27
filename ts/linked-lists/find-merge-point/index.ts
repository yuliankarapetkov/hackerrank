import { SinglyLinkedListNode } from './../singly-linked-list';

export function findMergeNode(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode): number {
    const size1 = getListSize(head1);
    const size2 = getListSize(head2);

    let smaller = size1 > size2 ? head2 : head1;
    let bigger = size1 > size2 ? head1 : head2;

    let diff = Math.abs(size1 - size2);

    while (bigger.next && diff > 0) {
        bigger = bigger.next;
        diff--;
    }

    while (bigger && smaller) {
        if (bigger === smaller) {
            return bigger.data;
        }

        bigger = bigger.next;
        smaller = smaller.next;
    }

    return -1;
}

function getListSize(head: SinglyLinkedListNode): number {
    if (!head) {
        return 0;
    }

    let iterator = head;
    let size = 1;

    while (iterator.next) {
        iterator = iterator.next;
        size++;
    }

    return size;
}