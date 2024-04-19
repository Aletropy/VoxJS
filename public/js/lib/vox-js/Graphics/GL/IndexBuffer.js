export default class IndexBuffer {
    constructor(context, size, data) {
        this.id = {};
        let buffer = context.createBuffer();
        if (buffer == null)
            return;
        context.bindBuffer(context.ELEMENT_ARRAY_BUFFER, buffer);
        if (data == null) {
            context.bufferData(context.ELEMENT_ARRAY_BUFFER, size, context.DYNAMIC_DRAW);
        }
        else {
            context.bufferData(context.ELEMENT_ARRAY_BUFFER, data, context.STATIC_DRAW);
        }
        this.ctx = context;
        this.id = buffer;
    }
    Bind() {
        this.ctx.bindBuffer(this.ctx.ELEMENT_ARRAY_BUFFER, this.id);
    }
    SubData(data) {
        this.Bind();
        this.ctx.bufferSubData(this.ctx.ELEMENT_ARRAY_BUFFER, 0, data);
    }
}
