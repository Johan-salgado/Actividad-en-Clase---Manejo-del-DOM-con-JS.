import { MessageModel } from "../models/message.model.js";
import { MessageView } from "../views/message.view.js";

export class MessageController {

    model = new MessageModel();
    view = new MessageView();

    constructor() {
        this.view.changeButton.addEventListener("click", () => {
            this.change();
        });
    }

    change() {
        const text = this.view.getMessage();
        const result = this.model.validate(text);

        if (result === null) {
            alert("Debe ingresar un mensaje.");
            return;
        }

        this.view.showMessage(result);
    }

}
