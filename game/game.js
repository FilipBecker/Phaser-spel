'use strict';

const preload = () => {
    this.load.image('sky', './assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png', 
        { frameWidth: 32, frameHeight: 48}
    );
}

const create = () => {
    this.add.image(400, 300, 'sky');
}

const update = () => {

}

const config = {
    type: Phaser.AUTO, 
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
