export class ToggleModel {
    constructor() {
        this.hidden = false;
    }
    hide() {
        this.hidden = true;
        return this.hidden;
    }
    show() {
        this.hidden = false;
        return this.hidden;
    }
}
