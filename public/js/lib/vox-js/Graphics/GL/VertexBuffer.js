export default class VertexBuffer {
    constructor(context, size, data) {
        this.id = {};
        let buffer = context.createBuffer();
        if (buffer == null)
            return;
        context.bindBuffer(context.ARRAY_BUFFER, buffer);
        if (data == null) {
            context.bufferData(context.ARRAY_BUFFER, size, context.DYNAMIC_DRAW);
        }
        else {
            context.bufferData(context.ARRAY_BUFFER, data, context.STATIC_DRAW);
        }
        this.ctx = context;
        this.id = buffer;
    }
    Bind() {
        this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, this.id);
    }
    SubData(data) {
        this.Bind();
        this.ctx.bufferSubData(this.ctx.ARRAY_BUFFER, 0, data);
    }
}
