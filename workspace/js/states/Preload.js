var g44Game = g44Game || {};
g44Game.PreloadState = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(1);
        
        this.load.setPreloadSprite(this.preloadBar);
        
        this.load.image('background', 'assets/images/background.png');
        this.load.image('platform', 'assets/images/platform.png');
        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('goal', 'assets/images/gorilla3.png');
        this.load.image('barrel', 'assets/images/barrel.png');
        this.load.image('beer', 'assets/images/beermug.png');
        this.load.image('background2', 'assets/images/black_background.png');
        this.load.audio('coin', ['assets/images/coin.mp3', 'assets/images/coin.ogg']);
        this.load.image('titleScreen', 'assets/images/mmtitle.png');
        this.load.image('button', 'assets/images/orange.png');
        this.load.image('craigOT', 'assets/images/craig_death.png');
        this.load.image('lisaOT', 'assets/images/lisa_death.png');
        this.load.image('castle', 'assets/images/hyrule_castle.png');
        this.load.image('aboutScreen', 'assets/images/wallup-76393.jpg');
        this.load.image('final', 'assets/images/castle2.png');
        this.load.image('teddiOT', 'assets/images/teddi_death.png');
        this.load.image('goal3', 'assets/images/charizard.png');
        this.load.image('char2', 'assets/images/blue_char.png');
        this.load.image('crate', 'assets/images/crate.png');
        this.load.image('peteImage', 'assets/images/pete.png');
        this.load.image('trapped', 'assets/images/cartoon-cage.png');
        
        this.load.audio('intro', ['assets/images/01-intro.mp3', 'assets/images/01-intro.ogg']);
        this.load.audio('castlevania', ['assets/images/castelvania.mp3', 'assets/images/castlevania.ogg']);
        this.load.audio('jump', ['assets/images/Mario-jump-sound.mp3', 'assets/images/Mario-Jump-Sound.ogg']);
        this.load.audio('dungeon', ['assets/images/22-mini-fortress.mp3', 'assets/images/mini-fortress.ogg']);
        this.load.audio('mega', ['assets/images/17-wily-stage-1-2.mp3', 'assets/images/wily-stage.ogg']);
        this.load.audio('final', ['assets/images/22-trainer-battle-theme-1.mp3', 'assets/images/trainer-battle-theme.ogg']);
        this.load.audio('end', ['assets/images/10-zeldas-wiegenlied.mp3', 'assets/images/zeldas.ogg']);
        
       this.load.spritesheet('player2', 'assets/images/lisa_walk.png', 49, 53, 4, 1, 1);
       this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', 20, 21, 5, 1, 1);
       this.load.spritesheet('player', 'assets/images/craig_walk.png', 52, 57, 5, 1, 1);
       this.load.spritesheet('player3', 'assets/images/teddi_walking.png', 47, 55, 4, 1, 1);
        
    },
    create: function() {
        this.state.start('MainMenu');
    }
}