# jenkins-build-light

Jenkins-build-light provides code snippets for monitoring your jenkins build server with whatever you can plug in to a power plug.
Maybe a simple light, fan or lava-lamp. 

Requirements
1. You need hardware: http://www.gembird.nl/item.aspx?id=3234&lang=de
2. Linux
3. Depending if you using node or python - node or python
3. libusb
4. additions to /etc/udev/rules.d/

Installation

1. Udev 
If you not plan to run this as root, you need the following new udev entry:
Add a new rule to '/etc/udev/rules.d/' Call the file whatever you want - add the following:
SUBSYSTEM=="usb", ATTR{idVendor}=="04b4", ATTR{idProduct}=="fd13", MODE="0666", GROUP="myusbgroup"
-->Add your user to the group. Relogin. Done.

2. Node && npm
Install node http://nodejs.org/
Install npm https://www.npmjs.com/
Debian/Ubuntu users can install using apt

3.0 libusb-1.0-0 installieren (apt-get install libusb-1.0-0)
3.1 npm install usb
3.2 npm install request

4. Test: 'node test.js' 
This will switch your power plug. If so - all you need to do is now change your server url in the file you plan to use and your done

5. Run: 'node satori.js &' 

FILES:
- leiste.py
Python build monitor. Just change the url to your jenkins
- test.js 
Test File if your power plug works at all - run with node
- satori.js 
Main file which will from now on switch your plugs 
- leiste.js 
contents function for switching. 












