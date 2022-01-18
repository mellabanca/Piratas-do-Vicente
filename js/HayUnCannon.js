class HayUnCannon {
    constructor(x, y, l, a, angulo){
        this.x = x;
        this.y = y;
        this.l = l;
        this.a = a;
        this.angulo = angulo;

        this.CannonBase = loadImage("./assets/cannonBase.png");
        this.Cannon = loadImage("./assets/canon.png");

    }

    display(){
        push();
        imageMode(CENTER);
        image(this.Cannon, this.x, this.y, this.l, this.a);
        pop();

        image(this.CannonBase,70,20,200,200);
        noFill();
    }
}