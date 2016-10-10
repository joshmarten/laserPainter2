var cornerDistance; //diagonal distance from cursor to nearest window corner
var canvasDiagonal; //diagonal distance from center of canvas to corners of canvas

var xMiddle; //x-coordinate of canvas center
var yMiddle; //y-coordinate of canvas center

var c; //line color
var w; //line width

var counter = 0;
var currentTime;
var lastTime;
var interval = 1000;

function startCounter() {
	currentTime = millis();
	if (currentTime - lastTime > interval) {
		lastTime = currentTime;
		counter = counter + 1;
	}
}

function startMessage() {
	if (counter < 4) {
		textAlign(CENTER);
		textSize(windowHeight / 20);
		fill(50);
		text("CLICK AND DRAG", windowWidth / 2, windowHeight / 2);
		textAlign(CENTER);
		textSize(windowHeight / 40);
		fill(50);
		text("HOLD A/S/D FOR A SURPRISE, C TO CLEAR", windowWidth / 2, windowHeight / 2 + windowHeight / 20);
	} else if (counter == 4) {
		noStroke();
		fill(255);
		rect(0, 0, windowWidth, windowHeight);
	}
}

function centerDraw() {
	if (mouseIsPressed) {
		stroke(c);
		strokeWeight(w);
		line(xMiddle, yMiddle, mouseX, mouseY);
		w = w + 1;
	} else {
		w = 5;
		c = color(random(255), random(255), random(255));
		line(xMiddle, yMiddle, mouseX, mouseY);
	}
}

function cornerDraw() {
	if (mouseX <= windowWidth / 2 && mouseY <= windowHeight / 2) { //top left corner
		cornerDistance = sqrt(mouseX * mouseX + mouseY * mouseY); //measure distance to corner
		strokeWeight((canvasDiagonal / cornerDistance) * (canvasDiagonal / cornerDistance)); //adjusting weight based on distance to corner
		if (mouseIsPressed) {
			stroke(c);
			line(0, 0, mouseX, mouseY);
		} else {
			stroke(random(255), random(255), random(255), random(255));
			line(0, 0, mouseX, mouseY);
		}
	} else if (mouseX > windowWidth / 2 && mouseY <= windowHeight / 2) { //top right corner
		cornerDistance = sqrt((windowWidth - mouseX) * (windowWidth - mouseX) + mouseY * mouseY);
		strokeWeight((canvasDiagonal / cornerDistance) * (canvasDiagonal / cornerDistance));
		if (mouseIsPressed) {
			stroke(c);
			line(windowWidth, 0, mouseX, mouseY);
		} else {
			stroke(random(255), random(255), random(255), random(255));
			line(windowWidth, 0, mouseX, mouseY);
		}
	} else if (mouseX <= windowWidth / 2 && mouseY > windowHeight / 2) { //bottom left corner
		cornerDistance = sqrt(mouseX * mouseX + (windowHeight - mouseY) * (windowHeight - mouseY));
		strokeWeight((canvasDiagonal / cornerDistance) * (canvasDiagonal / cornerDistance));
		if (mouseIsPressed) {
			stroke(c);
			line(0, windowHeight, mouseX, mouseY);
		} else {
			stroke(random(255), random(255), random(255), random(255));
			line(0, windowHeight, mouseX, mouseY);
		}
	} else if (mouseX > windowWidth / 2 && mouseY > windowHeight / 2) { //bottom right corner
		cornerDistance = sqrt((windowWidth - mouseX) * (windowWidth - mouseX) + (windowHeight - mouseY) * (windowHeight - mouseY));
		strokeWeight((canvasDiagonal / cornerDistance) * (canvasDiagonal / cornerDistance));
		if (mouseIsPressed) {
			stroke(c);
			line(windowWidth, windowHeight, mouseX, mouseY);
		} else {
			stroke(random(255), random(255), random(255), random(255));
			line(windowWidth, windowHeight, mouseX, mouseY);
		}
	}
}

function parade1() {
	if (key === 'a') {
		push();
		translate(mouseX,mouseY);
		for (var i = 0; i < width / 10; i++) {
			for (var j = 0; j < height / 10; j++) {
				noStroke();
				fill(random(255),random(255),random(255));
				triangle(i * 30, j * 30, i * 30 + width/16, j * 30 + height/12, i * 30 + width/16, j * height/12 - 20);
			}
		}
		pop();
	}
}

function parade2() {
	if (key === 's') {
		push();
		translate(mouseX,mouseY);
		for (var i = 0; i < width / 10; i++) {
			for (var j = 0; j < height / 10; j++) {
				noStroke();
				fill(random(255),random(255),random(255));
				triangle(i * 30, j * 30, i * 30 + width/4, j * 30 + height/3, i * 30 + width/4, j * height/3 - 20);
			}
		}
		pop();
	}
}

function parade3() {
	if (key === 'd') {
		push();
		translate(mouseX,mouseY);
		for (var i = 0; i < width / 10; i++) {
			for (var j = 0; j < height / 10; j++) {
				noStroke();
				fill(random(255),random(255),random(255));
				triangle(i * 10, j * 10, i * 10 + width/2, j * 10 + height/4, i * 10 + width/5, j * 10 - height/7);
			}
		}
		pop();
	}
}

function clearCanvas(){
	if (key === 'c') {
		noStroke();
		fill(255);
		rect(0,0,width,height);
	}
}