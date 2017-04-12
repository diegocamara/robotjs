var five = require('johnny-five');

function Robot(opts) {   
    var Motion = require('./motion');
    var motionOpts;
    if (opts && opts.motionOptions) {
        motionOpts = opts.motionOptions;
    }
    this.motion = new Motion(motionOpts);
}

Robot.prototype.initSystem = function () {
    this.motion.initializeHardware();    
}

Robot.prototype.idle = function () {
    this.motion.idle();
}

module.exports = Robot;