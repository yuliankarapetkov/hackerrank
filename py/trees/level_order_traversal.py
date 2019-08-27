from structures.bst import Node

def level_order(root: Node):
    queue = []
    queue.append(root)

    while queue:
        node = queue.pop(0)

        if node.left:
            queue.append(node.left)
        
        if node.right:
            queue.append(node.right)

        print(node.info, end = ' ')