class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor === Building) {
      throw new Error('Abstract classes cannot be instantiated.');
    }
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method for evacuation warning message
  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage method must be implemented.');
  }
}

export default Building;
