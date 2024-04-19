import Canvas from "./Canvas.js";
import VertexBuffer from "./GL/VertexBuffer.js";
export default class WebGL {
    static get Context() { return this.ctx; }
    static Initialize() {
        this.ctx = Canvas.Default.getContext("webgl2");
        if (this.ctx == null) {
            alert("WebGL2 Is not supported. Vox-JS can't continue.");
            return;
        }
    }
    static CreateVertexBuffer(size, data) {
        return new VertexBuffer(this.ctx, size, data);
    }
    static CreateIndexBuffer(size, data) {
        return new VertexBuffer(this.ctx, size, data);
    }
}
