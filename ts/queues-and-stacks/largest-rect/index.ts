export function largestRectangle(heights: number[]): number {
    const currentHeights = [];
    const maxHeights = [];

    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];

        if (i === 0) {
            for (let j = 1; j <= height; j++) {
                currentHeights[j] = 1;
                maxHeights[j] = 1;
            }
        } else {
            const previousHeight = heights[i - 1];

            const incrementTo = previousHeight < height ? previousHeight : height;

            for (let j = 1; j <= incrementTo; j++) {
                currentHeights[j]++;
                if (!maxHeights[j] || maxHeights[j] < currentHeights[j]) {
                    maxHeights[j] = currentHeights[j];
                }
            }

            const set = previousHeight < height ? 1 : 0;

            for (let j = previousHeight + 1; j <= height; j++) {
                currentHeights[j] = set;
                if (!maxHeights[j] || maxHeights[j] < currentHeights[j]) {
                    maxHeights[j] = currentHeights[j];
                }
            }
        }
    }

    let maxArea = 0;

    for (let i = 1; i < maxHeights.length; i++) {
        const area = i * maxHeights[i];

        if (maxArea < area) {
            maxArea = area;
        }
    }

    return maxArea;
}

export function largestRectangleStack(heights: number[]): number {
    const heightStack = [];
    const positionStack = [];

    let position: number;
    let tempHeight: number, tempPosition : number;
    let maxArea = Number.MIN_SAFE_INTEGER;
    let tempArea = 0;
    let height;

    const calculateMaxArea = () => {
        tempHeight = heightStack.pop();
        tempPosition = positionStack.pop();
        tempArea = tempHeight * (position - tempPosition);
        maxArea = Math.max(tempArea, maxArea);
    };

    for (position = 0; position < heights.length; position++) {
        height = heights[position];
        if (heightStack.length === 0 || height > heightStack[heightStack.length - 1]) {
            heightStack.push(height);
            positionStack.push(position);
        } else if (height < heightStack[heightStack.length - 1]) {
            while (heightStack.length && height < heightStack[heightStack.length - 1]) {
                calculateMaxArea();
            }

            heightStack.push(height);
            positionStack.push(tempPosition);
        }
    }

    while (heightStack.length) {
        calculateMaxArea();
    }

    return maxArea;
}