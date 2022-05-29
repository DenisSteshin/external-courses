function Device(power = 200, isOn = false) {
  this.power = power;
  this.isOn = isOn;

  (this.enable = function enable() {
    this.isOn = true;
    console.log('Is ON!');
  }),
  (this.disable = function disable() {
    this.isOn = false;
    console.log('Is OFF!');
  });
}
const device = new Device();

function VacuumCleaner(power = 200, isOn = false, mode = 'dry') {
  this.power = power;
  this.isOn = isOn;
  this.mode = mode;

  (this.switchMode = function () {
    if (this.mode === 'dry') {
      this.mode = 'wet';
      console.log('Mode is wet');
    } else {
      this.mode = 'dry';
      console.log('Mode is dry');
    }
  }),
  (this.getInfo = function () {
    if (this.isOn) {
      console.log(`Power = ${this.power}, mode = ${this.mode}`);
    } else {
      console.log('Device is off!');
    }
  });
}
VacuumCleaner.prototype = device;
const vacuumCleaner = new VacuumCleaner(500);

function RobotCleaner(power = 300, isOn = false, mode = 'dry', map = {}) {
  this.power = power;
  this.isOn = isOn;
  this.mode = mode;
  this.map = map;

  this.scan = function () {
    if (this.map) {
      this.map = { width: '20px', height: '20px' };
    } else {
      console.log('Map is install!');
    }
  };
}

RobotCleaner.prototype = vacuumCleaner;
const robotCleaner = new RobotCleaner();
robotCleaner.getInfo();
function RobotSoldier(power = 300, isOn = false, isShoot = false, map = {}) {
  this.power = power;
  this.isOn = isOn;
  this.isShoot = isShoot;
  this.map = map;

  this.shoot = function () {
    if (this.isShoot) {
      this.isShoot = false;
      console.log('Robot is not shooting...!');
    } else {
      this.isShoot = true;
      console.log('Robot is shooting...!');
    }
  };
  this.scan = function () {
    if (this.map) {
      this.map = { width: '30px', height: '30px' };
    } else {
      console.log('Map is install!');
    }
  };
  this.getInfo = function () {
    if (this.isOn) {
      console.log(
        `Power = ${this.power}, isShoot = ${this.isShoot}, map = ${this.map}`,
      );
    } else {
      console.log('Device is off!');
    }
  };
}

RobotSoldier.prototype = device;
const robotSoldier = new RobotSoldier();
robotSoldier.getInfo();
