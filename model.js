function Drawing() {
    this.shapes = [];

    Drawing.prototype.getForms = function() {
        return this.shapes;
    }

    Drawing.prototype.paint = function(ctx) {
        //console.log(this.getForms());
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.getForms().forEach(function (eltDuTableau) {
            // now fill the canvas
            eltDuTableau.paint(ctx);
        });
    };      
}

function Shape(thickness, color) {
    this.thickness = thickness;
    this.color = color;
}

function Rectangle(x, y, width, height, thickness, color) {
    Shape.call(this, thickness, color);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    Rectangle.prototype.getInitX = function() {
        return this.x;
    }

    Rectangle.prototype.getInitY = function() {
        return this.y;
    }

    Rectangle.prototype.getFinalX = function() {
        return this.x + this.width;
    }

    Rectangle.prototype.getFinalY = function() {
        return this.y + this.height;
    }

    Rectangle.prototype.paint = function(ctx) {
        //TODO Manager color
        ctx.beginPath();
        ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
        ctx.stroke();
    };      
}

function Line(initX, initY, finalX, finalY, thickness, color) {
    Shape.call(this, thickness, color);
    this.initX = initX;
    this.initY = initY;
    this.finalX = finalX;
    this.finalY = finalY;

    Line.prototype.getInitX = function() {
        return this.initX;
    }

    Line.prototype.getInitY = function() {
        return this.initY;
    }

    Line.prototype.getFinalX = function() {
        return this.finalX;
    }

    Line.prototype.getFinalY = function() {
        return this.finalY;
    }

    Line.prototype.paint = function(ctx) {
        //TODO Manager color
        ctx.beginPath();
        ctx.moveTo(this.getInitX(), this.getInitY());
        ctx.lineTo(this.getFinalX(), this.getFinalY());
        ctx.stroke();
    };
      
}
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
