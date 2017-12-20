

function Airport(weather = new Weather) {
  this.landedPlanes = []
  this.weather = weather
};

  Airport.prototype.land = function(plane) {
    console.log(this.weather.isStormy())
    if (this.weather.isStormy() ) {throw Error("Weather is too stormy for landing")}
    this.landedPlanes.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    if (this.weather.isStormy() ) {throw Error("Weather is too stormy for takeoff")}
    index = this.landedPlanes.indexOf(plane)
    this.landedPlanes.splice(index, 1)
  };
