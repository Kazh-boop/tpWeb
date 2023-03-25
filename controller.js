
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById("butRect").onclick = (evt) => this.currEditingMode = editingMode.rect;
	document.getElementById("butLine").onclick = (evt) => this.currEditingMode = editingMode.line;
	document.getElementById("spinnerWidth").onchange = (evt) => this.currLineWidth = evt.target.value;
	document.getElementById("colour").onchange = (evt) => this.currColour = evt.target.value;


	new DnD(canvas, this);

	Pencil.prototype.onInteractionStart = function(dnd) {
		switch (this.currEditingMode) {
			case editingMode.rect:
				this.currentShape = new Rectangle();
				break;
			case editingMode.line:
				this.currentShape = new Line();
				break;
		}
	}.bind(this);

	Pencil.prototype.onInteractionUpdate = function(dnd) {
		switch (this.currEditingMode) {
			case editingMode.rect:
				this.currentShape = new Rectangle(
					dnd.initX, dnd.initY, dnd.finalX-dnd.initX, dnd.finalY-dnd.initY, this.currLineWidth, this.currColour
				);
				break;
			case editingMode.line:
				this.currentShape = new Line(
					dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour
				);
				break;
		}
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
	}.bind(this);

	Pencil.prototype.onInteractionEnd = function(dnd) {
		drawing.shapes.push(this.currentShape);
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
	}.bind(this);
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};


