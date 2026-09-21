export class GreetModel {

    getGreeting(name: string): string | null {
        if (name.trim() === "") {
            return null;
        }

        return "Bienvenido: " + name;
    }

}
