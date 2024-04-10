class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} (${this.year}) started.`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} (${this.year}) stopped.`);
  }
}

class ElectricVehicle extends Vehicle {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`${this.brand} ${this.model} (${this.year}) is charging.`);
  }
}

let car = new Vehicle("Toyota", "Camry", 2022);
let electricCar = new ElectricVehicle("Tesla", "Model S", 2024, "100 kWh");

car.start();
car.stop();

electricCar.start();
electricCar.stop();
electricCar.charge();
