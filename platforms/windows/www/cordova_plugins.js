cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.chariotsolutions.nfc.plugin/www/phonegap-nfc.js",
        "id": "com.chariotsolutions.nfc.plugin.NFC",
        "runs": true
    },
    {
        "file": "plugins/com.chariotsolutions.nfc.plugin/src/windows/nfc-plugin.js",
        "id": "com.chariotsolutions.nfc.plugin.NfcPlugin",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.chariotsolutions.nfc.plugin": "0.6.2"
}
// BOTTOM OF METADATA
});