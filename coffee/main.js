// Generated by CoffeeScript 1.9.0
(function() {
  var Cylon, moment, writeToScreen;

  writeToScreen = function(screen, message) {
    screen.setCursor(0, 0);
    screen.write(message);
  };

  Cylon = require('cylon');

  moment = require('moment');

  Cylon.robot({
    name: 'LCD'
  }).connection('edison', {
    adaptor: 'intel-iot'
  }).device('screen', {
    driver: 'upm-jhd1313m1',
    connection: 'edison'
  }).device('button', {
    driver: 'button',
    pin: 4,
    connection: 'edison'
  }).on('ready', function(my) {
    setInterval(function() {
      writeToScreen(my.screen, moment().format('h:mm:ss a'));
    });
    my.button.on('release', function() {
      console.log('button');
      writeToScreen(my.screen, 'button');
    });
  }).start();

}).call(this);