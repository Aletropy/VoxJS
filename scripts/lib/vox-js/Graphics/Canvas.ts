export type CanvasElement = HTMLCanvasElement;

export default class Canvas
{
    private static defaultCanvas : CanvasElement;
    private static width : number;
    private static height : number;

    public static get Default() { return this.defaultCanvas; }
    public static get Width() { return this.width; }
    public static get Height() { return this.height; }

    public static CreateDefaultCanvas() : CanvasElement
    {
        let canvas = document.createElement("canvas") as CanvasElement;
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