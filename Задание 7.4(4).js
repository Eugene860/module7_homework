function Devices(name, power, country) {
  this.name = name,
  this.power = power,
  this.country = country 
}
Devices.prototype.getOn = function() {
    console.log(`${this.name} включен`)};
Devices.prototype.getOff = function() {
    console.log(`${this.name} выключен`)}

const TABLE_LAMP_BLACK = new Devices("table lamp", 40, "Russia");
TABLE_LAMP_BLACK.color = "black";

const TABLE_LAMP_RED = new Devices("table lamp", 40, "Russia");
TABLE_LAMP_RED.color = "red";

function LaptopDevice(name, power, country) {
  this.name = name,
  this.power = power,
  this.country = country,
  this.getRestart = function() {
  this.getOff();
  this.getOn()}
}

LaptopDevice.prototype = new Devices();

const LENOVO = new LaptopDevice("LENOVO", 120, "China");
LENOVO.color = "grey";

const ASUS = new LaptopDevice("ASUS", 115, "China");
ASUS.color = "white";

console.log(TABLE_LAMP_BLACK);
console.log(TABLE_LAMP_RED);
console.log(LENOVO);
console.log(ASUS);