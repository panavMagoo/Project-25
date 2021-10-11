class Paper {
constructor(x,y,r){
var options={
    isStatic:false,
    restitution:0.3,
    density:1.2
}
this.image=loadImage("paper.png");
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);

}

Display(){
    push()
    translate(this.body.position.x,this.body.position.y);
    fill("black")
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r);

    pop()

}
}
