var five = require('johnny-five');

function Robot() {
    var Motion = require('./motion');
    this.motion = new Motion();
}

Robot.prototype.initSystem = function () {
    this.motion.initializeHardware();
}

Robot.prototype.idle = function () {
    this.motion.idle();
}

module.exports = Robot;