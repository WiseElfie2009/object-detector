img="";
status="";
objects=[];
function preload(){
   // img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    canvas.position(400,150);
    video=createCapture(VIDEO);
    video.size(600,450);
    video.hide();
    object_detector_load=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("loading...").innerHTML="status:detecting...";
}

function modelLoaded(){
    console.log("model loaded");
    status=true;
    //object_detector_load.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}

function draw(){
    image(video,0,0,600,450);
    if(status != ""){
        r=random(255);
        g=random(255);
        b=random(255);
        object_detector_load.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("loading...").innerHTML="status:Object Detected (≧▽≦*)o";
            document.getElementById("no_[]_objects").innerHTML="no of objects detected are : "+objects.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence * 100);
    text(objects[i].label+""+percent+"%",objects[i].x+10,objects[i].y+10);
    stroke(r,g,b);
    noFill();
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

  
}
