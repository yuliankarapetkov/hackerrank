export function isBalanced(brackets: string): boolean {
    const opening = {
        '{': 1,
        '(': 2,
        '[': 3
    };

    const closing = {
        '}': 1,
        ')': 2,
        ']': 3
    };

    const bracketStack = [];

    for (let bracket of brackets) {
        const isOpening = !!opening[bracket];

        if (isOpening) {
            bracketStack.push(bracket);
        } else {
            const lastBracket = bracketStack.pop();

            if (opening[lastBracket] !== closing[bracket]) {
                return false;
            }
        }
    }

    return !bracketStack.length;
}