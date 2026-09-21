export class ToggleModel {

    hidden: boolean = false;

    hide(): boolean {
        this.hidden = true;
        return this.hidden;
    }

    show(): boolean {
        this.hidden = false;
        return this.hidden;
    }

}
