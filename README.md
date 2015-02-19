# jenkins-build-light

Jenkins-build-light provides code snippets for monitoring your jenkins build server with whatever you can plug in to a power plug.
Maybe a simple light, fan or lava-lamp. 

Requirements<br>
You need hardware: http://www.gembird.nl/item.aspx?id=3234&lang=de <br>
Linux <br>
Depending if you using node or python - node or python <br>
libusb <br>
Additions to /etc/udev/rules.d/ <br>


Installation<br>
* Udev <br>
If you not plan to run this as root, you need the following new udev entry: 
Add a new rule to '/etc/udev/rules.d/' Call the file whatever you want - add the following:<br>
<pre> SUBSYSTEM=="usb", ATTR{idVendor}=="04b4", ATTR{idProduct}=="fd13", MODE="0666", GROUP="myusbgroup" </pre><br> 
-->Add your user to the group. Relogin. Done.<br>

* Node && npm <br>
Install node http://nodejs.org/ <br>
Install npm https://www.npmjs.com/ <br>
Debian/Ubuntu users can install using apt <br>

* libusb-1.0-0 installieren (apt-get install libusb-1.0-0) <br>
* npm install usb <br>
* npm install request
* Test: 'node test.js'  <br>
This will switch your power plug. If so - all you need to do is now change your server url in the file you plan to use and your done<br>
* Run: 'node satori.js &' <br>


FILES:
- leiste.py
Python build monitor. Just change the url to your jenkins
- test.js 
Test File if your power plug works at all - run with node
- satori.js 
Main file which will from now on switch your plugs 
- leiste.js 
contents function for switching. 












