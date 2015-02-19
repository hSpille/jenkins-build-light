var usb = require('usb')
var request = require('request')
var schalter = require('./leiste')

console.log(usb.getDeviceList())
schalter(4,1, function() {});



