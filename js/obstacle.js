function Obstacle(game, typeOfObstacle) {
  this.game = game;

  this.typeOfObstacle = typeOfObstacle;
  
  if (typeOfObstacle === "cerebro") {
    this.img = new Image();
    this.img.src = "img/gemarosa.png";
    this.w = 75;
    this.h = this.w;
    this.x = Math.floor((this.game.canvas.width + this.w) * Math.random());
    this.y0 = this.game.canvas.height * 0.01;
    this.y = this.y0;
    this.vy = 1;
  } else {
    this.img = new Image();
    this.img.src = "img/gematurquesa.png";
    this.w = 70;
    this.h = this.w;
    this.x = this.game.canvas.width * 0.01;
    this.y = this.game.canvas.height * 0.90;
    this.vx = 1;
  }
}

Obstacle.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  
};

Obstacle.prototype.moveY = function() {
  this.y += this.vy;
};

Obstacle.prototype.moveX = function() {
  this.x += this.vx;
};
