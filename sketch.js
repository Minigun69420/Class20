function setup() {
  createCanvas(800,400);
  box1 = createSprite(200,200,100,100);
  box2 = createSprite(300,150,50,150);

}

function draw() {
  background("yellow");  
  box1.x = mouseX
  box1.y = mouseY
  if(box1.x-box2.x<=box1.width/2+box2.width/2
    &&box1.y-box2.y<=box1.height/2+box2.height/2
    &&box2.x-box1.x<=box1.width/2+box2.width/2
    &&box2.y-box1.y<=box1.height/2+box2.height/2){
    box1.shapeColor = "red"
    box2.shapeColor = "red"
  }
  else{box1.shapeColor = "green"
  box2.shapeColor = "green"
  }
  
  drawSprites();
  
}