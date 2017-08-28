var Splash = function () {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('game', 'game.js');
  },

  init: function () {
    this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "load");
    this.logo = game.make.sprite(game.world.centerX, 200, 'logo');
    this.status = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
    util.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {
    game.add.sprite(0, 0, 'background');
    game.add.existing(this.logo).scale.setTo(0.5);
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();

  },

  addGameStates: function () {
    game.state.add("Game",Game);
  },

  create: function() {
    this.status.setText('Ready!');
    this.addGameStates();
    this.addGameMusic();

    setTimeout(function () {
      game.state.start("GameMenu");
    }, 1000);
  }
};