export class MessageView {

    constructor() {
        this.messageInput = document.getElementById("message-input");
        this.changeButton = document.getElementById("btn-change");
        this.messageOutput = document.getElementById("message-output");
    }

    getMessage() {
        return this.messageInput.value;
    }

    showMessage(text) {
        this.messageOutput.textContent = text;
    }

}
