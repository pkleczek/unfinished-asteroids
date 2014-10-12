app.game = {

  start: function() {
    
    this.entities = new ENGINE.Entities;
    this.collisions = new ENGINE.Collisions(this.entities);
    this.collisions.callback = this.collisionHandler.bind(this);

    this.players = [];

    this.addPlayer(app.center.x + 100, app.center.y + 100, 0);
    this.addPlayer(app.center.x - 100, app.center.y - 100, 1);

    this.spawnAsteroid();
    this.spawnAsteroid();
    this.spawnAsteroid();
    this.spawnAsteroid();

  },

  collisionHandler: function(a, b) {

  },

  spawnAsteroid: function() {
    
    var angle = Math.random() * 6;
    
    var x = Math.cos(angle) * app.width;
    var y = Math.sin(angle) * app.width;

    this.entities.add(ENGINE.Asteroid, {
      x: x,
      y: y,
      direction: angle
    });

  },

  addPlayer: function(x, y, team) {

    var player = this.entities.add(ENGINE.Player, {
      team: team,
      x: x,
      y: y
    });

    this.players.push(player);

    return player;
  },

  wrap: function(entity) {

    entity.x = Utils.wrap(entity.x, -entity.radius, app.width + entity.radius);
    entity.y = Utils.wrap(entity.y, -entity.radius, app.height + entity.radius);

  },

  /* events */

  enter: function() {

  },

  step: function(delta) {

    this.entities.step(delta);
    this.collisions.step(delta);

  },

  render: function(delta) {

    app.layer.clear("#003");

    this.entities.render(delta);

    this.hud.render(delta);

  },

  keydown: function(e) {
    if(this.players[0])
      this.handleKeyboard("space", "left", "right", "up", this.players[0], true, e);
    if(this.players[1])
      this.handleKeyboard("q", "a", "d", "w", this.players[1], true, e);
  },

  keyup: function(e) {
    if(this.players[0])
      this.handleKeyboard("space", "left", "right", "up", this.players[0], false, e);
    if(this.players[1])
      this.handleKeyboard("q", "a", "d", "w", this.players[1], false, e);
  },

  handleKeyboard: function(shoot, left, right, up, player, state, e) {
    switch (e.key) {
      case shoot:
        player.shooting = state;
        break;
      case left:
        player.left = state;
        break;
      case right:
        player.right = state;
        break;
      case up:
        player.up = state;
        break;
    }
  }

};