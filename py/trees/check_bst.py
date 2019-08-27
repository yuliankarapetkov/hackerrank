from structures.bst import Node, BinarySearchTree

def check_binary_search_tree_(root: Node):
    return check_binary_search_tree(root, None, None)

def check_binary_search_tree(node: Node, min, max):
    if not node:
        return True

    if (min and node.info <= min) or (max and node.info >= max):
        return False

    if (not check_binary_search_tree(node.left, min, node.info) or not check_binary_search_tree(node.right, node.info, max)):
        return False

    return True