import { Graph } from './../graph';

function addEdges(graph: Graph, fromEdges: number[], toEdges: number[]): void {
    for (const i in fromEdges) {
        graph.connect(fromEdges[i], toEdges[i]);
    }
}

export function findNearestClone(fromEdges: number[], toEdges: number[], colors: number[], startFrom: number): number {
    const color = colors[startFrom - 1];

    const graph = new Graph();
    addEdges(graph, fromEdges, toEdges);

    return graph.getShortestPath(startFrom, (node: number) => colors[node - 1] === color);
}