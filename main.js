var song="";

function preload(){
song=loadSound("WDTA.mp3");
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(530,200);
video=createCapture(VIDEO);
video.hide();

}
function draw(){
image(video,0,0,500,500);
}
function play(){
    song.play();

}
function stop(){
    song.stop();
}