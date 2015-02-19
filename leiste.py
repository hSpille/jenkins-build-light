from usb.core import * 
import urllib2,time
o=''
while 1:
	c=urllib2.urlopen('http://yourJenkinsServer:8181/api/json?pretty=true').read().find('red')
	if c!=o:
		find(idVendor=1204,idProduct=64787).ctrl_transfer(33,9,780,0,[12,c>=0*3])
		o=c
	time.sleep(5)
