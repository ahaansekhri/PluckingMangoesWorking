class Tree{
    constructor(){
        this.image = loadImage("tree.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, 1000, 375, 400, 450);

    }

}