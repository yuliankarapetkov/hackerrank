export class Graph {
    private _edges: { [key: number]: number[] } = {};

    connect(from: number, to: number): void {
        if (this._edges[from]) {
            this._edges[from].push(to);
        } else {
            this._edges[from] = [to];
        }

        if (this._edges[to]) {
            this._edges[to].push(from);
        } else {
            this._edges[to] = [from];
        }
    }

    // TODO: move this elsewhere
    getShortestPath(startFrom: number, condition: (node: number) => boolean): number {
        const visited = { [startFrom]: true };
        const queue = [[ startFrom, 0 ]];

        while (queue.length) {
            const [ source, distance ] = queue.shift();

            for (const neighbor of this._edges[source]) {
                if (!visited[neighbor]) {
                    if (condition(neighbor)) {
                        return distance + 1;
                    }

                    queue.push([neighbor, distance + 1]);
                    visited[neighbor] = true;
                }
            }
        }

        return -1;
    }

    // TODO: move this elsewhere
    getDistances(startFrom: number): any {
        const visited = { [startFrom]: true };
        const queue = [[ startFrom, 0 ]];
        const distances = [];
        distances[startFrom] = 0;

        while (queue.length) {
            const [ source, distance ] = queue.shift();

            for (const neighbor of this._edges[source]) {
                if (!visited[neighbor]) {
                    queue.push([neighbor, distance + 6]);
                    visited[neighbor] = true;
                    distances[neighbor] = distance + 6;
                }
            }
        }

        return distances.filter(e => !!e);
    }
}
