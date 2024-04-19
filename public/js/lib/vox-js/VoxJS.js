import Canvas from "./Graphics/Canvas.js";
import WebGL from "./Graphics/WebGL.js";
export default class VoxJS {
    static Run() {
        Canvas.CreateDefaultCanvas();
        WebGL.Initialize();
    }
}
export const canvas = Canvas;
export const webGl = WebGL;
