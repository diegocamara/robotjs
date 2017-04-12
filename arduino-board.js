var five = require('johnny-five');
var board = new five.Board({repl:false});

var Robot = require('./robot/robot');
var robot = new Robot();

board.on('ready', function () {

    robot.initSystem();
    robot.idle();
    
});