function Drawing() {
    this.shapes = [];

    Drawing.prototype.getForms = function() {
        return this.shapes;
    }
   
};

function Shape(thickness, color) {
    this.thickness = thickness;
    this.color = color;

    Shape.prototype.getColor = function() {
        return this.color;
    }

    Shape.prototype.getThickness = function() {
        return this.thickness;
    }

};

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

    Rectangle.prototype.getWidth = function() {
        return this.width;
    }

    Rectangle.prototype.getHeight = function() {
        return this.height;
    }
};

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
      
};
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
