export function minimumAbsoluteDifference(arr: number[]): number {
    const uniqueNumbersMap = {};

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueNumbersMap[arr[i]]) {
            uniqueNumbersMap[arr[i]] = true;
        }
    }

    const uniqueNumbers = Object.keys(uniqueNumbersMap).map(key => +key);
    let minAbsDiff = Number.MAX_SAFE_INTEGER;

    while (uniqueNumbers.length > 1) {
        for (let i = 1; i < uniqueNumbers.length; i++) {
            const diff = Math.abs(uniqueNumbers[0] - uniqueNumbers[i]);

            if (minAbsDiff > diff) {
                minAbsDiff = diff;
            }
        }

        uniqueNumbers.shift();
    }

    return minAbsDiff;
}

export function minimumAbsoluteDifference2(arr: number[]): number {
    let minAbsDiff = Number.MAX_SAFE_INTEGER;

    while (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {
            const diff = Math.abs(arr[0] - arr[i]);

            if (minAbsDiff > diff) {
                minAbsDiff = diff;
            }
        }

        arr.shift();
    }

    return minAbsDiff;
}

function minimumAbsoluteDifference3(arr: number[]): number {
    arr.sort();

    let minAbsDiff = Number.MAX_SAFE_INTEGER;

    // Loop through the consecutive pairs, if 0 return, else set min diff
    for (let i = 0; i < arr.length; i++) {
        let diff = Math.abs(arr[i + 1] - arr[i]);

        if (diff === 0) {
            return 0;
        }

        if (minAbsDiff > diff) {
            minAbsDiff = diff;
        }
    }

    return minAbsDiff;
}