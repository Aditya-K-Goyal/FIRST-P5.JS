function preload()
{
 
}
function setup(){  
        canvas = createCanvas(640,480);
    canvas.position(110,250);
        video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}
function draw(){
        image(video,0,0,640,480);
        tint(tint_colour);
        rect(30, 20, 55, 55, 20);
        fill("orange");
        rect(560, 20, 55, 55, 20);

        rect(30, 400, 55, 55, 20);
        rect(560, 20, 55, 55, 20);
        rect(560, 400, 55, 55, 20);
}
function take_snapshot()
{
        save("MyFilteredImg.png");
}
function change_color() 
{
        tint_colour = document.getElementById("color_name").value;
}

