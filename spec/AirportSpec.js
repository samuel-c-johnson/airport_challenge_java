'use strict';

describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport(weather=weather);
    plane = {}
    weather = {isStormy: function(){return true}}
  });

  it("should acccept a landing plane", function() {
    spyOn(weather, 'isStormy').and.returnValue(false)
    airport = new Airport(weather)
    airport.land(plane)
    expect(airport.landedPlanes).toContain(plane)
  });

  it("allow planes to takeoff", function() {
    spyOn(weather, 'isStormy').and.returnValue(false) //quick, dirty fix for changing default weather
    airport = new Airport(weather=weather)
    airport.land(plane)
    expect(airport.landedPlanes).toContain(plane)
    airport.takeOff(plane)
    expect(airport.landedPlanes).not.toContain(plane)
  })

  it("Prevents planes takingoff when weather is stormy", function() {
    expect(airport.weather.isStormy()).toBe(true)
    expect(function(){ airport.takeOff(plane)}).toThrowError("Weather is too stormy for takeoff")
    })

  it("Prevents planes landing when weather is stormy", function() {
    spyOn(weather, 'isStormy').and.returnValue(true)
    expect(airport.weather.isStormy()).toBe(true)
    expect(function(){ airport.land(plane)}).toThrowError("Weather is too stormy for landing")
  })

})
