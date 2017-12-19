'use strict';

describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

  it("should acccept a landing plane", function() {
    airport.land(plane)
    expect(airport.landedPlanes).toContain(plane)
  });

  it("allow planes to takeoff", function() {
    airport.land(plane)
    expect(airport.landedPlanes).toContain(plane)
    airport.takeOff(plane)
    expect(airport.landedPlanes).not.toContain(plane)
  })

  it("Prevents planes takingoff when weather is stormy", function() {
    airport.land(plane)
    expect(airport.landedPlanes).toContain(plane)
    expect(weather.isStormy).toBe(true)
    expect(airport.land(plane)).toThrow(new Error("Weather is too stormy for takeoff"))
    })

})
