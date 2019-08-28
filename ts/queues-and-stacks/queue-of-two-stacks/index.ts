import { StackQueue } from "./stack-queue";

export function testStackQueue(queries: number[][]): number[] {
    const result = [];

    const queue = new StackQueue();

    for (const query of queries) {
        const [ command, value ] = query;

        switch (command) {
            case 1:
                queue.enqueue(value);
                break;
            case 2:
                queue.dequeue();
                break;
            case 3:
                result.push(queue.head);
                break;
        }
    }

    return result;
}