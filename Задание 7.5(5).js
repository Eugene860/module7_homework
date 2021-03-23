class Devices {
  constructor(name, power, country) {
    this.name = name,
    this.power = power,
    this.country = country
    }
    getOn() {
      console.log(`${this.name} включен`)
      };
    getOff() {
      console.log(`${this.name} выключен`)
      }
    };

class LaptopDevice extends Devices {
  constructor(name, power, country) {
    super();
    this.name = name,
    this.power = power,
    this.country = country
    }
    getRestart() {
    this.getOn();
    this.getOff()
    }
  };

const TABLE_LAMP_BLACK = new Devices("black lamp", 40, "Russia");
TABLE_LAMP_BLACK.color = "black";

const TABLE_LAMP_RED = new Devices("red lamp", 40, "Russia");
TABLE_LAMP_RED.color = "red";

const LENOVO = new LaptopDevice("LENOVO", 120, "China");
LENOVO.color = "grey";

const DELL = new LaptopDevice("DELL", 115, "USA");
DELL.color = "white";

console.log(Devices);
console.log(LaptopDevice);
console.log(TABLE_LAMP_BLACK);
console.log(TABLE_LAMP_RED);
console.log(LENOVO);
console.log(DELL)