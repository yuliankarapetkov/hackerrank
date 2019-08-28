export function equalStacks(stack1: number[], stack2: number[], stack3: number[]): number {
    const sum = (arr: number[]) => arr.reduce((sum: number, value: number) => sum + value, 0);

    let sum1 = sum(stack1);
    let sum2 = sum(stack2);
    let sum3 = sum(stack3);
    let min = Math.min(sum1, sum2, sum3);

    while (true) {
        if (sum1 > min) {
            sum1 -= stack1.shift();
        }

        if (sum2 > min) {
            sum2 -= stack2.shift();
        }

        if (sum3 > min) {
            sum3 -= stack3.shift();
        }

        if (sum1 === sum2 && sum2 === sum3) {
            return min;
        }
        
        min = Math.min(sum1, sum2, sum3);
    }
}