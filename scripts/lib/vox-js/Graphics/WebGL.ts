import Canvas from "./Canvas.js";
import VertexBuffer from "./GL/VertexBuffer.js";

export type Context = WebGL2RenderingContext;

export default class WebGL
{
    private static ctx : Context;

    public static get Context() { return this.ctx; }

    public static Initialize()
    {
        this.ctx = Canvas.Default.getContext("webgl2") as Context;

        if(this.ctx == null)
        {
            alert("WebGL2 Is not supported. Vox-JS can't continue.");
            return;
        }
    }

    public static CreateVertexBuffer(size : number, data? : AllowSharedBufferSource)
    {
        return new VertexBuffer(this.ctx, size, data);
    }

    public static CreateIndexBuffer(size : number, data? : AllowSharedBufferSource)
    {
        return new VertexBuffer(this.ctx, size, data);
    }
}