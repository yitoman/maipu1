cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.alexwasner.plugins.orientationlock/www/OrientationLock.js",
        "id": "com.alexwasner.plugins.orientationlock.OrientationLock",
        "pluginId": "com.alexwasner.plugins.orientationlock",
        "clobbers": [
            "OrientationLock"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
        "id": "cordova-plugin-geolocation.Coordinates",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "id": "cordova-plugin-geolocation.PositionError",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/Position.js",
        "id": "cordova-plugin-geolocation.Position",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
        "id": "cordova-plugin-geolocation.geolocation",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.alexwasner.plugins.orientationlock": "0.0.1",
    "cordova-plugin-geolocation": "2.1.0",
    "cordova-plugin-splashscreen": "3.2.1",
    "cordova-plugin-whitelist": "1.2.0"
}
// BOTTOM OF METADATA
});