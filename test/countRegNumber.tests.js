// import countRegNumber from ../"countRegNumber"

describe('countRegNumber' , function(){
    it('countRegNumber returns the number of registration numbers in the string ' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
         assert.equal(regCount, 3); 
        

    });
    it('countRegNumber returns the number of registration numbers in the string ' , function(){
        var regCount = countRegNumber('CA 182736')
         assert.equal(regCount, 1);

         

    });

});