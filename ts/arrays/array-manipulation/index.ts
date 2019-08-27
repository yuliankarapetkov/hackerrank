export function arrayManipulation(length: number, queries: number[][]): number {
    const arr = [];
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < queries.length; i++) {
        const [ start, end, number ] = queries[i];

        for (let j = start - 1; j < end; j++) {            
            arr[j] = arr[j] ? arr[j] + number : number;

            if (max < arr[j]) {
                max = arr[j];
            }
        }
    }

    return max;
}

export function arrayManipulationOptimized(length: number, queries: number[][]): number {
    const arr = [];
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < queries.length; i++) {
        const [ start, end, number ] = queries[i];

        arr[start - 1] = arr[start - 1] ? arr[start - 1] + number : number;
        arr[end] = arr[end] ? arr[end] - number : -number;
    }

    for (let i = 0, sum = 0; i < length; i++) {
        sum += arr[i] || 0;
        max = Math.max(max, sum);
    }

    return max;
}

