class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x, y, 18, height);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/wood2.png");
    }
  };
  