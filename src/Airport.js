function Airport() {
  this.landedPlanes = []
};

  Airport.prototype.land = function(plane) {
    this.landedPlanes.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    index = this.landedPlanes.indexOf(plane)
    this.landedPlanes.splice(index, 1)
  };
