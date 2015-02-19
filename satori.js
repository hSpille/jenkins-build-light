var usb = require('usb') //npm install usb // Libusb is required 1.09 or greater
var request = require('request') //Request -- Simplified HTTP client
var schalter = require('./leiste')



var lastState = -1
var allGreen

setInterval(function() {
request('http://yourJenkinsServer:8181/api/json?pretty=true',function(error,request,body){
	var parsed = JSON.parse(body)
	allGreen=parsed.jobs.map(function jobToColor(job){
		return job.color == 'blue' || job.color == 'blue_anime';
	}).filter(function filterNotGreen(s){return !s}).length == 0
	console.log('BuildStatus: ' + allGreen)
	var state = allGreen
	if(lastState == -1 || state != lastState){
		lastState = state
		schalter(1,state, function() {schalter(2,!state, function() {});});
	}
});
}, 15000)
