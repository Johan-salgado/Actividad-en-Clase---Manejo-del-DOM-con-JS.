export class MessageModel {
    validate(text) {
        if (text.trim() === "") {
            return null;
        }
        return text;
    }
}
