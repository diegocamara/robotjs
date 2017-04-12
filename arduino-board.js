var five = require('johnny-five');
var board = new five.Board({ repl: false });

var Robot = require('./robot/robot');
var robot = new Robot({
    motionOptions: {
        baseServoOptions: {
            pin: 0,
            startAt: 80
        },
        headServoOptions: {
            pin: 1,
            startAt: 90
        }
    }
});

board.on('ready', function () {

    //robot.initSystem();
    //robot.idle();

});