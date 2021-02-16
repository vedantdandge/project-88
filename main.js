var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

if (keyPressed =='70')
{
    new_image('download.jpg');
    console.log("h");
}
if (keyPressed == '66')
{
    new_image('spiderman.jpg');
    console.log("b");
}
if (keyPressed == '76')
{
    new_image('images.jpg');
    console.log("l");
}
if (keyPressed == '82')
{
    new_image('thor.jpg');
    console.log("r");
}
if (keyPressed == '72')
{
    new_image('captain america.jpg');
    console.log("h");

    function up(){
        if(player_y>=0){
            player_y=player_y-block_image_height;
            console.log("block image height="+block_image_height);
            console.log("when up key is pressed, X = "+player_x+" , Y = "+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function down(){
        if(player_y<=500){
            player_y=player_y+block_image_height;
            console.log("block image height="+block_image_height);
            console.log("when down key is pressed, X = "+player_x+" , Y = "+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function left(){
        if(player_x>=0){
            player_x=player_x-block_image_width;
            console.log("block image width="-block_image_width);
            console.log("when left key is pressed, X = "+player_x+" , Y = "+player_x);
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function right(){
        if(player_x<=850){
            player_x=player_x+block_image_width;
            console.log("block image width="-block_image_width);
            console.log("when right key is pressed, X = "+player_x+" , Y = "+player_x);
            canvas.remove(player_object);
            player_update();
        }
    }