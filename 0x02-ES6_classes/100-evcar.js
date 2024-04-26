// 100-evcar.js
import Car from './10-car'; // Remove file extension

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // Create a new instance of Car with undefined attributes
    const carClone = new Car();
    return carClone;
  }
}

export default EVCar;
