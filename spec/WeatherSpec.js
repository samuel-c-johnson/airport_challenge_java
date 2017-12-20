

describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather;
  })

  it ("shows when the weather is stormy", function() {
  spyOn(Math, 'random').and.returnValue(0.85)
  expect(weather.isStormy()).toEqual(true)
  })


})
