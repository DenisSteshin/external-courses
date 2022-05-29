class ElectricalAppliance {
  constructor(name, enabled = false, intake = 0) {
    this.name = name;
    this.enabled = enabled;
    this.intakePower = intake;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  getPower() {
    if (this.enabled) {
      return this.intakePower;
    }
    return 0;
  }
}

class Computer extends ElectricalAppliance {
  constructor(typePC) {
    super('PC', false, 400);
    this.typePC = typePC;
  }
}

class TV extends ElectricalAppliance {
  constructor(brand) {
    super('TV', false, 300);
    this.brand = brand;
  }
}

const lamp = new ElectricalAppliance('Lamp', false, 70);
const pc = new Computer('Gaming');
const tv = new TV('Sony');
const pc2 = new Computer('Work');
const tv2 = new TV('Samsung');
const house = {
  room: [
    pc,
    pc2,
    tv,
    tv2,
    lamp,
    lamp,
    lamp,
    lamp,
    lamp,
    lamp,
    lamp,
    lamp,
    lamp,
    lamp,
  ],
  search(nameElectricalAppliance) {
    return this.room.some((item) => item.name === nameElectricalAppliance);
  },
  searchGlobal(nameElectricalAppliance) {
    return nameElectricalAppliance instanceof ElectricalAppliance;
  },
  getIntakePower() {
    return (
      `${this.room.reduce(
        (accumulator, currentValue) => accumulator + currentValue.getPower(),
        0,
      )} wwat`
    );
  },
};

pc.enable();
tv.enable();
lamp.enable();
console.log(house.getIntakePower());
