# Remake of Sprint 2 – Build a Weather Dashboard :sunny:

Today's assignment is to build a simple weather dashboard that tells today's weather and temperature using a weather API. ..........

[Sign up for a free Open Weather Map account](https://home.openweathermap.org/users/sign_up). Once signed in, go to the "Api Keys" tab and copy the API Key. You can use the API Key in the APPID parameter when making calls to the openweathermap API.


http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=YOUR_API_KEY
replaced by http://api.weatherstack.com and code has been adjusted accordingly.


### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Change background image or background color depending on what weather or temperature it is.
1. Add which time the sun rise and sets.
1. Add so that you can choose by three different cities.

### :runner: :runner: :runner: SUPER STRETCH GOAL

The super stretch goal of this task is to package your site as a chrome extension.

:warning: The guide below is from Tjejer Kodar in London 2015. I haven't had a chance to check if it is still correct or not. It _should_ work, but have your finger ready on the google button if this doesn't work... :warning:

Chrome extensions are surprisingly simple to create. By packing the app as an extension, you’ll be able to run your weather app by clicking a button in the toolbar. All you need to do to package your app is to create a manifest, give it an icon, then install it in chrome. To create the manifest, make a new file called manifest.json in the "code" folder of this project. Within it, place this:

```
{
  "manifest_version": 2,
  "name": "Weather Dashboard",
  "description": "",
  "version": "1.0",
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "index.html"
  }
}
```

Finally, in chrome, go to Settings and then open Extensions in the sidebar. Make sure the ‘Developer mode’ checkbox is ticked, then click on the ‘Load unpacked extension’ button. Select this assignment's "code" folder and click ‘open’. You should now see the app in your extension list and and you should also see a new icon in Chrome! When you click the icon now, it’ll load your app in a popup. Just remember, when you make changes to your app, you may need to come back into the Chrome Extensions interface and click reload on your app.
