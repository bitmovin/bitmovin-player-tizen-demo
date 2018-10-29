# bitmovin-player-tizen-demo
This repository contains a sample app that used the Bitmovin HTML5 Player in a Tizen App. 

### Using the Sample App

1. Download [Tizen Studio](https://developer.tizen.org/development/tizen-studio/download)
2. Open the sample app with Tizen Studio 
3. Connect your TV Device. This [tutorial](https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device)  is a good reference 
4. Input your player key into `main.js` 
5. Run/debug the sample app. If you debug, you will see Chrome developer tools launch. This will enable you to debug, monitor network requests, and execute commands through the javascript console.

### Notes for developing your own app
Make sure to enable `file_protocol` and set your `app_id` in the `tweaks` section of your config 

```
var conf = {
	key : "<YOUR_PLAYER_KEY>",
	playback : {
		autoplay : true
	},
	tweaks : {
		file_protocol : true,
		app_id : "YOUR_APP_ID"
	}
};
```

### Additional Documentation

Complete API documentation is available at https://developer.bitmovin.com/hc/en-us

Other demo applications https://bitmovin.com/demo/
