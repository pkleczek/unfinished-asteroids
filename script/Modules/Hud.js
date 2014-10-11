app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");
    app.layer.fillStyle("#fff").font("12px monospace").textAlign("right").fillText("score: " + player.score, app.width, 20);

  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

  }

};
