from structures.bst import BinarySearchTree, Node

def height(node: Node):
    if node is None:
        return -1
    else:
        leftHeight = height(node.left)
        rightHeight = height(node.right)

        return leftHeight + 1 if leftHeight > rightHeight else rightHeight + 1

tree = BinarySearchTree()

tree.create(5)
tree.create(10)
tree.create(15)
tree.create(2)
tree.create(3)

print(height(tree.root))
