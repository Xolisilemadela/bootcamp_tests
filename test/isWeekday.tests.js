// import isWeekday from "../isWeekday"

describe('isWeekday that takes a string parameter' , function(){
    it('isWeekday should returns true if  is a day of the week' ,function(){
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);

        

    });
    it('isWeekday should returns false if  is a weekend day' , function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
        

    });

});