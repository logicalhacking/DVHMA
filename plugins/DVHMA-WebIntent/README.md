# WebIntent Android Plugin for Cordova 3.X #
By Boris Smus

Phonegap/Cordova 2.X version available at the [WebIntent](https://github.com/phonegap/phonegap-plugins/tree/master/Android/WebIntent) plugin site.

## Adding the Plugin to your project ##
1. To install the plugin, use the Cordova CLI and enter the following:

`cordova plugin add https://github.com/Initsogar/cordova-webintent.git`

2. Confirm that the following is in your `res/xml/config.xml` file:

`<plugin name="WebIntent" value="com.borismus.webintent.WebIntent" />`

## Sample code

Here is an example of using webintent to open an Android .apk package, which then launches the Installer:

    window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: theFile.toURL(),
          type: 'application/vnd.android.package-archive'
        },
        function() {},
        function() {
          alert('Failed to open URL via Android Intent.');
          console.log("Failed to open URL via Android Intent. URL: " + theFile.fullPath)
        }
    );


## Using the plugin ##
The plugin creates the object `window.plugins.webintent` with five methods:

### startActivity ###
Launches an Android intent. For example:


    window.plugins.webintent.startActivity({
        action: window.plugins.webintent.ACTION_VIEW,
        url: 'geo:0,0?q=' + address},
        function() {},
        function() {alert('Failed to open URL via Android Intent')};
    );


### hasExtra ###
checks if this app was invoked with the specified extra. For example:

    window.plugins.webintent.hasExtra(window.plugins.webintent.EXTRA_TEXT,
        function(has) {
            // has is true iff it has the extra
        }, function() {
            // Something really bad happened.
        }
    );

### getExtra ###
Gets the extra that this app was invoked with. For example:

    window.plugins.webintent.getExtra(window.plugins.webintent.EXTRA_TEXT,
        function(url) {
            // url is the value of EXTRA_TEXT
        }, function() {
            // There was no extra supplied.
        }
    );

### getUri ###
Gets the Uri the app was invoked with. For example:

    window.plugins.webintent.getUri(function(url) {
        if(url !== "") {
            // url is the url the intent was launched with
        }
    });

### onNewIntent ###
Gets called when onNewIntent is called for the parent activity. Used in only certain launchModes. For example:

    window.plugins.webintent.onNewIntent(function(url) {
        if(url !== "") {
            // url is the url that was passed to onNewIntent
        }
    });

### sendBroadcast ###
Sends a custom intent passing optional extras

    window.plugins.webintent.sendBroadcast({
                action: 'com.dummybroadcast.action.triggerthing',
                extras: {
                    'option': true
                }
            }, function() {
            }, function() {
    });

## Licence ##

The MIT License

Copyright (c) 2010 Boris Smus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
