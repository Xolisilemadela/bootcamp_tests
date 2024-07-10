// import fromWhere from "../fromWhere"

describe('fromWhere', function() {
    it('should return "Bellville" if the registration number starts with "CY"', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });

    it('should return "Paarl" if the registration number starts with "CJ"', function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it('should return "Cape Town" if the registration number starts with "CA"', function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

   
   it('should return "Some other place!" if the registration number does not start with "CY", "CJ", or "CA"', function() {
    assert.equal(fromWhere('ZN 568593'), 'Some other place!');
  });
});