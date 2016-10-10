function setup() {

	noCursor();

	createCanvas(windowWidth, windowHeight);
	background(255);

	xMiddle = windowWidth / 2;
	yMiddle = windowHeight / 2;

	c = color(random(255), random(255), random(255));
	w = 5;
	
	canvasDiagonal = sqrt((windowWidth * windowWidth / 4) + (windowHeight * windowHeight / 4));

	lastTime = millis();

}

function draw() {

	startCounter();
	startMessage();
	if (counter > 4) {
		centerDraw();
		cornerDraw();
		parade1();
		parade2();
		parade3();
		clearCanvas();
	}
}