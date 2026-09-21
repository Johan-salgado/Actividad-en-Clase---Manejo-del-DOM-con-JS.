import { CounterModel } from "../models/counter.model.js";
import { CounterView } from "../views/counter.view.js";

export class CounterController {

    model = new CounterModel();
    view = new CounterView();

    constructor() {
        this.view.incrementButton.addEventListener("click", () => {
            this.increment();
        });

        this.view.decrementButton.addEventListener("click", () => {
            this.decrement();
        });

        this.view.resetButton.addEventListener("click", () => {
            this.reset();
        });
    }

    increment() {
        const value = this.model.increment();
        this.view.updateValue(value);
    }

    decrement() {
        const value = this.model.decrement();
        this.view.updateValue(value);
    }

    reset() {
        const value = this.model.reset();
        this.view.updateValue(value);
    }

}
