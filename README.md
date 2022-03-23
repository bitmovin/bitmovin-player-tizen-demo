# bitmovin-player-tizen-demo

This repository contains a sample app that uses the Bitmovin HTML5 Player in a Tizen App. Project structure:

| File/Folder | Description                                                                           |
| ----------- | ------------------------------------------------------------------------------------- |
| context.xml | Contains configuration options, application priviliges and entry points               |
| index.html  | Html laying out the structure of the demo and definition of the used player resources |
| js/main.js  | main javascript file our demo applicaiton will use                                    |
| images/     | place for the application logo                                                        |
| css/        | stylesheets used for making the demo application pretty                               |

Need some guidance? Check out our tutorial on [how to use the Bitmovin web player on Samsung Tizen TVs](https://bitmovin.com/docs/player/tutorials/getting-started-with-the-web-player-on-samsung-tizen).

### Using the Sample App

1. Download [Tizen Studio](https://developer.tizen.org/development/tizen-studio/download)
2. Open the sample app with Tizen Studio
3. Connect your TV Device. This [tutorial](https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device) is a good reference
4. Input your player key into `main.js`
5. Run/debug the sample app. If you debug, you will see Chrome developer tools launch. This will enable you to debug, monitor network requests, and execute commands through the javascript console.

### Notes for developing your own app

Make sure to enable `file_protocol` and set your `app_id` in the `tweaks` section of your config. Make sure to allowlist the `app_id` for your player license key on https://bitmovin.com/dashboard/player/licenses/

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

## Support

If you have any questions or issues with this SDK or its examples, or you require other technical support for our services, please log in to your Bitmovin Dashboard at https://bitmovin.com/dashboard and [create a new support case](https://bitmovin.com/dashboard/support/cases/create). Our team will get back to you as soon as possible :+1:
