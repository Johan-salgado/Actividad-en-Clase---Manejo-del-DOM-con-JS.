export class ToggleView {

    constructor() {
        this.image = document.getElementById("toggle-image");
        this.showButton = document.getElementById("btn-show");
        this.hideButton = document.getElementById("btn-hide");
    }

    hideImage() {
        this.image.classList.add("hidden");
    }

    showImage() {
        this.image.classList.remove("hidden");
    }

}
