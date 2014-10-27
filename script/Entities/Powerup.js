ENGINE.Powerup = function(args) {

  Utils.extend(this, {}, args);
  this.frame = [103, 66, 15, 15];
  this.radius = Math.min(this.frame[2], this.frame[3]) / 2 | 0;

};

ENGINE.Powerup.prototype = {

  constructor: ENGINE.Powerup,

  collidable: true,

  radius: 5,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
      object.hp = Math.min(object.hp * 1.5, object.maxHp);
      this.collection.remove(this);
    }

  },

  step: function(delta) {

  },

  render: function(delta) {

    app.layer.drawRegion(app.images.spritesheet, this.frame, this.x, this.y);

  }

};
