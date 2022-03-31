img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	img = loadImage("mario05.png");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on
}

function modelLoaded() {
	console.log("MODEL LOADED!!!");
}

function gotPoses(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + ", noseY = " + noseY);
	}
}

function draw() {
	background("#7b68ee");
	image(img, marioX, marioY, 40, 70);
	game()
	if(noseX > 400){
		marioX = marioX - 1;
	}
	if(noseX < 800){
		marioX = marioX + 1;
	}
	if(noseY > 200){
		marioY = marioY - 1;
	}
}




