class Chain{
  constructor(bodya,bodyb){
     var options={
      bodyA:bodya,
      bodyB:bodyb,
      stiffness:0.09,
      length:200
     }
     this.chain = constrain.create(options);
     World.add(world,this.chain);
  }
  display(){
    var pointa = this.chain.bodyA.position;
    var pointb = this.chain.bodyB.position;
    
    strokeWeight(5);
    stroke("white");
    line(pointa.x,pointa.y,pointb.x,pointb.y);
  }
}