export class GreetView {

    constructor() {
        this.nameInput = document.getElementById("greet-name");
        this.greetButton = document.getElementById("btn-greet");
    }

    getName() {
        return this.nameInput.value;
    }

}
