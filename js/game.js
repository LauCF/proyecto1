function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.reset();
}

Game.prototype.start = function() {
  this.interval = setInterval(function() {
    this.clear();

    this.framesCounter++;

    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }

    if (this.framesCounter % 150 === 0) {
      this.generateObstacle("cerebro");
    } else if(this.framesCounter % 200 === 0) {
      this.generateObstacle("cake")
    } else if(this.framesCounter % 50 === 0){
      this.score++;
    }
    this.gameOver();
    this.draw();
    this.moveAll();

    console.log(this.isCollision());

    if (this.isCollision()) {
      this.lives--;
      }
      console.log(this.score)
      console.log(this.lives)
      this.clearObstacles();

      }.bind(this), 1000 / this.fps);
      };

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  if(this.lives === 0) {
    this.stop();
  if(confirm("GAME OVER. PLAY AGAIN?")) {
    this.reset();
    this.start();
  }
  }
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstacles = [];
  this.framesCounter = 0;
  this.score = 0;
  this.lives = 3;
};

Game.prototype.isCollision = function() {
  return this.obstacles.some(function(obstacle) {
    return ((this.player.x + this.player.w) >= obstacle.x) &&
    this.player.x <= (obstacle.x + obstacle.w) &&
    this.player.y <= (obstacle.y + obstacle.h) &&
    (this.player.y + this.player.h) >= obstacle.y
  }.bind(this));
};

Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    if (((this.player.x + this.player.w) >= obstacle.x) &&
    this.player.x <= (obstacle.x + obstacle.w) &&
    this.player.y <= (obstacle.y + obstacle.h) &&
    (this.player.y + this.player.h) >= obstacle.y) {
      return false;
    }
    return obstacle.y <= this.canvas.height;
  }.bind(this));
};

Game.prototype.generateObstacle = function(typeOfObstacle) {
  this.obstacles.push(new Obstacle(this, typeOfObstacle));
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(obstacle) { obstacle.draw(); });

  this.ctx.font = "28px sans-serif";
  this.ctx.fillStyle = "red ";
  this.ctx.fillText(("Score " + this.score), 50, 50);

  this.ctx.font = "28px sans-serif";
  this.ctx.fillStyle = "yellow";
  this.ctx.fillText(("Lives " + this.lives), 175, 50);
};

Game.prototype.moveAll = function() {
  this.player.move();
  this.obstacles.forEach(function(obstacle) { 
    if (obstacle.typeOfObstacle === "cerebro") {
    obstacle.moveY(); 
  } else {
    obstacle.moveX();
  }
  });
};