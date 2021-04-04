canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_images=["mars.jpg","mars2.jpg","mars3.jpg"];
random_number = Math.floor(Math.random() * 3);


width=100;
height=90;
roverx=10;
rovery=10;
background_img=mars_images[random_number];
var name1="rover.png";

function add() {
    planets=new Image();
    planets.onload=upload_background;
    planets.src=background_img;
    rover=new Image();
    rover.onload=upload_rover;
    rover.src=name1;
}
function upload_background(){
    ctx.drawImage(planets,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover,roverx,rovery,width,height);
}
window.addEventListener("keydown",ykeydown);
function ykeydown(e){
    var key_value=e.keyCode;
    console.log (key_value);

    if(key_value=="38")  {
        up();
        console.log ("up");
    }
    if(key_value=="40")  {
        down();
        console.log ("down");
    }
    if(key_value=="37")  {
        left();
        console.log ("left");
    }
    if(key_value=="39")  {
        right();
        console.log ("right");
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        upload_background();
        upload_rover();
    }
    
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        upload_background();
        upload_rover();
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10;
        upload_background();
        upload_rover();
    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10;
        upload_background();
        upload_rover();
    }
}