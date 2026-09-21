import { GreetModel } from "../models/greet.model.js";
import { GreetView } from "../views/greet.view.js";

export class GreetController {

    model = new GreetModel();
    view = new GreetView();

    constructor() {
        this.view.greetButton.addEventListener("click", () => {
            this.greet();
        });
    }

    greet() {
        const name = this.view.getName();
        const message = this.model.getGreeting(name);

        if (message === null) {
            alert("Por favor, ingrese su nombre.");
            return;
        }

        alert(message);
    }

}
