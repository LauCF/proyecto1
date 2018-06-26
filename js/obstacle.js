function Obstacle(game) {
  this.game = game;
  this.img = new Image();
  this.img.src = "img/6.png";

  this.x = (this.game.canvas.width + this.w) * Math.random();
  this.y0 = this.game.canvas.height * 0.01;
  this.y = this.y0;

  this.w = 50;
  this.h = this.w;

  this.vy = 1;
}

Obstacle.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  this.move();
};

Obstacle.prototype.move = function() {
  this.y += this.vy;
};