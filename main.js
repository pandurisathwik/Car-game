canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover1_width=100;
rover1_height=90;
rover1_img=  "rover.png";
rover1_x=10;
rover1_y=10;

rover2_width=100;
rover2_height=90;
rover2_img=  "rover2.png";
rover2_x=10;
rover2_y=100;

backgound_image="mars.jpg";


function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=backgound_image;

    rover1_imgtag=new Image();  
    rover1_imgtag.onload=uploadrover;
    rover1_imgtag.src=rover_img;

    rover2_imgtag=new Image();
    rover2_imgtag.onload=uploadrover2;
    rover2_imgtag.src=rover2_img;
}

function uploadbackground(){
    ctx.drawImage(backgound_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover1_imgtag,rover1_x,rover1_y,rover1_width,rover1_height);
}

function uploadrover2(){
    ctx.drawImage(rover2_imgtag,rover2_x,rover2_y,rover2_width,rover2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
if(keyPressed=='65'){
    a();
    console.log("a");
}
if(keyPressed=='68'){
    d();
    console.log("d");
}
if(keyPressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
}

function a()
{
    if(rover1_x>= 0)
    {
        rover1_x =rover1_x - 10;
        console.log("When a is pressed,  x = " + rover1_x + " | y = " +rover1_y);
        uploadBackground();
         uploadrover();
    }

    

    function d()
    {
        if(rover1_x<= 700)
        {
            rover1_x =rover_x + 10;
            console.log("When d is pressed,  x = " + rover1_x + " | y = " +rover1_y);
            uploadBackground();
            uploadrover();
       }
    }

function left()
{
    if(rover2_x>= 0)
    {
        rover2_x =rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover2_x + " | y = " +rover2_y);
        uploadBackground();
         uploadrover2();
    }
}
function right()
{
    if(rover_x<= 700)  
    {
        rover2_x =rover2_x + 10;
        console.log("When right arrow is pressed,  x = " + rover2_x + " | y = " +rover2_y);
        uploadBackground();
        uploadrover2();
   }
}
