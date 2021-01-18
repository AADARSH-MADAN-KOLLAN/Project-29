class Box2 extends BaseClass{
  constructor(x,y,width,height){
    super(x,y,width,height);
  }

  display(){
    fill(60, 242, 163);
    if(this.body.speed<4){
      super.display();
   }
   else{
     push();
     tint(255, this.visibility);
     var pos = this.body.position;
     this.visibility = this.visibility-5;
     pop();
     World.remove(world, this.body);
   }
  }
  score(){
    if(this.visibility<0 && this.visibility>=-10){
      score++
    }
  }
}