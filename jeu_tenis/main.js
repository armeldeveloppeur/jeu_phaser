var mainState = {
	preload: function() {
		game.load.image('paddle', 'paddle.png');
		game.load.image('ball', 'ball.png');
	},
	create: function() {
		game.stage.backgroundColor = '#006534';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.enableBody = true;

		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;

		this.player = game.add.sprite(game.width/2, game.height-40, 'paddle');
		this.player.anchor.setTo(0.5);
		this.player.body.collideWorldBounds = true;
		this.player.body.immovable = true;

		this.leftP2 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
		this.rightP2 = game.input.keyboard.addKey(Phaser.Keyboard.D);

	
		this.player2 = game.add.sprite(game.width/2, 40, 'paddle');
		this.player2.anchor.setTo(0.5);
		this.player2.body.collideWorldBounds = true;
		this.player2.body.immovable = true;

		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

		
		this.ball = game.add.sprite(game.width/2, game.height/2, 'ball');
		this.ball.anchor.setTo(0.5);
		this.ball.body.collideWorldBounds = true;
		this.ball.body.velocity.x = 300;
		this.ball.body.velocity.y = 300;
		this.ball.body.bounce.setTo(1);
	},
	update: function() {
		game.physics.arcade.collide([this.player, this.player2], this.ball);

		if(this.ball.y > this.player.y+20) {
			game.state.start('main');
		}
		if(this.ball.y < this.player2.y-20) {
			game.state.start('main');
		}


		if(this.left.isDown) {
			this.player.body.velocity.x = -300;
		}
		else if(this.right.isDown) {
			this.player.body.velocity.x = 300;
		}
		else {
			this.player.body.velocity.x = 0;
		}
		if(this.leftP2.isDown) {
			this.player2.body.velocity.x = -300;
		}
		else if(this.rightP2.isDown) {
			this.player2.body.velocity.x = 300;
		}
		else {
			this.player2.body.velocity.x = 0;
		}
	}
};

var game = new Phaser.Game(360, 640);
game.state.add('main', mainState);
game.state.start('main');
