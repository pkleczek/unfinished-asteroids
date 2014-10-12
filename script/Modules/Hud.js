app.game.hud = {

  render: function(delta) {

    var player1 = app.game.players[0];
    var player2 = app.game.players[1];

    if(player1) {
      this.renderBar(16, 16, 80, 6, player1.hp / player1.maxHp, "#08f");
      app.layer.fillStyle("#fff").font("12px monospace").textAlign("right").fillText("p1 score: " + player1.score, app.width, 20);
    }

    if(player2) {
      this.renderBar(16, 32, 80, 6, player2.hp / player2.maxHp, "#e24");
      app.layer.fillStyle("#fff").font("12px monospace").textAlign("right").fillText("p2 score: " + player2.score, app.width, 40);
    }

  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

  }

};
