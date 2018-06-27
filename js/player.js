function Player(game) {
  this.game = game;
  this.img = new Image();
  this.img.src = "img/Walk1.png";
  this.img.frames = 1;
  this.img.frameIndex = 0;  
  
  this.x = this.game.canvas.width * 0.48;
  this.y0 = this.game.canvas.height * 0.79;
  this.y = this.y0;

  this.w = 50;
  this.h = this.w * 2;

  this.vy = 1;

  this.setListeners();
}

Player.prototype.draw = function() {
this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === LEFT_KEY) {
      if (this.x >= 0) {
      this.x -= 15;
      }
    } else if (event.keyCode === RIGHT_KEY) {
      if (this.x + this.w <= this.game.canvas.width) {
      this.x += 15;
      }
    } else if (event.keyCode === SPACE && this.y == this.y0) {
      this.y -= 5;
      this.vy -= 10;  
    }
  }.bind(this);
};

Player.prototype.move = function() {
  var gravity = 0.5;
  if (this.y >= this.y0) {
    this.vy = 1;
    this.y = this.y0;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }
};

Player.prototype.move = function() {
  var gravity = 0.4;

  if (this.y >= this.y0) {
    this.vy = 1;
    this.y = this.y0;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }
};

var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var SPACE = 32;