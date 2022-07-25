class Controls {
    constructor() {
        this.forward = false;
        this.right = false;
        this.left = false;
        this.reverse = false;
        this.addKeyboardListeners();
    }
    addKeyboardListeners() {
        window.addEventListener('keydown', e => {
            let key = e.key;
            switch (key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
        });
        window.addEventListener('keyup', e => {
            let key = e.key;
            switch (key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
        });
    }
}
//# sourceMappingURL=controls.js.map