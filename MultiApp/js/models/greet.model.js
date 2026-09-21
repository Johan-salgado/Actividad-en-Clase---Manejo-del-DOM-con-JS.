export class GreetModel {
    getGreeting(name) {
        if (name.trim() === "") {
            return null;
        }
        return "Bienvenido: " + name;
    }
}
