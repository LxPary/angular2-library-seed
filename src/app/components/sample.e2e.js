describe('Sample', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <sample>', function () {
    var home = element(by.css('app sample'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Make an Angular 2 Library. Go ahead. Make one :)");
  });

});
