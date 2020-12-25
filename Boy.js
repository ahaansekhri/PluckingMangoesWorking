class Boy{
    constructor(){
        this.image = loadImage("boy.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, 300, 530, 200, 250);

    }

}