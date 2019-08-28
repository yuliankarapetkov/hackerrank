export function printMaxStack(inputs: number[][]): void {
    const stack = [];
    const maxStack = [];

    for (let input of inputs) {
        const [ command, value ] = input;

        switch (command) {
            case 1: 
                if (!maxStack.length || maxStack[maxStack.length - 1] <= value) {
                    maxStack.push(value);
                }

                stack.push(value);

                break;
            case 2:
                const removed = stack.pop();

                if (maxStack.length && maxStack[maxStack.length - 1] === removed) {
                    maxStack.pop();
                }

                break;
            case 3:
                console.log(maxStack[maxStack.length - 1]);
                break;
        }
            
    }
}