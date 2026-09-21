export class CounterModel {
    constructor() {
        this.value = 0;
    }
    increment() {
        this.value = this.value + 1;
        return this.value;
    }
    decrement() {
        this.value = this.value - 1;
        return this.value;
    }
    reset() {
        this.value = 0;
        return this.value;
    }
}
