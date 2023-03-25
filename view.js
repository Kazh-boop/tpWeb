Drawing.prototype.paint = function(ctx, canvas) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};   

Shape.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
};

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    Shape.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
    ctx.stroke();
};      

Line.prototype.paint = function(ctx) {
    //TODO Manager color
    Shape.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};


