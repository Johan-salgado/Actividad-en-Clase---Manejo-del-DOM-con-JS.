export class CounterModel {

    value: number = 0;

    increment(): number {
        this.value = this.value + 1;
        return this.value;
    }

    decrement(): number {
        this.value = this.value - 1;
        return this.value;
    }

    reset(): number {
        this.value = 0;
        return this.value;
    }

}
