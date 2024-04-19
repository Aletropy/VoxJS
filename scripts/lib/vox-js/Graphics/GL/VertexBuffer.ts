import { Context } from "../WebGL.js";

export default class VertexBuffer
{
    private id : WebGLBuffer = {};
    private ctx : Context;

    constructor(context : Context, size : number, data? : AllowSharedBufferSource)
    {
        let buffer = context.createBuffer();
        if(buffer == null) return;
        
        context.bindBuffer(context.ARRAY_BUFFER, buffer);
        if(data == null)
        {
            context.bufferData(context.ARRAY_BUFFER, size, context.DYNAMIC_DRAW);
        }
        else
        {
            context.bufferData(context.ARRAY_BUFFER, data, context.STATIC_DRAW);
        }

        this.ctx = context;
        this.id = buffer;
    }

    public Bind()
    {
        this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, this.id);
    }

    public SubData(data : AllowSharedBufferSource)
    {
        this.Bind();
        this.ctx.bufferSubData(this.ctx.ARRAY_BUFFER, 0, data);
    }
}