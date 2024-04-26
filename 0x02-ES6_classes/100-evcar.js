// 100-evcar.js
import Car from './10-car'; // Remove file extension

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // Use 'this' to access attributes
    const carClone = new Car(this._brand, this._motor, this._color);
    return carClone;
  }
}

export default EVCar;
