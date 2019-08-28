export class StackQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];

    get size(): number {
        return this.stack1.length + this.stack2.length;
    }

    get head(): number {
        this._shiftElements();
        return this.stack2.length ? this.stack2[this.stack2.length - 1] : null;
    }

    enqueue(data: number): void {
        this.stack1.push(data);
    }

    dequeue(): number {
        this._shiftElements();
        return this.stack2.length ? this.stack2.pop() : null;
    }

    private _shiftElements(): void {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
    }
}