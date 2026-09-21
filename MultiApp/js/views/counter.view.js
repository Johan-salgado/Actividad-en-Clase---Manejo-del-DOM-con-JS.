export class CounterView {

    constructor() {
        this.counterValue = document.getElementById("counter-value");
        this.incrementButton = document.getElementById("btn-increment");
        this.decrementButton = document.getElementById("btn-decrement");
        this.resetButton = document.getElementById("btn-reset");
    }

    updateValue(value) {
        this.counterValue.textContent = value;
    }

}
