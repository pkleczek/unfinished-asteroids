ENGINE.Coin = function(args) {

  Utils.extend(this, {}, args);

};

ENGINE.Coin.prototype = {

  constructor: ENGINE.Coin,

  collidable: true,

  frame: 0,

  delta: 0,

  radius: 5,

  frames: [
    [0, 0, 10, 10],
    [11, 0, 10, 10],
    [21, 0, 10, 10],
    [31, 0, 10, 10],
    [41, 0, 10, 10],
    [51, 0, 10, 10],
    [61, 0, 10, 10]
  ],

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
      object.score += 5;
      this.collection.remove(this);
    }

  },

  step: function(delta) {
    this.delta += delta;

    if(this.delta > 0.200) {
      this.frame = (this.frame + 1) % 7;
      this.delta = 0;
    }

    app.game.wrap(this);
  },

  render: function(delta) {

    app.layer.drawRegion(app.images.coins, this.frames[this.frame], this.x, this.y);

  }

};
