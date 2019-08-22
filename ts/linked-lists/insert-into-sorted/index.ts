export function sortedInsert(head: DoublyLinkedListNode, data: number) {
    const node = new DoublyLinkedListNode(data);

    if (!head) {
        return node;
    }

    let iterator = head;

    while (iterator.data < data && iterator.next) {
        iterator = iterator.next;
    }

    if (iterator.data < data) {
        iterator.next = node;
        node.prev = iterator;
        return head;
    } 

    node.next = iterator;
    node.prev = iterator.prev;

    if (iterator.prev) {
        iterator.prev.next = node;
    }
    
    iterator.prev = node;
    
    return iterator === head ? node : head;
}

// export function insertNodeAtPosition(head: SinglyLinkedListNode, data: number, position: number): SinglyLinkedListNode {
//     const node = new SinglyLinkedListNode(data);

//     if (!head) {
//         return node;
//     }

//     if (position === 0) {
//         node.next = head;
//         return node;
//     }

//     let iterator = head;

//     while (position - 1 > 0 && iterator.next) {
//         iterator = iterator.next;
//         position--;
//     }

//     node.next = iterator.next;
//     iterator.next = node;

//     return head;
// }