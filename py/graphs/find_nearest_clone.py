import math
import os
import random
import re
import sys
from collections import defaultdict
import queue

class Graph:
    def __init__(self):
        self.edge_map = defaultdict(set)
    
    def connect(self, from_, to_):
        self.edge_map[from_].add(to_)
        self.edge_map[to_].add(from_)
    
    def shortest_path_from(self, start_node, cond):
        visited = set()
        q = queue.Queue()
        q.put([start_node, 0])
        visited.add(start_node)
        
        while not q.empty():
            source, dist = q.get()
            
            for neighbor in self.edge_map[source]:
                if not neighbor in visited:
                    if cond(neighbor): return dist+1

                    q.put([neighbor, dist+1])
                    visited.add(neighbor)

        return -1

def add_edges(graph, graph_from, graph_to):
    for i in range(len(graph_from)):
        from_ = graph_from[i]
        to_ = graph_to[i]
        graph.connect(from_, to_)

def find_nearest_clone(graph_from, graph_to, ids, val):
    color_to_match = ids[val-1]
    
    g = Graph()
    add_edges(g, graph_from, graph_to)
    return g.shortest_path_from(val, lambda node: ids[node-1] == color_to_match)

# 5 4
# 1 2
# 1 3
# 2 4
# 3 5
# 1 2 3 3 2
# 2

graph_from = [1,1,2,3]
graph_to = [2,3,4,5]
ids = [1,2,3,3,2]
val = 2

print(find_nearest_clone(graph_from, graph_to, ids, val))

