export class MessageModel {

    validate(text: string): string | null {
        if (text.trim() === "") {
            return null;
        }

        return text;
    }

}
