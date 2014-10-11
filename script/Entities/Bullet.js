ENGINE.Bullet = function(args) {

  Utils.extend(this, {

    direction: 0,
    speed: 300,
    lifespan: 2
  }, args);

  this.sprite = this.sprites[this.team];
  this.width = this.sprite[2];
  this.height = this.sprite[3];
  this.radius = Math.min(this.width, this.height) / 2 | 0;
  app.playSound("shoot");

};

ENGINE.Bullet.prototype = {

  constructor: ENGINE.Bullet,

  zIndex: 3,

  collidable: true,

  collision: function(entity) {

    if (entity.hit) {

      if (entity.team !== this.team) {
        entity.hit(this);
        this.collection.remove(this);
      }

    }

  },

  step: function(delta) {

    /* lifespan */

    if ((this.lifespan -= delta) < 0) this.collection.remove(this);

    /* movement */

    this.x += Math.cos(this.direction) * this.speed * delta;
    this.y += Math.sin(this.direction) * this.speed * delta;

    /* wrap */

    app.game.wrap(this);
  },

  sprites: [
    [20, 53, 6, 6],
    [43, 53, 6, 6]
  ],

  render: function() {
    //app.layer.drawRegion(app.images.spritesheet, this.sprite, this.x - this.width / 2, this.y - this.height / 2);
    app.layer.drawRegion(app.images.spritesheet, this.sprite, this.x, this.y);
  }

};
