var hpynoticBall;
var position , database

function setup(){

    database= firebase.database();
    createCanvas(500,500);
    hpynoticBall= createSprite(250,250,10,10);
    hpynoticBall.shapeColor = "red";

 var hpynoticBallPosition = database.ref("ball/position")
    hpynoticBallPosition.on("value", readPosition)

}

function draw(){
    background("white");
    if(position!== undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
    }
    
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
    position=data.val();
    hpynoticBall.x = position.x
    hpynoticBall.y = position.y
}

function writePosition(x,y){
   database.ref("ball/position").set({
       "x":position.x+x,
       "y":position.y+y
   })
}