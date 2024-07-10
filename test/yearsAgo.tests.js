// import yearsAgo from "../yearsAgo"

describe('yearsAgo that takes in a year' , function(){
    it('yearsAgo that takes in a year and return how many years ago that year is from the current year.' ,function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))

    });
    it('yearsAgo that takes in a year and return how many years ago' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

    });

});
