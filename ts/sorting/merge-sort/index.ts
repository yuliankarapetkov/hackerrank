function merge(left: number[], right: number[]): number[] {
    const merged = [];

    while (left.length && right.length) {
        merged.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return [...merged, ...left, ...right];
}

export function mergeSort(arr: number[]): number[] {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}