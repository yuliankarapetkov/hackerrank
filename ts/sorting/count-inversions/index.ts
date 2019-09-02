export function countInversions(arr: number[]): number[] {
    const [ swaps, merged ] = mergeSort(arr);
    return swaps;
}

function merge(left: number[], right: number[]): any[] {
    const merged = [];
    let swaps = 0;

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
            swaps += left.length;
        }
    }

    return [ swaps, [...merged, ...left, ...right] ];
}

function mergeSort(arr: number[]): any[] {
    if (arr.length === 1) {
        return [ 0, arr ];
    }

    const center = Math.floor(arr.length / 2);
    const [ leftSwaps, left ] = mergeSort(arr.slice(0, center));
    const [ rightSwaps, right ] = mergeSort(arr.slice(center));

    const [ swaps, merged ] = merge(left, right);

    return [ swaps + leftSwaps + rightSwaps, merged ];
}