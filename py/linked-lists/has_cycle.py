from structures.singly_linked_list import SinglyLinkedList, SinglyLinkedListNode

def has_cycle(head: SinglyLinkedListNode):
    if not head:
        return False
    
    iterator = head
    double_iterator = head.next.next if head.next is not None else None

    while (iterator is not None and double_iterator is not None):
        if iterator == double_iterator:
            return True

        iterator = iterator.next
        double_iterator = double_iterator.next.next if double_iterator.next is not None else None

    return False
