const fs = require('fs');
const path = require('path');

const {app, BrowserWindow} = require('electron');

//app.disableHardwareAcceleration(); // For website screenshot (shows blank screens on Windows)

// TODO move to config
app.setLoginItemSettings({
	openAtLogin: true,
	openAsHidden: true
});

// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(1);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

for (var x = 0; x < width; x++)
{
	y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
}
