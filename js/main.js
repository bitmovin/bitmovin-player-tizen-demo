window.onload = function() {
	setupPlayer();
	setupControllerEvents();
}

function setupPlayer() {
	var conf = {
		key : "<YOUR_PLAYER_KEY>",
		source : {
			dash : "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
		},
		playback : {
			autoplay : true
		},
		tweaks : {
			max_buffer_level : 30,
			file_protocol : true,
			app_id : "0698df69-bbea-46a9-90ec-22f69d38ce10"
		}
	};

	window.player = bitmovin.player("player");
	player.setup(conf).then(function(value) {
		// Success
		console.log("Successfully created bitmovin player instance");
	}, function(reason) {
		// Error!
		console.log("Error while creating bitmovin player instance");
	});
	
	player.addEventHandler(bitmovin.player.EVENT.ON_WARNING, function(data){
        console.log("On Warning: "+JSON.stringify(data))
    });
	player.addEventHandler(bitmovin.player.EVENT.ON_ERROR, function(data){
        console.log("On Error: "+JSON.stringify(data))
    });
}

function setupControllerEvents() {
	tizen.tvinputdevice.registerKey('MediaPlayPause');
	tizen.tvinputdevice.registerKey('ColorF0Red');

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case tizen.tvinputdevice.getKey('MediaPlayPause').code:
			if (player.isPlaying()) {
				player.pause();
			} else {
				player.play();
			}
			break;
		case 37: // LEFT arrow
			break;
		case 38: // UP arrow
			break;
		case 39: // RIGHT arrow
			break;
		case 40: // DOWN arrow
			break;
		case 13: // OK button
			break;
		case 10009: // RETURN button
			tizen.application.getCurrentApplication().exit();
			break;
		default:
			console.log('Key code : ' + e.keyCode);
			break;
		}
	});
}