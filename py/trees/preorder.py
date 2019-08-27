from structures.bst import BinarySearchTree, Node

def pre_order(node: Node):
    if node != None:
        print(node.info, end = ' ')
        pre_order(node.left)
        pre_order(node.right)

tree = BinarySearchTree()

tree.create(5)
tree.create(10)
tree.create(15)
tree.create(2)
tree.create(3)

pre_order(tree.root)
