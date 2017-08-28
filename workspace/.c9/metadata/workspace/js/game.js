{"filter":false,"title":"game.js","tooltip":"/js/game.js","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":0,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["var Game = function(game) {};","","Game.prototype = {","","  preload: function () {","    this.optionCount = 1;","  },","","  addMenuOption: function(text, callback) {","    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};","    var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 200, text, optionStyle);","    txt.anchor.setTo(0.5);","    txt.stroke = \"rgba(0,0,0,0\";","    txt.strokeThickness = 4;","    var onOver = function (target) {","      target.fill = \"#FEFFD5\";","      target.stroke = \"rgba(200,200,200,0.5)\";","      txt.useHandCursor = true;","    };","    var onOut = function (target) {","      target.fill = \"white\";","      target.stroke = \"rgba(0,0,0,0)\";","      txt.useHandCursor = false;","    };","    //txt.useHandCursor = true;","    txt.inputEnabled = true;","    txt.events.onInputUp.add(callback, this);","    txt.events.onInputOver.add(onOver, this);","    txt.events.onInputOut.add(onOut, this);","","    this.optionCount ++;","","","  },","","  create: function () {","    this.stage.disableVisibilityChange = false;","    game.add.sprite(0, 0, 'stars');","    this.addMenuOption('Next ->', function (e) {","      this.game.state.start(\"GameOver\");","    });","  }","};"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":42,"column":2},"action":"remove","lines":["var Game = function(game) {};","","Game.prototype = {","","  preload: function () {","    this.optionCount = 1;","  },","","  addMenuOption: function(text, callback) {","    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};","    var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 200, text, optionStyle);","    txt.anchor.setTo(0.5);","    txt.stroke = \"rgba(0,0,0,0\";","    txt.strokeThickness = 4;","    var onOver = function (target) {","      target.fill = \"#FEFFD5\";","      target.stroke = \"rgba(200,200,200,0.5)\";","      txt.useHandCursor = true;","    };","    var onOut = function (target) {","      target.fill = \"white\";","      target.stroke = \"rgba(0,0,0,0)\";","      txt.useHandCursor = false;","    };","    //txt.useHandCursor = true;","    txt.inputEnabled = true;","    txt.events.onInputUp.add(callback, this);","    txt.events.onInputOver.add(onOver, this);","    txt.events.onInputOut.add(onOut, this);","","    this.optionCount ++;","","","  },","","  create: function () {","    this.stage.disableVisibilityChange = false;","    game.add.sprite(0, 0, 'stars');","    this.addMenuOption('Next ->', function (e) {","      this.game.state.start(\"GameOver\");","    });","  }","};"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":42,"column":2},"action":"remove","lines":["var Game = function(game) {};","","Game.prototype = {","","  preload: function () {","    this.optionCount = 1;","  },","","  addMenuOption: function(text, callback) {","    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};","    var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 200, text, optionStyle);","    txt.anchor.setTo(0.5);","    txt.stroke = \"rgba(0,0,0,0\";","    txt.strokeThickness = 4;","    var onOver = function (target) {","      target.fill = \"#FEFFD5\";","      target.stroke = \"rgba(200,200,200,0.5)\";","      txt.useHandCursor = true;","    };","    var onOut = function (target) {","      target.fill = \"white\";","      target.stroke = \"rgba(0,0,0,0)\";","      txt.useHandCursor = false;","    };","    //txt.useHandCursor = true;","    txt.inputEnabled = true;","    txt.events.onInputUp.add(callback, this);","    txt.events.onInputOver.add(onOver, this);","    txt.events.onInputOut.add(onOut, this);","","    this.optionCount ++;","","","  },","","  create: function () {","    this.stage.disableVisibilityChange = false;","    game.add.sprite(0, 0, 'stars');","    this.addMenuOption('Next ->', function (e) {","      this.game.state.start(\"GameOver\");","    });","  }","};"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":207,"column":0},"action":"insert","lines":["var GameState = {","","   init: function() {","       this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;","       this.scale.pageAlignHorizontally = true;","       this.scale.pageAlignVertically = true;","","       this.game.physics.startSystem(Phaser.Physics.ARCADE);","       this.game.physics.arcade.gravity.y = 1000;","","       this.cursors = this.game.input.keyboard.createCursorKeys();","","       this.game.world.setBounds(0, 0, 1100, 700)","","       this.RUNNING_SPEED = 180;","       this.JUMPING_SPEED = 560;","","       this.score = 0;","","   },","","   preload: function () {","       this.load.image('background', 'assets/images/background.png');","       this.load.image('platform', 'assets/images/platform.png');","       this.load.image('ground', 'assets/images/ground.png');","       this.load.image('goal', 'assets/images/gorilla3.png');","       this.load.image('arrowButton', 'assets/images/arrowButton.png');","       this.load.image('actionButton', 'assets/images/actionButton.png');","       this.load.image('barrel', 'assets/images/barrel.png');","       this.load.image('beer', 'assets/images/beermug.png');","","       this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', 20, 21, 5, 1, 1);","       this.load.spritesheet('player', 'assets/images/craig_walk.png', 52, 57, 5, 1, 1);","","       //load json","       this.load.text('level', 'assets/data/level.json');","","       var scoreText;","","   },","","   create: function () {","","       this.background = this.game.add.sprite(0, 0, 'background');","        //originally I had created seperate elements, but along the way learned of \"groups\"","","         var groundData = [","           {'x':0, 'y':627},","           {'x':350, 'y':627},","           {'x':500, 'y':627},","           {'x':850, 'y':627},","               ];","","       //parsing json","       this.levelData = JSON.parse(this.game.cache.getText('level'));","","       this.grounds = this.add.group();","       this.grounds.enableBody = true;","","       groundData.forEach(function(element) {","           this.grounds.create(element.x, element.y, 'ground')","       }, this);","","       this.grounds.setAll('body.immovable', true);","       this.grounds.setAll('body.allowGravity', false);","","       this.platforms = this.add.group();","       this.platforms.enableBody = true;","","       this.levelData.platformData.forEach(function(element) {","           this.platforms.create(element.x, element.y, 'platform')","       }, this);","","       this.platforms.setAll('body.immovable', true);","       this.platforms.setAll('body.allowGravity', false);","","       //fires","","       this.fires = this.add.group();","       this.fires.enableBody = true;","","       var fire;","       this.levelData.fireData.forEach(function(element) {","           fire=this.fires.create(element.x, element.y, 'fire');","           fire.animations.add('fire', [0, 1], 4, true);","           fire.play('fire');","       }, this);","","       this.fires.setAll('body.allowGravity', false);","","       //beer","","       this.beers = this.add.group();","       this.beers.enableBody=true;","       this.game.physics.arcade.enable(this.beers);","","       this.levelData.beerCase.forEach(function(element) {","           this.beers.create(element.x, element.y, 'beer');","       }, this);","       this.beers.setAll('body.allowGravity', false);","","       //goal","","       this.goal = this.add.sprite(this.levelData.goal.x, this.levelData.goal.y, 'goal')","       this.game.physics.arcade.enable(this.goal);","       this.goal.body.allowGravity = false;","","       this.player = this.add.sprite(this.levelData.playerStart.x, this.levelData.playerStart.y, 'player', 2);","       this.player.anchor.setTo(0.5);","       this.player.animations.add('walking', [0, 1,], 6, true);","       this.game.physics.arcade.enable(this.player);","       this.player.body.collideWorldBounds = true;","","       this.game.camera.follow(this.player);","","       this.barrels = this.add.group();","       this.barrels.enableBody = true;","       this.createBarrel();","       this.barrelCreate = this.game.time.events.loop(Phaser.Timer.SECOND * this.levelData.barrelRelease, this.createBarrel, this)","","       this.collectBeersLabel = this.add.text(6, 30, \"0\")","   },","","   update: function () {","       ","       var score = 0;","       var scoreText;","       var scoreText = game.add.text(16, 30, 'score:', { fontSize: '32px', fill: '#000' });","       ","       this.game.physics.arcade.collide(this.player, this.grounds);","       this.game.physics.arcade.collide(this.player, this.platforms);","","       this.game.physics.arcade.collide(this.barrels, this.grounds);","       this.game.physics.arcade.collide(this.barrels, this.platforms);","       this.game.physics.arcade.overlap(this.player, this.barrels, this.killsPlayer);","","       this.game.physics.arcade.overlap(this.player, this.fires, this.killsPlayer);","       this.game.physics.arcade.overlap(this.player, this.goal, this.wins);","       this.game.physics.arcade.overlap(this.player, this.beers, collectBeers, null, this);","","       this.player.body.velocity.x = 0;","","       if(this.cursors.left.isDown) {","           this.player.body.velocity.x = -this.RUNNING_SPEED;","           this.player.play('walking');","           this.player.scale.setTo(-1,1);","       }","       else if(this.cursors.right.isDown) {","           this.player.body.velocity.x = this.RUNNING_SPEED;","           this.player.play('walking');","           this.player.scale.setTo(1,1);","       }","       else {","           this.player.animations.stop();","           this.player.frame = 2;","       }","       if (this.cursors.up.isDown && this.player.body.touching.down) {","           this.player.body.velocity.y = -this.JUMPING_SPEED;","       }","       var barrel;","       this.barrels.forEach(function(element) {","","","           if(element.x > 280 && element.x <290 && element.y > 160) {","               element.kill();","           }","","       },this)","","   function collectBeers (player, beers){","   beers.kill();","","   score += 10;","   scoreText.text += score;","","   }","   },","   killsPlayer: function(player, fire) {","       var death = $(\"<div class='text-centered'>'OH NOES! <br> CRAIG DIED!'</div>\");","       $('body').append(death);","       Materialize.toast(death, 5000)","       game.state.start('GameState');","   },","   wins: function(player, goal) {","       game.state.start('Level2');","        alert(\"You Won!\");","   },","   createBarrel: function() {","       var barrel = this.barrels.getFirstExists(false);","","       if(!barrel) {","           barrel = this.barrels.create(0,0, 'barrel');","       }","","       barrel.body.collideWorldBounds = true;","       barrel.body.bounce.set(1,0);","","       barrel.reset(this.levelData.goal.x, this.levelData.goal.y);","       barrel.body.velocity.x = this.levelData.barrelSpeed;","       barrel.body.bounce.set(1);","   },","};","","var game = new Phaser.Game(1100, 670, Phaser.AUTO);","","game.state.add('GameState', GameState);","game.state.start('GameState');",""],"id":4}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":207,"column":0},"end":{"row":207,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1488231073218,"hash":"9d6d43e71bdc8983e6d17aad8c55586454df3c1a"}