// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  	// Définir ici les attributs de la 'classe'
  	this.initX = 0;
  	this.initY = 0;
  	this.finalX = 0;
  	this.finalY = 0;
	this.isPressed = false;
	this.interactor = interactor;
	
  	// Developper les 3 fonctions gérant les événements
	DnD.prototype.pression = function(evt) {
		this.isPressed = true;
		let positions = getMousePosition(canvas, evt);
		this.initX = positions.x;
		this.initY = positions.y;
		interactor.onInteractionStart(this);
		console.log('pression : ', this.initX, ', ', this.initY);
	}.bind(this);

	DnD.prototype.deplacement = function(evt) {
		if (this.isPressed) {
			let positions = getMousePosition(canvas, evt);
			this.finalX = positions.x;
			this.finalY = positions.y;
			interactor.onInteractionUpdate(this);
			console.log('deplacement : ', this.finalX, ', ', this.finalY);
		}
	}.bind(this);

	DnD.prototype.relachement = function(evt) {
		this.isPressed = false;
		let positions = getMousePosition(canvas, evt);
		this.finalX = positions.x;
		this.finalY = positions.y;
		interactor.onInteractionEnd(this);
		console.log('relachement : ', this.finalX, ', ', this.finalY);
	}.bind(this);

  	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.pression, false);
	canvas.addEventListener('mousemove', this.deplacement, false);
	canvas.addEventListener('mouseup', this.relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  	var rect = canvas.getBoundingClientRect();
  	return {
    	x: evt.clientX - rect.left,
    	y: evt.clientY - rect.top,
  	};
}
