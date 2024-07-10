// import isFromBellville from ../"isFromBellville"

describe('isFromBellville' , function(){
    it('isFromBellville should returns true' , function(){
        assert.equal(isFromBellville('CY 123'), true);

    });
    it('isFromBellville should false' , function(){
        assert.equal(isFromBellville('CJ 123'), false); 

    });

});