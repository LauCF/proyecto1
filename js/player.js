function Player(game) {
  this.game = game;

  this.img = new Image();
  this.images = {
    left: "img/player.png",
    right: "img/playerderecha.png",
  };
  this.sprite = {};
  this.img.frames = 1;
  this.img.frameIndex = 0;  
  var that = this;
  Object.keys(this.images).forEach(function(key) {
    var image = new Image();
    image.src = that.images[key];
    that.sprite[key] = image;
  });

  this.x = this.game.canvas.width * 0.48;
  this.y0 = this.game.canvas.height * 0.78;
  this.y = this.y0;

  this.w = 80;
  this.h = this.w * 1.58;

  this.vy = 1;
  this.vx = 0;
  this.maxSpeed = 4;
  this.img = this.sprite.left;
  this.setListeners();
}

Player.prototype.draw = function() {
this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === LEFT_KEY) {
     this.vx = -this.maxSpeed;
     this.img = this.sprite.left;
    } else if (event.keyCode === RIGHT_KEY) {
      this.vx = this.maxSpeed;
      this.img = this.sprite.right;
    } else if (event.keyCode === SPACE && this.y == this.y0) {
      this.y -= 15;
      this.vy -= 10;  
    }
  }.bind(this);

  document.onkeyup = function(event) {
    if (event.keyCode === LEFT_KEY) {
     this.vx = 0;
    } else if (event.keyCode === RIGHT_KEY) {
      this.vx = 0;
    }
  }.bind(this);
};

Player.prototype.move = function() {
  var gravity = 0.2;
  if (this.y >= this.y0) {
    this.vy = 1;
    this.y = this.y0;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }

  if (this.x < 0) {
    this.x = 0;
  }
  if (this.x + this.w > this.game.canvas.width) {
    this.x = this.game.canvas.width - this.w;
  }
  this.x += this.vx;
};

var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var SPACE = 32;