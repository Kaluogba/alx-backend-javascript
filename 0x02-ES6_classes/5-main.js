import Building from './5-building.js';

class TestBuilding extends Building {
  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return "This is a test evacuation warning message.";
  }
}

try {
  const testBuilding = new TestBuilding(200);
  console.log(testBuilding);
} catch (err) {
  console.log(err);
}
