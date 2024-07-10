// import greet from "../greet"

describe('greet test function to greet someone' , function(){
    it('greet should return a greeting to Bob' ,function(){
        assert.equal(greet('Bob'), 'Hello, Bob');

    });
    it('greet should return a greeting to Sam' , function(){
        assert.equal(greet('Sam'), 'Hello, Sam');

    });

});

