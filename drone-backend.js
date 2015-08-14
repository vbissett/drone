var Cylon = require('cylon');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })

    .device("nav", {
        driver: "ardrone-nav",
        connection: "ardrone"
    })

    .on("ready", fly);


// Fly the bot
function fly(robot) {
    bot = robot;

    bot.drone.config('genera;:navdata_demo', 'TRUE');
    bot.nav.on("navdata", function(data) {
        console.log(data);
    });

    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();

    after(5 * 1000, function() {
        bot.drone.forward(0.3);
    });

    after(8 * 1000, function() {
        bot.drone.left(0.2);
    });

    after(12 * 1000, function() {
        bot.drone.back(0.3);
    });

    after(15 * 1000, function() {
        bot.drone.right(0.2);
    });

    after(18 * 1000, function() {
        bot.drone.left(0.2);
    });

    after(21 * 1000, function() {
        bot.drone.forward(0.4);
    });

    after(23 * 1000, function() {
        bot.drone.forward(0);
    });

    after(25 * 1000, function() {
        bot.drone.land();
    });

    after(28 * 1000, function() {
        bot.drone.stop();
    });

}

//bot.nav.on("altitudeChange", function(data) {
  //  console.log("Altitude:", data);
    // Drone is higher than 1.5 meters up
    //if (altitude > 1.5) {
      //  bot.drone.land();
    //}
//});

//bot.nav.on("batteryChange", function(data) {
  //  console.log("Battery level:", data);
//});



Cylon.start();


//takeoff
//land
//forward(speed)
//back(speed)
//left(speed)
//right(speed)
//up(speed)
//down(speed)

//speed is a number between 1 and 0 where 1 is full speed and 0 is no speed
// speed < 0.4
//set speed to 0 to make it stop going in that direction
//time from beginning of execution
//start giving instructions 5 secs after takeoff

