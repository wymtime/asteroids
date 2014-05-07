(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (pos, vel, radius, color) {
    Asteroids.MovingObject.call(this, pos, vel);
    this.radius = Bullet.RADIUS;
    this.color = Bullet.COLOR;
  };

  Bullet.RADIUS = 3;
  Bullet.COLOR = "red";

  Bullet.inherits(Asteroids.MovingObject);

})(this);

