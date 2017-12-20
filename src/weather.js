function Weather() {
  this.currentWeather = ["Sunny", "Sunny", "Stormy"]
};



function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

Weather.prototype.randomWeather = function() {
  return sample(this.currentWeather)
};

Weather.prototype.isStormy = function() {
  return this.randomWeather() === "Stormy"
};



Math.random <= 0.2
