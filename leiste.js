
var usb = require('usb')

module.exports = function schalte(stecker,anOderAus, cb){
	var device = usb.findByIds('1204','64787')
	var setTo = anOderAus;
	var num = stecker;
	var magicNumber = 768 + num * 3
	var buff = new Buffer([num * 3, setTo * 3]) 
	device.open()
	device.controlTransfer(0x21,0x09,magicNumber,0,buff,function(err,data){
	console.log(err)
	console.log(data)
	device.close()
	if (cb) cb();
	})
}





