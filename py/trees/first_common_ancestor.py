from structures.bst import Node, BinarySearchTree

def first_common_ancestor(root: Node, v1: int, v2: int):
    while True:
        if v1 > root.info and v2 > root.info:
            root = root.right
        elif v1 < root.info and v2 < root.info:
            root = root.left
        else:
            return root
