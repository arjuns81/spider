function setup() {
{ video=createCapture(VIDEO);
}video.size(400,400);
canvas.createCanvas(500,500);
canvas.position(500,150);
posenet=ml5.posenet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
    background("pale yellow");
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(){
    if(results.length>0){
        console.log(results);
    }
}