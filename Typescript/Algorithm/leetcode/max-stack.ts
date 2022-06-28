class MaxStack {
    stack: number[]
    constructor() {
        this.stack = []
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        return this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    peekMax(): number {
        return Math.max(...this.stack)
    }

    popMax(): number {
        const target = this.peekMax()
        for (let i = this.stack.length - 1; i >= 0; i--) {
            if (this.stack[i] === target) {
                this.stack.splice(i, 1)
                break
            }
        }
        return target
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
