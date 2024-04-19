export default class Canvas {
    static get Default() { return this.defaultCanvas; }
    static get Width() { return this.width; }
    static get Height() { return this.height; }
    static CreateDefaultCanvas() {
        let canvas = document.createElement("canvas");
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.style.backgroundColor = "#000";
        canvas.id = "vox-js-canvas";
        document.body.appendChild(canvas);
        this.defaultCanvas = canvas;
        return canvas;
    }
}
