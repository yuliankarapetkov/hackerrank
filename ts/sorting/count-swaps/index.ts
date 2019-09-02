export function countSwaps(arr: number[]): void {
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swaps++;
            }
        }
    }

    console.log(`Array is sorted in ${swaps} swaps.
    First Element: ${arr[0]}
    Last Element: ${arr[arr.length - 1]}`)
}