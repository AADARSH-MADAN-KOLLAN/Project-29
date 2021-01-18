class Box extends BaseClass{
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.visibility = 255;
  }

  display(){
    //console.log(this.body.speed)
    fill(130, 237, 237);
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