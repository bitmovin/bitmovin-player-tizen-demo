window.onload = function() {
	setupPlayer();
	setupControllerEvents();
}

function setupPlayer() {
	var conf = {
		key : "<YOUR_PLAYER_KEY>",
		source : {
			// AVC Stream
			//dash : "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
			// HEVC Stream
			//dash : "https://bitmovin-a.akamaihd.net/content/multi-codec/hevc/stream.mpd"
			
			//DRM AVC Stream
		    dash: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd',
		    drm: {
		      widevine: {
		        LA_URL: 'https://widevine-proxy.appspot.com/proxy'
		      },
		      playready: {
		        LA_URL: 'https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&#038;ContentKey=EAtsIJQPd5pFiRUrV9Layw=='
		      }
		    }
		},
		playback : {
			autoplay : true
		},
		tweaks : {
			max_buffer_level : 30,
			file_protocol : true,
			app_id : "YOUR_APP_ID"
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
