x="";
y="";
left="";
right="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on(pose, gotPoses);
}
function gotPoses(results){
    if(results.length<0){

    console.log(results);
    }
}
function modelLoaded(){
    console.log('Pose net is Intialised');
}
song1="";
song2="";

function preload()
{
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3");

}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song1.play();
    
}