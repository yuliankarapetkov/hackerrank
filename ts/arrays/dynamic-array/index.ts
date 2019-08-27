function dynamicArray(n: number, queries: number[][]): any {
    const sequences = [];
    let lastAnswer = 0;
    let result = [];
    
    for (let i = 0; i < queries.length; i++) {
        const [ q, x, y ] = queries[i];
        const seqIndex = (x ^ lastAnswer) % n;

        if (!sequences[seqIndex]) {
            sequences[seqIndex] = [];
        }

        if (q === 1) {
            sequences[seqIndex].push(y);
        } else if (q === 2) {
            lastAnswer = sequences[seqIndex][y % sequences[seqIndex].length];
            result.push(lastAnswer);
        }
    }

    return result;
}