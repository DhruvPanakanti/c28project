class mango{
constructor(x,y){
var options={
    restitution:0.9,
    density:0.5,
    friction:1.0
}
this.body=Bodies.rectangle(x,y,30,30,options);
this.width=30;
this.height=30;
this.image=loadImage("mango.png")
World.add(world,this.body);
}
display(){
    var man=this.body.position;
    var angle=this.body.angle;
    push()
    translate(man.x,man.y);
    rotate(angle);
    imageMode(CENTER);
   image(this.image,0,0,this.width,this.height);

  
    pop ();
}
}