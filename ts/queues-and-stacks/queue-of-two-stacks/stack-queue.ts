export class StackQueue {
    private _stack1: number[] = [];
    private _stack2: number[] = [];

    get size(): number {
        return this._stack1.length + this._stack2.length;
    }

    get head(): number {
        this._shiftElements();
        const head = this._stack2.pop();

        if (head) {
            this._stack2.push(head);
        }
        
        return head;
    }

    enqueue(data: number): void {
        this._stack1.push(data);
    }

    dequeue(): number {
        this._shiftElements();
        return this._stack2.pop();
    }

    private _shiftElements(): void {
        if (!this._stack2.length) {
            while (this._stack1.length) {
                this._stack2.push(this._stack1.pop());
            }
        }
    }
}