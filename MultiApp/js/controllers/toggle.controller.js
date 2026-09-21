import { ToggleModel } from "../models/toggle.model.js";
import { ToggleView } from "../views/toggle.view.js";

export class ToggleController {

    model = new ToggleModel();
    view = new ToggleView();

    constructor() {
        this.view.showButton.addEventListener("click", () => {
            this.show();
        });

        this.view.hideButton.addEventListener("click", () => {
            this.hide();
        });
    }

    show() {
        this.model.show();
        this.view.showImage();
    }

    hide() {
        this.model.hide();
        this.view.hideImage();
    }

}
